const { Users, Auth } = require('../../lib/db');
const { generatePassword, issueToken, comparePassword } = require('../../lib/auth');

const test = async (req, res, next) => {
  res.send('GET /account/');

  next();
};

const register = async (req, res, next) => {
  const { id, pw, email } = req.body;
  const user = await Users.findOne({
    where: {
      id,
      email,
    },
    attributes: ['id', 'email'],
  });

  if (user) {
    res.json({ id: user.id.toString(), email: user.email.toString() });
    return next();
  }

  const newUser = await Users.create({
    id,
    sid: '000000000',
    nickname: id,
    email,
  });

  const auth = await Auth.create({
    uid: newUser.uid,
    digest: await generatePassword(pw),
    isOauth2: false,
    level: 0,
  });

  res.send(auth.uid.toString());

  return next();
};

const login = async (req, res, next) => {
  const { id, pw } = req.body;
  if (!id || !pw) {
    res.status(400).json({ id: id ? 'OK' : null, pw: pw ? 'OK' : null });
  }

  const user = await Users.findOne({
    where: {
      id,
      isActive: 1,
    },
    attributes: ['uid', 'nickname'],
  });

  if (!user) {
    res.status(401).json({});
    return next();
  }

  const auth = await Auth.findOne({
    where: {
      uid: user.uid,
    },
    attributes: ['digest', 'level'],
  });

  if (!auth) {
    res.status(401).json({});
    return next();
  }

  if (await comparePassword(pw, auth.digest) === false) {
    res.status(401).json({});
    return next();
  }

  user.level = auth.level;

  const jwt = await issueToken(user);
  res.status(200).json({ token: jwt });
  return next();
};

module.exports = { test, register, login };

const { Op } = require('sequelize');

const { Users, Auth, Expired } = require('../../lib/db');
const {
  generatePassword, comparePassword, issueToken,
} = require('../../lib/auth');

const test = async (req, res, next) => {
  res.send('GET /account/');

  next();
};

const register = async (req, res, next) => {
  const { id, pw, email } = req.body;

  if (!id || !pw || !email) {
    res.status(400).json({ id: id ? 'OK' : null, pw: pw ? 'OK' : null, email: email ? 'OK' : null });
    return next();
  }

  const user = await Users.findOne({
    where: {
      [Op.or]: [
        { id },
        { email },
      ],
    },
    attributes: ['id', 'email'],
  });

  if (user) {
    res.status(200).json({ id: id === user.id ? 'conflict' : 'OK', email: email === user.email ? 'conflict' : 'OK' });
    return next();
  }

  const newUser = await Users.create({
    id,
    sid: '000000000',
    nickname: id,
    email,
  });

  await Auth.create({
    uid: newUser.uid,
    digest: await generatePassword(pw),
    isOauth2: false,
    level: 0,
  });

  res.status(201).send({});
  return next();
};

const login = async (req, res, next) => {
  const { id, pw } = req.body;
  if (!id || !pw) {
    res.status(400).json({ id: id ? 'OK' : null, pw: pw ? 'OK' : null });
    return next();
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

const logout = async (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ token: null });
    return next();
  }

  const { token } = req.body;
  await Expired.create({
    token,
  });

  res.status(200).json({});
  return next();
};

module.exports = {
  test, register, login, logout,
};

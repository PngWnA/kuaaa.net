const { Users, Auth } = require('../../lib/db');
const { generatePassword } = require('../../lib/auth');

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
    res.send(user.id, user.email);
    next();
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

  next();
};

module.exports = { test, register };

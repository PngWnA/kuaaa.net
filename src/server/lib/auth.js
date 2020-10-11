const crypto = require('crypto');
const util = require('util');
const jwt = require('jsonwebtoken');

const pbkdf2 = util.promisify(crypto.pbkdf2);
const randomBytes = util.promisify(crypto.randomBytes);
const KEY_LEN = 512;

const jwtSecret = process.env.JWT_SECRET || 'DEV_TEST';

const generatePassword = async (password) => {
  const ITER = 123456;
  const ALGO = 'sha512';
  const salt = await randomBytes(16);
  const digest = await pbkdf2(password, salt, ITER, KEY_LEN, ALGO);
  return `${ALGO}:${salt.toString('base64')}:${ITER}:${KEY_LEN}:${digest.toString('base64')}`;
};

const comparePassword = async (password, storedPassword) => {
  const [algo, encodedSalt, iterStr, keylenStr, encodedDigest] = storedPassword.split(':');
  const iter = parseInt(iterStr, 10);
  const keylen = parseInt(keylenStr, 10);
  const salt = Buffer.from(encodedSalt, 'base64');
  const digest = Buffer.from(encodedDigest, 'base64');
  const hashed = await pbkdf2(password, salt, iter, keylen, algo);
  return Buffer.compare(hashed, digest) === 0;
};

const issueToken = async (user) => {
  const token = jwt.sign(
    {
      uid: user.uid,
      nickname: user.nickname,
      level: user.level,
    },
    jwtSecret,
    {
      expiresIn: '7d',
      issuer: 'kuaaa.net',
      subject: 'Auth Token',
    },
  );
  return token;
};

const verifyToken = async (token) => {
  const verified = jwt.verify(token);
  return verified;
};

generatePassword('a');
comparePassword('b');
issueToken('user');
verifyToken('a');

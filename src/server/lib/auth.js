const crypto = require('crypto');
const util = require('util');

const pbkdf2 = util.promisify(crypto.pbkdf2);
const randomBytes = util.promisify(crypto.randomBytes);
const KEY_LEN = 512;

async function generatePassword(password) {
  const ITER = 123456;
  const ALGO = 'sha512';
  const salt = await randomBytes(16);
  const digest = await pbkdf2(password, salt, ITER, KEY_LEN, ALGO);
  return `${ALGO}:${salt.toString('base64')}:${ITER}:${KEY_LEN}:${digest.toString('base64')}`;
}

async function comparePassword(password, storedPassword) {
  const [algo, encodedSalt, iterStr, keylenStr, encodedDigest] = storedPassword.split(':');
  const iter = parseInt(iterStr, 10);
  const keylen = parseInt(keylenStr, 10);
  const salt = Buffer.from(encodedSalt, 'base64');
  const digest = Buffer.from(encodedDigest, 'base64');
  const hashed = await pbkdf2(password, salt, iter, keylen, algo);
  return Buffer.compare(hashed, digest) === 0;
}

module.exports = { generatePassword, comparePassword };

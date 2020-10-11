const impl = require('../lib/auth');

const user = {};
user.uid = 1000;
user.nickname = '엄준식';
user.level = 999;

const token = impl.issueToken(user);
console.log(token);

const result = impl.verifyToken(token);
console.log(result);

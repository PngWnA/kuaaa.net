const { Router } = require('express');
const { verifyToken } = require('../../lib/auth');
const {
  register, unregister, login, logout, findid, resetpw,
} = require('./account');

const router = Router();

router.post('/register', register);
router.post('/unregister', verifyToken, unregister);
router.post('/login', login);
router.post('/logout', verifyToken, logout);
router.post('/findid', findid);
router.post('/resetpw', resetpw);

module.exports = router;

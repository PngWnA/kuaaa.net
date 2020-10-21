const { Router } = require('express');
const { verifyToken } = require('../../lib/auth');
const {
  register, unregister, login, logout,
} = require('./account');

const router = Router();

router.post('/register', register);
router.post('/unregister', verifyToken, unregister);
router.post('/login', login);
router.post('/logout', verifyToken, logout);

module.exports = router;

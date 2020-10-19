const { Router } = require('express');
const { verifyToken } = require('../../lib/auth');
const {
  test, register, login, logout,
} = require('./account');

const router = Router();

router.get('/', test);
router.post('/register', register);
router.post('/login', login);
router.post('/logout', verifyToken, logout);

module.exports = router;

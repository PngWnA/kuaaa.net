const { Router } = require('express');
const { test, register, login } = require('./account');

const router = Router();

router.get('/', test);
router.post('/register', register);
router.post('/login', login);

module.exports = router;

const { Router } = require('express');
const { test, register } = require('./account');

const router = Router();

router.get('/', test);
router.post('/register', register);

module.exports = router;

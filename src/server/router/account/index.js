const { Router } = require('express');
const { test } = require('./account');

const router = Router();

router.get('/', test);

module.exports = router;
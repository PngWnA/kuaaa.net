const express = require('express');
const { test } = require('./board');

const { Router } = express;
const router = Router();

router.get('/login', test);

module.exports = router;

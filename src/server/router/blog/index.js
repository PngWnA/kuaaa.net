const express = require('express');
const { test } = require('./blog');

const { Router } = express;
const router = Router();

router.get('/', test);

module.exports = router;

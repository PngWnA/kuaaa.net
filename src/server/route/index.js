const express = require('express');
const { hello } = require('./root.js');

const account = require('./account/index.js');
const archive = require('./archive/index.js');
const blog = require('./blog/index.js');
const board = require('./board/index.js');
const gall = require('./gall/index.js');
const notice = require('./notice/index.js');

const { Router } = express;
const router = Router();

router.use('/account', account);
router.use('/archive', archive);
router.use('/blog', blog);
router.use('/board', board);
router.use('/gall', gall);
router.use('/notice', notice);

router.get('/', hello);

module.exports = { router };
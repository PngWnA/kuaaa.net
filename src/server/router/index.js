const { Router } = require('express');

const router = Router();

const account = require('./account');
const archive = require('./archive');
const blog = require('./blog');
const board = require('./board');
const gall = require('./gall');
const notice = require('./notice');

router.use('/account', account);
router.use('/archive', archive);
router.use('/blog', blog);
router.use('/board', board);
router.use('/gall', gall);
router.use('/notice', notice);

const { hello } = require('./root');

router.get('/', hello);

module.exports = router;

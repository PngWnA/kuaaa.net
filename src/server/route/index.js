import express from 'express';
import { hello } from './root.js';

import account from './account/router.js';
import archive from './archive/router.js';
import blog from './blog/router.js';
import board from './board/router.js';
import gall from './gall/router.js';
import notice from './notice/router.js';

const { Router } = express;
const router = Router();

router.use('/account', account);
router.use('/archive', archive);
router.use('/blog', blog);
router.use('/board', board);
router.use('/gall', gall);
router.use('/notice', notice);

router.get('/', hello);

export default router;
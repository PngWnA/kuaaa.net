import express from 'express';
import { test } from './account.js';

const { Router } = express;
const router: express.Router = Router();

router.get('/', test);

export default router;
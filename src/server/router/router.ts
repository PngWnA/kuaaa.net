import express from 'express';
import { hello } from './root.js';

const { Router } = express;
const router = Router();
router.get('/', hello);

export default router;
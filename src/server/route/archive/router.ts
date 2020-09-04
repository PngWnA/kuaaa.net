import express from 'express';
import { test } from './archive.js';

const { Router } = express;
const router = Router();

router.get('/', test);

export default router;
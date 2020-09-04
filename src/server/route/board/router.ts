import express from 'express';
import { test } from './board.js';

const { Router } = express;
const router = Router();

router.get('/login', test);

export default router;
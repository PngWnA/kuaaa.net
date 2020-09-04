import express from 'express';
import { test } from './blog.js';

const { Router } = express;
const router = Router();

router.get('/', test);

export default router;
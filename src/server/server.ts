import Express from 'express';
import router from './router/router.js';

const app: Express.Application = Express();

app.use('/', router);

export default app;
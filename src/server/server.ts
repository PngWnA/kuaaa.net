import Express from 'express';
import router from './router/router.js';

const app: Express.Application = Express();

app.set('views', process.cwd() + '/../client/');
app.set('view engine', 'ejs');

app.use('/', router);

export default app;
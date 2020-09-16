import Express from 'express';
import db from './lib/db.js';
import router from './route/router.js';

const app: Express.Application = Express();
app.use('/', router);

db.sequelize
.sync()
.then(() => {console.log(`DB Sync done.`)})
.catch(() => {console.log(`WTF?`)});

export default app;
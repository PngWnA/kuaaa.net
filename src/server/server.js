import Express from 'express';
import db from './lib/db.js';
import router from './route/index.js';

const app = Express();
app.use('/', router);

db.sequelize
.sync()
.then(() => {console.log(`DB Sync done.`)})
.catch(() => {console.log(`WTF?`)});

export default app;
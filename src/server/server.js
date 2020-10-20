const Express = require('express');

const db = require('./lib/db');
const router = require('./router');

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('/', router);

db.sequelize
  .sync()
  .then(() => { console.log('DB Sync done.'); })
  .catch((err) => { console.log(err); });

module.exports = app;

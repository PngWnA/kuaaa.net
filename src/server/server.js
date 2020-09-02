"use strict";
const Express = require('express');
const router = require('./router');
const app = Express();
app.use('/', router);
module.exports = app;

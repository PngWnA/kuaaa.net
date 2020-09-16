const fs = require('fs');
const path = require('path');
const { Sequelize } = require("sequelize");

const db = {};
const sequelize = new Sequelize('sqlite::memory:');

fs.readdirSync(path.join(__dirname, `model`))
.forEach((file) => { const model = sequelize.import(path.join(__dirname, file)); db[model.name] = model; });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize('sqlite::memory:', options = {logging: (msg) => {console.log(msg)}});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Users = require('./model/users')(sequelize, Sequelize.DataTypes);
db.Auth = require('./model/auth')(sequelize, Sequelize.DataTypes);
db.Articles = require('./model/articles')(sequelize, Sequelize.DataTypes);
db.Comments = require('./model/comments')(sequelize, Sequelize.DataTypes);
db.Boards = require('./model/boards')(sequelize, Sequelize.DataTypes);

module.exports = db;
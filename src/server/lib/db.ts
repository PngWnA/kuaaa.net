import fs from 'fs';
import path from 'path';
import { Sequelize } from "sequelize";

const db: any = {};
const sequelize: Sequelize = new Sequelize('sqlite::memory:');

fs.readdirSync(__dirname)
.filter((file) => { return (file.indexOf('.') !== 0) && (file !== 'index.js'); })
.forEach((file) => { const model = sequelize.import(path.join(__dirname, file)); db[model.name] = model; });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default sequelize; 
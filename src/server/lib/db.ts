import fs from 'fs';
import path from 'path';
import { Sequelize } from "sequelize";

const db: any = {};
const sequelize: Sequelize = new Sequelize('sqlite::memory:');

fs.readdirSync(path.join(__dirname, `model`))
.forEach((file) => { const model = sequelize.import(path.join(__dirname, file)); db[model.name] = model; });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default sequelize; 
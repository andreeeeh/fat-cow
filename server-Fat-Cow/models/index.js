'use strict';

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import Sequelize from 'sequelize';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sequelize = new Sequelize('fat_cow', 'andrepangoni', '', {
    host: 'localhost',
    dialect: 'postgres',
})
sequelize.authenticate()
    .then(() => {
        console.log('Database connected 🗃️.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const db = {};
const files = fs.readdirSync(__dirname);

for (const file of files) {
    if (file !== 'index.js') {
        // const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        import(path.join(__dirname, file)).then(module => {
            const model = module.default(sequelize, Sequelize.DataTypes);
            model.sync()
            db[model.name] = model
        })
    }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;


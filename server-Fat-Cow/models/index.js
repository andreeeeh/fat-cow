'use strict';

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import Sequelize from 'sequelize';
import ResultsModel from './results.model.js';
import ClientModel from './client.model.js';
import dotenv from 'dotenv';

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sequelize = new Sequelize('fat_cow', process.env.DBUSERNAME, process.env.DBPASSWORD, {
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
const modelFiles = files.filter(file => file !== 'index.js');

Promise.all(
    modelFiles.map(file =>
        import(path.join(__dirname, file)).then(async module => {
            const model = module.default(sequelize, Sequelize.DataTypes);
            await model.sync();
            return model;
        })
    )
).then(models => {
    models.forEach(model => {
        db[model.name] = model;
    });

    db.Results = ResultsModel(sequelize, Sequelize);
    db.Client = ClientModel(sequelize, Sequelize);

    db.Results.belongsTo(db.Client, { as: 'Result', foreignKey: 'clientId' });
    db.Client.hasMany(db.Results, { as: 'Result', foreignKey: 'clientId' });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

})
export default db;


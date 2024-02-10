import fs from 'fs';
import db from './models/index.js';
import { sequelize } from './models/index.js';

async function populateDatabase (filePath) {
    try {
        console.log('Attempting to populate database...');
        const jsonData = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(jsonData);

        if (!db.sequelize) {
            throw new Error('Sequelize connection is not initialized.');
        }

        await db.sequelize.authenticate();
        console.log('Database connected 🗃️.');

        async function insertData (products) {
            for (const product of products) {
                await db.Product.create(product);
            }
            console.log('Data inserted successfully.');
        }

        await insertData(data.product);
    } catch (error) {
        console.error('Error populating database:', error);
    }
}

const filePath = './products.json';
populateDatabase(filePath);

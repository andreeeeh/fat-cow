import express from 'express';
import cors from 'cors';
import config from './config.js';
import router from './router.js';
import db from './models/index.js'

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

(async () => {
    await db.sequelize.sync({ alter: true })
    app.listen(config.port, () =>
        console.log(`server running 🏃‍♂️: http://localhost:${config.port}`))
})()
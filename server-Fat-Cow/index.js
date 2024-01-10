import express from 'express';
import config from './config.js';
import router from './router.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(config.port, () =>
    console.log(`server running: http://localhost:${config.port}`))
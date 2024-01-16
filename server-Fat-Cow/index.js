import express from 'express';
import cors from 'cors';
import conf from './config.js';
import router from './router.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

(async () => {
    app.listen(conf.port, () =>
        console.log(`server running 🏃‍♂️: http://localhost:${conf.port}`))
})()
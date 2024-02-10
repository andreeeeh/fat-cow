import express from 'express';
import cors from 'cors';
import router from './router.js';
import dotenv from 'dotenv'

dotenv.config()
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

(async () => {
    app.listen(process.env.PORT, () =>
        console.log(`server running 🏃‍♂️: http://localhost:${process.env.PORT}`))
})()
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import sequelize from './config/database.js';


import {router} from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/', router);

app.get('/', (req, res) => {
    res.status(200).json({message: 'Сервер работает!'});
});

async function start() {
    try {
        await sequelize.authenticate();

        await sequelize.sync();

        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
    } catch (error) {
        console.error(error);
    }
}

start();
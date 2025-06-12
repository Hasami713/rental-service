import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {fileURLToPath} from "url";
import path from "path";
import './models/Review.js'; // <-- Добавь это


import sequelize from './config/database.js';


import {router} from "./routes/index.js";
import errorHandlingMiddleware from "./middleware/ErrorHandlingMiddleware.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/static', express.static(path.resolve(__dirname, 'static')));


app.use('/', router);
app.use(errorHandlingMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();

        await sequelize.sync();

        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
    } catch (error) {
        console.error(error);
    }
}

start();
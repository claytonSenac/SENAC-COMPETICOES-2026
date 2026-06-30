import express from 'express';
import 'dotenv/config';
import {initDb} from './src/dbConection.js';
import { initProductControllers } from './src/controllers/produtoController.js';


const PORT = process.env.APP_PORT ?? 3000;

export const app = express();
app.use(express.json());


app.listen(PORT,(e) => {
    if(e) console.log(e);

    console.log('app rodando na porta',PORT)
});

await initDb();

await initProductControllers()



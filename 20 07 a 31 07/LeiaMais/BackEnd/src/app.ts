import express from 'express';
import 'dotenv/config';
import '../src/Models/db';
import '../src/Models/context'

export const app = express();
const APP_PORT = process.env['APP_PORT'] ?? 3000;

app.listen(APP_PORT,() => {
    console.log('servidor rodando na porta =  ' + APP_PORT)
});
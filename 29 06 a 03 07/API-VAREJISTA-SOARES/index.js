import express from 'express';
import 'dotenv/config';
import { iniciarBanco } from './src/db/conexaoBanco.js';
import { iniciarControlerCliente } from './src/controllers/clienteController.js';
const PORT = process.env.PORT ?? 3000;

export const app = express();
app.use(express.json());

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('== SERVER RODANDO ==');
});

await iniciarBanco();


await iniciarControlerCliente();
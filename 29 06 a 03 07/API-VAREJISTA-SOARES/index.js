import express from 'express';
import 'dotenv/config';
import { iniciarBanco } from './src/db/conexaoBanco.js';
import { iniciarControlerCliente } from './src/controllers/clienteController.js';
import { iniciarControlerFuncionario } from './src/controllers/funcionarioController.js';
import { iniciarControlerCategoria } from './src/controllers/categoriaController.js';
import { iniciarControlerProduto } from './src/controllers/produtoController.js';
import { iniciarControlerPedido } from './src/controllers/pedidoController.js';


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
await iniciarControlerFuncionario();
await iniciarControlerCategoria();
await iniciarControlerProduto();
await iniciarControlerPedido();
import express from 'express';
import 'dotenv/config';
import { iniciarBanco } from './src/db/conexaoBanco.js';
import { iniciarControlerCliente } from './src/controllers/clienteController.js';
import { iniciarControlerFuncionario } from './src/controllers/funcionarioController.js';
import { iniciarControlerCategoria } from './src/controllers/categoriaController.js';
import { iniciarControlerProduto } from './src/controllers/produtoController.js';
import { cadastrarPedido } from './src/services/pedidoService.js';

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



let payload = {
    Status : "Aberto",
    IdCliente: 2,
    IdFuncionario: 2,
    ItensPedido: [
        {
            Id: 3,
            Quantidade: 222
        },
        {
            Id:5,
            Quantidade:2
        }
    ]
}
await cadastrarPedido(payload);
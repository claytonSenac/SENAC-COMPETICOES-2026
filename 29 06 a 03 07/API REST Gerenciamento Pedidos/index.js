import express from 'express';
import 'dotenv/config';
import { iniciarBanco } from './src/db/ConexaoDb.js';
import { mapearControlerCliente } from './src/controllers/clienteController.js';
import { mapearControlerPedido } from './src/controllers/pedidoController.js';
import { formatarData } from './src/utils/formatarData.js';


export const app = express();
const PORT = process.env.PORT ?? 3001;

// para aceitar dados via json
app.use(express.json());

app.listen(PORT, (e) => {
    if(e){
        console.log(e);
        return;
    };

    console.log('Server rodando PORTA:',PORT);
});

await iniciarBanco();

await mapearControlerCliente();
await mapearControlerPedido();



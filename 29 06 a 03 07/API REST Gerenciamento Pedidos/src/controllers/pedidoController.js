import {app} from '../../index.js';
import { PedidoService } from '../services/pedidoService.js';

export async function mapearControlerPedido(){
    app.get('/pedido', async (req,res) => {
      const result = await PedidoService.listarPedidos();

      if(result.sucess){
        res.json(result);
      }else{
        res.status(500).json(result.message);
      }
      return;
    });

    app.get('/pedido/:idPedido',async (req,res) => {
        const {idPedido} = req.params;
        if(!isNaN(idPedido)){
            const c = await PedidoService.listarPedidoPorId(idPedido);
            if(c.sucess){
                res.status(200).json(c);
            }else{
                res.status(500).json(c.message);
            }
        }else{
            res.status(400).json({erro: "SEM ID Pedido ( NUMBER ) "})
        }
    });

    app.post('/pedido', async (req,res) => {
        const {DataPedido,ValorTotal,StatusPedido,IdCliente} = req.body;

        if(DataPedido && ValorTotal && StatusPedido && IdCliente){
            const Pedido = {
                DataPedido: DataPedido,
                ValorTotal: ValorTotal,
                StatusPedido: StatusPedido,
                IdCliente : IdCliente
            }
            const result = await PedidoService.criarPedido(Pedido);

            if(result.sucess){
                res.status(201).json(result);
            }else{
                res.status(500).json(result.message);
            }
        }else{
            res.status(400).json({erro: "FALTAM DADOS!!"})
        }
    });

    app.put('/pedido/:idPedido',async (req,res) => {
        const {idPedido} = req.params;
        const {DataPedido,ValorTotal,StatusPedido,IdCliente} = req.body;

        if(DataPedido && ValorTotal && StatusPedido && IdCliente){
            const Pedido = {
                DataPedido: DataPedido,
                ValorTotal: ValorTotal,
                StatusPedido: StatusPedido,
                IdCliente : IdCliente
            }

        if(!isNaN(idPedido)){
            
            const c = await PedidoService.editarPedido(Pedido,idPedido);

            if(c.sucess){
                res.status(200).json(c);
            }else{
                res.status(500).json(c.message);
            }
        }else{
            res.status(400).json({erro: "SEM ID Pedido ( NUMBER ) "})
        }
    }
    });

    app.delete('/pedido/:idPedido',async (req,res) => {
    const {idPedido} = req.params;
    if(!isNaN(idPedido)){
        const p = await PedidoService.apagarPedido(idPedido);
        if(p.sucess){
            res.status(200).json(p);
        }else{
            res.status(500).json(p.message);
        }
    }else{
        res.status(400).json({erro: "SEM ID Pedido ( NUMBER ) "})
    }
    });
}
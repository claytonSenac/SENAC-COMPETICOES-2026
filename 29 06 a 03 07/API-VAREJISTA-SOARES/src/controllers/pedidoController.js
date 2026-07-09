import { app } from "../../index.js";
import { PedidoService } from "../services/pedidoService.js";

export async function iniciarControlerPedido(){

    app.post("/pedido", async (req, res) => {
        try {
            const { Status, IdCliente, IdFuncionario, ItensPedido } = req.body;

            const pedido = {
                Status,
                IdCliente: Number(IdCliente),
                IdFuncionario: Number(IdFuncionario),
                ItensPedido: ItensPedido?.map(item => ({
                    Id: Number(item.Id),
                    Quantidade: Number(item.Quantidade)
                }))
            };

            const data = await PedidoService.cadastrarPedido(pedido);

            if (data.sucess) {
                res.status(201).json(data);
            } else {
                res.status(500).json(data);
            }

        } catch (error) {
            res.status(500).json(error);
        }
    });

    app.get("/pedido", async (req, res) => {
        try {

            const data = await PedidoService.listarPedidosCalculados();

            if (data.sucess) {
                res.status(200).json(data);
            } else {
                res.status(500).json(data);
            }

        } catch (error) {
            res.status(500).json(error);
        }
    });

    app.get("/pedido/id/:idPedido", async (req, res) => {
        try {

            const { idPedido } = req.params;

            const data = await PedidoService.listarPedidosCalculadosPorId(
                Number(idPedido)
            );

            if (data.sucess) {
                res.status(200).json(data);
            } else {
                res.status(500).json(data);
            }

        } catch (error) {
            res.status(500).json(error);
        }
    });

    app.get("/pedido/idCliente/:idCliente", async (req, res) => {
    try {

        const { idCliente } = req.params;

        const data = await PedidoService.listarPedidosCalculadosPorIdCliente(
            Number(idCliente)
        );

        if (data.sucess) {
            res.status(200).json(data);
        } else {
            res.status(500).json(data);
        }

    } catch (error) {
        res.status(500).json(error);
    }
    });

    app.get("/pedido/idFuncionario/:idFuncionario", async (req, res) => {
    try {

        const { idFuncionario } = req.params;

        const data = await PedidoService.listarPedidosCalculadosPorIdFuncionario(
            Number(idFuncionario)
        );

        if (data.sucess) {
            res.status(200).json(data);
        } else {
            res.status(500).json(data);
        }

    } catch (error) {
        res.status(500).json(error);
    }
    });    
    app.delete("/pedido/:idPedido", async (req,res)=>{
        try {

            const {idPedido} = req.params;

            const data = await PedidoService.excluirPedido(Number(idPedido));

            if(data.sucess){
                res.status(200).json(data);
            }else{
                res.status(500).json(data);
            }

        } catch (error) {
            res.status(500).json(error);
        }
    });

    app.put("/pedido/:idPedido", async (req,res)=>{
        try {

            const {idPedido} = req.params;
            const {Status} = req.body;

            const data = await PedidoService.alterarStatusPedido(Number(idPedido),Status);

            if(data.sucess){
                res.status(200).json(data);
            }else{
                res.status(500).json(data);
            }

        } catch (error) {
            res.status(500).json(error);
        }
    });

}
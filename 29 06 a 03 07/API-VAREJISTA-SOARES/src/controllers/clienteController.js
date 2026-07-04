import { app } from "../../index.js";
import { ClienteService } from "../services/clienteService.js";

export async function iniciarControlerCliente(){
    app.post("/cliente",async (req,res) => {
        const {Nome,Cpf,Email,Telefone} = req.body;
        try {
             const c = await ClienteService.criarCliente({Nome,Cpf,Email,Telefone});
             if(c.sucess){
                res.status(201).json(c);
             }else{
                res.status(500).json(c);
             }
            
        } catch (error) {
            res.status(500).json(error);
        }
    });

    app.get("/cliente", async (req,res)=>{
        try {
            const c = await ClienteService.listarClientes();
             if(c.sucess){
                res.status(201).json(c);
             }else{
                res.status(500).json(c);
             }
        } catch (error) {
            res.status(500).json(error);
        }
    });

    app.get("/cliente/:idCliente", async (req,res)=>{
        const {idCliente} = req.params;

        try {
            const c = await ClienteService.listarClientesPorId(idCliente);
             if(c.sucess){
                res.status(201).json(c);
             }else{
                res.status(500).json(c);
             }
        } catch (error) {
            res.status(500).json(error);
        }
    });

    app.put("/cliente/:idCliente", async (req,res)=>{
        const {idCliente} = req.params;
        const {Nome,Cpf,Email,Telefone} = req.body;
         
        try {
            const c = await ClienteService.editarCliente(
                {Nome,Cpf,Email,Telefone},
                Number(idCliente));
                
             if(c.sucess){
                res.status(201).json(c);
             }else{
                res.status(500).json(c);
             }
        } catch (error) {
            res.status(500).json(error);
        }

    });

    app.delete("/cliente/:idCliente", async (req,res)=>{
        const {idCliente} = req.params;
            
        try {
            const c = await ClienteService.excluirCliente(
                Number(idCliente)
            );
                
                if(c.sucess){
                res.status(201).json(c);
                }else{
                res.status(500).json(c);
                }
        } catch (error) {
            res.status(500).json(error);
        }

    });
}


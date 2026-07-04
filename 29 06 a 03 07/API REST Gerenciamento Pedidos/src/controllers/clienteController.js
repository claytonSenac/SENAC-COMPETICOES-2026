import {app} from '../../index.js';
import { ClienteService } from '../services/clienteService.js';

export async function mapearControlerCliente(){
    app.get('/cliente', async (req,res) => {
      const result = await ClienteService.listarClientes();

      if(result.sucess){
        res.json(result);
      }else{
        res.status(500).json(result.message);
      }
      return;
    });

    app.get('/cliente/:idCliente',async (req,res) => {
        const {idCliente} = req.params;
        if(!isNaN(idCliente)){
            const c = await ClienteService.listarClientesPorId(idCliente);
            if(c.sucess){
                res.status(200).json(c);
            }else{
                res.status(500).json(c.message);
            }
        }else{
            res.status(400).json({erro: "SEM ID CLIENTE ( NUMBER ) "})
        }
    });

    app.post('/cliente', async (req,res) => {
        const {Nome,Email,Telefone} = req.body;

        if(Nome && Email && Telefone){
            const cliente = {
                Nome: Nome,
                Email: Email,
                Telefone: Telefone
            }
            const result = await ClienteService.criarCliente(cliente);

            if(result.sucess){
                res.status(201).json(result);
            }else{
                res.status(500).json(result.message);
            }
        }else{
            res.status(400).json({erro: "FALTAM DADOS, NOME EMAIL TELEFONE!!!"})
        }
    });

    app.put('/cliente/:idCliente',async (req,res) => {
        const {idCliente} = req.params;
        const {Nome,Email,Telefone} = req.body;

         if(Nome && Email && Telefone){
            const cliente = {
                Nome: Nome,
                Email: Email,
                Telefone: Telefone
            } 

        if(!isNaN(idCliente)){
            
            const c = await ClienteService.editarCliente(cliente,idCliente);

            if(c.sucess){
                res.status(200).json(c);
            }else{
                res.status(500).json(c.message);
            }
        }else{
            res.status(400).json({erro: "SEM ID CLIENTE ( NUMBER ) "})
        }
    }
    });

    app.delete('/cliente/:idCliente',async (req,res) => {
    const {idCliente} = req.params;
    if(!isNaN(idCliente)){
        const c = await ClienteService.apagarCliente(idCliente);
        if(c.sucess){
            res.status(200).json(c);
        }else{
            res.status(500).json(c.message);
        }
    }else{
        res.status(400).json({erro: "SEM ID CLIENTE ( NUMBER ) "})
    }
    });
}

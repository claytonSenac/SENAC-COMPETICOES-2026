import { app } from "../../index.js";
import { FuncionarioService } from "../services/funcionarioService.js";
import { ResponseBase } from "../utils/response.js";

export async function iniciarControlerFuncionario(){
    app.get("/funcionario",async (req,res) => {
        try {
            const data = await FuncionarioService.listarFuncionarios();

            if(data.sucess){
                res.status(200).json(new ResponseBase(true,"sucess",data));
            }else{
                res.status(500).json( new ResponseBase(false,data,null));
            }

        } catch (error) {
           res.status(500).json(new ResponseBase(false,error,null));
        }
    });

    app.get("/funcionario/:idFuncionario",async (req,res) => {
      try {
        const {idFuncionario} = req.params;

        const data = await FuncionarioService.listarFuncionariosPorId(idFuncionario);

        if(data.sucess){
            res.status(200).json(data);
        }else{
            res.status(500).json(data);
        }
      } catch (error) {
        res.status(500).json(error)
      }
    });
    
    app.post("/funcionario",async (req,res) => {
        try {
            const {Nome,Cargo,Email,Telefone} = req.body;

            const result = await FuncionarioService.criarFuncionario({Nome,Cargo,Email,Telefone});

            if(result.sucess){
                res.status(201).json(result)
            }else{
                res.status(500).json(result)
            }
        } catch (error) {
            res.status(500).json(error);
        }
    });

    app.put("/funcionario/:idFuncionario", async (req,res) => {
      try {
        const {idFuncionario} = req.params;
        const {Nome,Cargo,Email,Telefone} = req.body;

        const data = await FuncionarioService.editarFuncionario(
            {Nome,Cargo,Email,Telefone}, Number(idFuncionario));

         if(data.sucess){
                res.status(201).json(data)
            }else{
                res.status(500).json(data)
            }
      } catch (error) {
        res.status(500).json(error)
      }
    });

    app.delete("/funcionario/:idFuncionario",async (req,res) => {
      try {
        const {idFuncionario} = req.params;

        const data = await FuncionarioService.excluirFuncionario(Number(idFuncionario));

        if(data.sucess){
            res.status(200).json(data);
        }else{
            res.status(500).json(data);
        }
      } catch (error) {
        res.status(500).json(error)
      }
    });
}
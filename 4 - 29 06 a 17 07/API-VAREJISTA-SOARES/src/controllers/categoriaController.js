import { app } from "../../index.js";
import { CategoriaService } from "../services/CategoriaService.js";
import { ResponseBase } from "../utils/response.js";

export async function iniciarControlerCategoria(){
    app.get("/Categoria",async (req,res) => {
        try {
            const data = await CategoriaService.listarCategorias();

            if(data.sucess){
                res.status(200).json(new ResponseBase(true,"sucess",data));
            }else{
                res.status(500).json( new ResponseBase(false,data,null));
            }

        } catch (error) {
           res.status(500).json(new ResponseBase(false,error,null));
        }
    });

    app.get("/Categoria/:idCategoria",async (req,res) => {
      try {
        const {idCategoria} = req.params;

        const data = await CategoriaService.listarCategoriasPorId(idCategoria);

        if(data.sucess){
            res.status(200).json(data);
        }else{
            res.status(500).json(data);
        }
      } catch (error) {
        res.status(500).json(error)
      }
    });
    
    app.post("/Categoria",async (req,res) => {
        try {
            const {Nome,Descricao} = req.body;

            const result = await CategoriaService.criarCategoria({Nome,Descricao});

            if(result.sucess){
                res.status(201).json(result)
            }else{
                res.status(500).json(result)
            }
        } catch (error) {
            res.status(500).json(error);
        }
    });

    app.put("/Categoria/:idCategoria", async (req,res) => {
      try {
        const {idCategoria} = req.params;
        const {Nome,Descricao} = req.body;

        const data = await CategoriaService.editarCategoria(
            {Nome,Descricao}, Number(idCategoria));

         if(data.sucess){
                res.status(201).json(data)
            }else{
                res.status(500).json(data)
            }
      } catch (error) {
        res.status(500).json(error)
      }
    });

    app.delete("/Categoria/:idCategoria",async (req,res) => {
      try {
        const {idCategoria} = req.params;

        const data = await CategoriaService.excluirCategoria(Number(idCategoria));

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
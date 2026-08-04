import { app } from "../../index.js";
import { ProdutoService } from "../services/produtoService.js";

export async function iniciarControlerProduto(){
    app.post("/produto", async (req,res) => {
        try {
            const {Nome,Descricao,Preco,Estoque,IdCategoria} = req.body;

            let IdCategoriaParsed = Number(IdCategoria);
            let EstoqueParsed = Number(Estoque);

            const data = await ProdutoService.criarProduto({
                Nome,Descricao,Preco,
                "Estoque":EstoqueParsed,
                "IdCategoria":IdCategoriaParsed
            });

            if(data.sucess){
                res.status(201).json(data);
            }else{
                res.status(500).json(data);
            }

        } catch (error) {
            res.status(500).json(error);
        }

    });

    app.get("/produto",async (req,res) => {
        try {
            const data = await ProdutoService.listarProdutos();

            if(data.sucess){
                res.status(200).json(data);
            }else{
                res.status(200).json(data);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    });

    app.put("/produto/:idProduto",async (req,res) => {
       try {
            const {idProduto} = req.params;
            const {Nome,Descricao,Preco,Estoque,IdCategoria} = req.body;

            let idProdutoParsed = Number(idProduto)
            const produto = {
                "Nome": Nome,
                "Descricao": Descricao,
                "Preco": Preco,
                "Estoque": Estoque,
                "IdCategoria": Number(IdCategoria)
            }

            const data = await ProdutoService.editarProduto(produto,idProdutoParsed);
    
            if(data.sucess){
                res.status(200).json(data);
            }else{
                res.status(500).json(data);
            }
        } catch (error) {
            res.status(500).json(error)
        }
    })
    
    app.get("/produto/id/:idProduto",async (req,res) => {
         try {
            const {idProduto} = req.params;

            const data = await ProdutoService.listarProdutoPorId(Number(idProduto));
    
            if(data.sucess){
                res.status(200).json(data);
            }else{
                res.status(500).json(data);
            }
        } catch (error) {
            res.status(500).json(error)
        }
    });

    app.get("/produto/idCategoria/:idCategoria",async (req,res) => {
        try {
        const {idCategoria} = req.params;

        const data = await ProdutoService.listarProdutoPorIdCategoria(Number(idCategoria));

        if(data.sucess){
            res.status(200).json(data);
        }else{
            res.status(500).json(data);
        }
    } catch (error) {
        res.status(500).json(error)
    }
    });

    app.get("/produto/nome/:nomeProduto",async (req,res) => {
         try {
            const {nomeProduto} = req.params;
            const data = await ProdutoService.listarProdutoPorNome(nomeProduto);
    
            if(data.sucess){
                res.status(200).json(data);
            }else{
                res.status(500).json(data);
            }
        } catch (error) {
            res.status(500).json(error)
        }
    });

    app.delete("/produto/:idProduto", async (req,res) => {
        try {
            const {idProduto} = req.params;

            const data = await ProdutoService.excluirProduto(Number(idProduto));
    
            if(data.sucess){
                res.status(200).json(data);
            }else{
                res.status(500).json(data);
            }
        } catch (error) {
            res.status(500).json(error)
        }
    })

} 
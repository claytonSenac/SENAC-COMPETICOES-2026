import { app } from "../../index.js";
import { ProdutoService } from "../service/produtoService.js";

export async function initProductControllers(){
    app.get('/produtos',async (req,res) => {
        let data = await ProdutoService.listarProdutos();
        if(data.sucess){
            res.status(200).json(data);
        }else{
            res.status(500).json(data);
        }
    });

    app.get('/produtos/:idProduto', async (req,res) => {
        const {idProduto} = req.params;

        let data = await ProdutoService.getById(idProduto);
        if(data.sucess){
            res.status(200).json(data)
        }else{
            res.status(404);
        }
    });

    app.post('/produtos',async (req,res) => {
        
        const {Nome,Descricao,Preco,Estoque} = req.body;

        let produto = {
            "Nome": Nome,
            "Descricao": Descricao,
            "Preco": Preco,
            "Estoque": Estoque
        }

        let result = await ProdutoService.criarProduto(produto);
        
        if(result.sucess){
            res.status(200).json(result)
        }else{
            res.status(404).json(result)
        }
            
    });

    app.put('/produtos/:idProduto',async (req,res) => {
        
        const {Nome,Descricao,Preco,Estoque} = req.body;
        const {idProduto} = req.params;

        let produto = {
            "Nome": Nome,
            "Descricao": Descricao,
            "Preco": Preco,
            "Estoque": Estoque
        }
        
        let result = await ProdutoService.editarProduto(produto,idProduto);
                console.log(result)
        if(result.sucess){
            res.status(200).json(result)
        }else{
            res.status(404).json(result)
        }
            
    });

    app.delete('/produtos/:idProduto', async (req,res) => {
        const {idProduto} = req.params;

        let data = await ProdutoService.apagarProduto(idProduto);
        console.log(data)
        if(data.sucess){
            res.status(200).json(data)
        }else{
            res.status(404).json(data);
        }
    });

    
}

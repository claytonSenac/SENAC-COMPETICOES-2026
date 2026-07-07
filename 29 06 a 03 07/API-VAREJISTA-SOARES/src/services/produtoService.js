import { db } from "../db/conexaoBanco.js";
import { ResponseBase } from "../utils/response.js";
import { Produto } from "../db/models/produto.js";
import { CategoriaService } from "./CategoriaService.js";

async function criarProduto(p){
    try {
        const result = await validarProduto(p);

        if(result.sucess){
            const exists = await listarProdutoPorNome(p.Nome);

            if(exists.data.length > 0){
                return new ResponseBase(false,"PRODUTO JA EXISTENTE",null);
            }

            const  [r,f] = await db.execute(`INSERT INTO Produto (Id, Nome,Descricao,Preco,Estoque,IdCategoria) VALUES (DEFAULT, ?, ?, ?, ?,?);`,[p.Nome, p.Descricao, p.Preco, p.Estoque, p.IdCategoria]);

            let idProduto = r.insertId;

            result.data.Id = idProduto;
            return new ResponseBase(true, "sucesso ao inserir",result )
        }else{
            return result;
        }
    } catch (error) {
        console.log(error)
        return new ResponseBase(false,error,null);
    }
}

async function editarProduto(p,idProduto){
    if(isNaN(idProduto)){
        return new ResponseBase(false,"SEM ID",null);
    }

    try {
        const result = await validarProduto(p);

        if(result.sucess){
            const exists = await listarProdutoPorId(idProduto);

            if(exists.data.length == 0){
                return new ResponseBase(false,"PRODUTO NAO EXISTENTE",null);
            }

            const  [r,f] = await db.execute(`UPDATE Produto set Nome = ?, Descricao = ?, Preco = ?, Estoque = ?, IdCategoria = ? WHERE Id = ?`,[p.Nome, p.Descricao, p.Preco, p.Estoque, p.IdCategoria, idProduto]);

            result.data.Id = idProduto;
            result.message = "EDITADO";
            return result;
        }else{
            return result;
        }
    } catch (error) {
        console.log(error)
        return new ResponseBase(false,error,null);
    }
}

async function listarProdutoPorId(idProduto){
    if(isNaN(idProduto)){
        return new ResponseBase(false,'SEM ID Produto',null);
    }
    try {
        const [r,f] = await db.execute("SELECT * FROM Produto WHERE Id = ?;",[idProduto]);
        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function listarProdutoPorIdCategoria(idCategoria){
    if(isNaN(idCategoria)){
        return new ResponseBase(false,'SEM ID CATEGORIA',null);
    }
    try {
        const [r,f] = await db.execute("SELECT * FROM Produto WHERE IdCategoria = ?;",[idCategoria]);
        return new ResponseBase(true,"DADOS BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function listarProdutoPorNome(nomeProduto){
    if(!nomeProduto){
        return new ResponseBase(false,'SEM Nome Produto',null);
    }
    try {
        
        const [r,f] = await db.execute("SELECT * FROM Produto WHERE LOWER(Nome) = ?;",[nomeProduto.toLowerCase()]);
        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function listarProdutos(){
    try {
        const [r,f] = await db.execute("SELECT * FROM Produto;");
        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function excluirProduto(idProduto){
    if(isNaN(idProduto)){
        return new ResponseBase(false,'SEM ID Produto',null);
    }
    try {
        const [r,f] = await db.execute("DELETE FROM Produto WHERE Id = ?;",[idProduto]);
        return new ResponseBase(true,"EXCRUIDO",null);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function validarProduto(p){
    
    try {
        const res =  Produto.parse(p);
        const categoriaExiste = await CategoriaService.listarCategoriasPorId(p.IdCategoria);
        
        if(categoriaExiste.sucess && categoriaExiste.data.length > 0){
            res.Categoria = categoriaExiste.data;
            return new ResponseBase(true,'VALIDADO',res);
        }else{
            return new ResponseBase(false,"ID CATEGORIA INVALIDA", null);
        }
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

export const ProdutoService = {
    validarProduto,
    criarProduto,
    listarProdutoPorId,
    listarProdutoPorNome,
    listarProdutos,
    editarProduto,
    excluirProduto,
    listarProdutoPorIdCategoria

}
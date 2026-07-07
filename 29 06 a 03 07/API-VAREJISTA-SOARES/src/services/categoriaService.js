import { Categoria } from "../db/models/Categoria.js";
import { ResponseBase } from "../utils/response.js";
import { db } from "../db/conexaoBanco.js";
import { ProdutoService } from "./produtoService.js";

async function criarCategoria(c){

    const r = validarCategoria(c);

    if(!r.sucess){
        return r;
    }

    try {
        const Categoria = r.data;

        const [re,f] = await db.execute(`
            INSERT INTO Categoria (Id,Nome,Descricao)VALUES
            (DEFAULT,?, ?);
            `,[Categoria.Nome, Categoria.Descricao]);

        if(re.affectedRows > 0){
            Categoria.Id = re.insertId;
            return new ResponseBase(true,"SUCESSO AO SALVAR",Categoria);
        }
        else{
            return new ResponseBase(false,'erro ao salvar',null);
        }
    } catch (error) {
        let errMsg = error;    
        if(error.sqlMessage){
            errMsg = error.sqlMessage       
        }
        return new ResponseBase(false,errMsg,null);
    }
}

async function listarCategorias(){
    try {
        const [r,f] = await db.execute("SELECT * FROM Categoria;");
        return new ResponseBase(true,"DADOS BUSCADOS",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function listarCategoriasPorId(idCategoria){
    if(isNaN(idCategoria)){
        return new ResponseBase(false,'SEM ID Categoria',null);
    }
    try {
        const [r,f] = await db.execute("SELECT * FROM Categoria WHERE Id = ?;",[idCategoria]);
        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function editarCategoria(f,idCategoria){
    if(typeof idCategoria != 'number'){
        return new ResponseBase(false,'SEM ID Categoria',null);
    }

    const valid = validarCategoria(f);
    if(!valid.sucess){
        return new ResponseBase(valid);
    }

    const exits = await listarCategoriasPorId(idCategoria);
    if(exits.data.length == 0){
        return new ResponseBase(false,'Categoria não existe',null);
    }

    try {
        const [r,fields] = await db.execute(`UPDATE Categoria SET Nome = ?, Descricao = ? WHERE Id = ?`,[f.Nome, f.Descricao, idCategoria]);

        

        if(r.affectedRows > 0){
            f.Id = idCategoria;
            return new ResponseBase(true,'Categoria EDITADO', f);
        }
    } catch (error) {
        let errMsg = error;    
        if(error.sqlMessage){
            errMsg = error.sqlMessage       
        }
        return new ResponseBase(false,errMsg,null);
    }

    async function excluirCategoria(idCategoria){
     if(typeof idCategoria != 'number'){
            return new ResponseBase(false,'SEM ID Categoria',null);
        }
    
        const exits = await listarCategoriasPorId(idCategoria);
        if(exits.data.length == 0){
            return new ResponseBase(false,'Categoria não existe',null);
        }
    
        try {
            const [r,f] = await db.execute(`DELETE FROM Categoria Where Id = ?`,[idCategoria]);
            if(r.affectedRows > 0){
                return new ResponseBase(true,'Categoria excluido', null);
            }
    
            } catch (error) {
            let errMsg = error;    
            if(error.sqlMessage){
                errMsg = error.sqlMessage       
            }
            return new ResponseBase(false,errMsg,null);    
        }
    }
}

async function excluirCategoria(idCategoria){
 if(typeof idCategoria != 'number'){
        return new ResponseBase(false,'SEM ID Categoria',null);
    }

    const exits = await listarCategoriasPorId(idCategoria);
    if(exits.data.length == 0){
        return new ResponseBase(false,'Categoria não existe',null);
    }

    const isUsing = await ProdutoService.listarProdutoPorIdCategoria(idCategoria);

    if(isUsing.data.length > 0){
        return new ResponseBase(false,'CATEGORIA SENDO USADA NO MOMENTO', null);
    }

    try {
        const [r,f] = await db.execute(`DELETE FROM Categoria Where Id = ?`,[idCategoria]);
        if(r.affectedRows > 0){
            return new ResponseBase(true,'Categoria excluido', null);
        }

        } catch (error) {
        let errMsg = error;    
        if(error.sqlMessage){
            errMsg = error.sqlMessage       
        }
        return new ResponseBase(false,errMsg,null);    
    }
}

function validarCategoria(c){
    try {
        const res = Categoria.parse(c);
        return new ResponseBase(true,'VALIDADO',res);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

export const CategoriaService = {
    listarCategorias,
    criarCategoria,
    editarCategoria,
    excluirCategoria,
    validarCategoria,
    listarCategoriasPorId
}
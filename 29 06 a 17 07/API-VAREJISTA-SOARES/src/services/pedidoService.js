import { ResponseBase } from "../utils/response.js";
import { Pedido } from "../db/models/pedido.js";
import { ClienteService } from "./clienteService.js";
import { FuncionarioService } from "./funcionarioService.js";
import { gerarDatetime } from "../utils/pedidoUtils.js";
import { db } from "../db/conexaoBanco.js";
import { ItensPedido } from "../db/models/pedido.js";
import { ProdutoService } from "./produtoService.js";

 async function cadastrarPedido(p){
    const isValid = await validarPedido(p);

    if(isValid.sucess){
        p.DataPedido = gerarDatetime();
    }

    const temEstoque = await verificarEstoque(p.ItensPedido);
    
    if(!temEstoque.sucess){
        return new ResponseBase(false,temEstoque.erro ?? "",null)
    }

    try {
        const [r,f] = await db.execute(
            `INSERT INTO Pedido 
            (Id, DataPedido, Status, IdCliente, IdFuncionario)
             VALUES (DEFAULT,?,?,?,?);`,
             [p.DataPedido, p.Status, p.IdCliente, p.IdFuncionario]);

        
            for (const iP of p.ItensPedido) {
                iP.IdPedido = Number(r.insertId);
                await inserirTabelaItensPedido(iP);
            }

            const pedido = await listarPedidosCalculadosPorId(r.insertId);

            return new ResponseBase(true, "SUCESSO AO CADASTRAR PEDIDO",pedido)
    } catch (error) {
        console.log(error)
        return new ResponseBase(false, error,null);
    }
}

async function verificarEstoque(produtos) {

    let idsProdutos = []

    //some para verificar em algum item do array
    produtos.forEach(p => {
        if(!p.Id || !p.Quantidade){
            return false;
        }

        idsProdutos.push(Number(p.Id));
    });
    

    if(idsProdutos.length > 0){
        const [rows] = await db.query(
            `SELECT Id, Estoque,Nome FROM Produto WHERE Id IN (?) ;`,
            [idsProdutos]
        );

    for (const produto of produtos) {
        const produtoBanco = rows.find(r => r.Id === produto.Id);

        if (!produtoBanco) {
            return {
                sucess: false,
                erro: `Produto ${produto.Id} não encontrado`
            };
        }

        if (produtoBanco.Estoque < produto.Quantidade) {
            return {
                sucess: false,
                erro: `Estoque insuficiente para o produto [ ${produtoBanco.Nome} ] `
            };
        }
    }
    return {
        sucess: true
    };
    }else{
        return {
            sucess: false
        };
    }


}


async function inserirTabelaItensPedido(i){
    const [rows] = await db.execute("INSERT INTO ItensPedido (Id, IdPedido,IdProduto,Quantidade) VALUES (DEFAULT,?, ?,?)",[i.IdPedido, i.Id, i.Quantidade]);
}

async function validarPedido(p){
    try {
        const res = Pedido.parse(p);

        const clientExists = await ClienteService.listarClientesPorId(p.IdCliente);
        const funcExists = await FuncionarioService.listarFuncionariosPorId(p.IdFuncionario);
        if(clientExists.data.length == 0){
            return new ResponseBase(false,"CLIENTE NAO EXISTENTE",null);
        }

        if(funcExists.data.length == 0){
            return new ResponseBase(false,"FUNCIONARIO NAO EXISTENTE",null);
        }

        return new ResponseBase(true,"valid", res);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function validarItemPedido(iP){
    try {
        const res = await ItensPedido.parse(iP);

        const existePedido = await listarPedidoPorId(iP.IdPedido);
        const existeProduto = await ProdutoService.listarProdutoPorId(iP.IdProduto);

        if(existePedido.data.length == 0){
            return new ResponseBase(false,"NAO EXISTE PEDIDO", null)
        }

        if(existeProduto.data.length == 0){
            return new ResponseBase(false,"NAO EXISTE PRODUTO", null)
        }

            return new ResponseBase(true,"", null)
    } catch (error) {
        return error;
    }
}

async function listarPedidoPorId(idPedido){
    if(isNaN(idPedido)){
        return new ResponseBase(false,'SEM ID Pedido',null);
    }
    try {
        const [r] = await db.execute(
            "SELECT * FROM Pedido WHERE Id = ?;",
            [idPedido]
        );
        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function listarPedidosCalculados(){
    try {
        const [r,f] = await db.execute("SELECT * FROM VW_SUBTOTAL_PEDIDO");
        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}


async function listarPedidosCalculadosPorId(idPedido){
    if(isNaN(idPedido)){
        return new ResponseBase(false,'SEM ID Pedido',null);
    }
    try {
        const [r,f] = await db.execute("SELECT * FROM vw_subtotal_pedido WHERE Id = ?",[idPedido]);

        const [rItem,fItem] = await db.execute("SELECT * FROM VW_SUBTOTAL_ITENS_PEDIDO WHERE Id = ?",[idPedido]);

        r[0].ItensPedido = rItem;
        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function listarPedidosCalculadosPorIdCliente(idCliente){
    if(isNaN(idCliente)){
        return new ResponseBase(false,'SEM ID Pedido',null);
    }
    try {
        const [r,f] = await db.execute("SELECT * FROM vw_subtotal_pedido WHERE IdCliente = ?",[idCliente]);

        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function listarPedidosCalculadosPorIdFuncionario(idFuncionario){
    if(isNaN(idFuncionario)){
        return new ResponseBase(false,'SEM ID idFuncionario',null);
    }
    try {
        const [r,f] = await db.execute("SELECT * FROM vw_subtotal_pedido WHERE idFuncionario = ?",[idFuncionario]);

        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function estaUsandoProduto(idProduto){
    if(isNaN(idProduto)){
        return new ResponseBase(false,'SEM ID idProduto',null);
    }
    try {
        const [r,f] = await db.execute("SELECT * FROM ItensPedido WHERE idProduto = ?",[idProduto]);

        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function excluirPedido(idPedido){
    if(isNaN(idPedido)){
        return new ResponseBase(false,"SEM ID PEDIDO",null);
    }

    try {

        const pedido = await listarPedidoPorId(idPedido);

        if(pedido.data.length == 0){
            return new ResponseBase(false,"PEDIDO NÃO ENCONTRADO",null);
        }

        // Exclui os itens do pedido primeiro
        await db.execute(
            "DELETE FROM ItensPedido WHERE IdPedido = ?",
            [idPedido]
        );

        // Depois exclui o pedido
        await db.execute(
            "DELETE FROM Pedido WHERE Id = ?",
            [idPedido]
        );

        return new ResponseBase(true,"PEDIDO EXCLUÍDO",null);

    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function alterarStatusPedido(idPedido, status){

    if(isNaN(idPedido)){
        return new ResponseBase(false,"SEM ID PEDIDO",null);
    }

    try {

        Pedido.pick({ Status: true }).parse({
            Status: status
        });

        const pedido = await listarPedidoPorId(idPedido);

        if(pedido.data.length == 0){
            return new ResponseBase(false,"PEDIDO NÃO ENCONTRADO",null);
        }

        await db.execute(
            "UPDATE Pedido SET Status = ? WHERE Id = ?",
            [status, idPedido]
        );

        const pedidoAtualizado = await listarPedidosCalculadosPorId(idPedido);

        return new ResponseBase(
            true,
            "STATUS ALTERADO COM SUCESSO",
            pedidoAtualizado.data
        );

    } catch (error) {
        return new ResponseBase(false,error,null);
    }

}

export const PedidoService = {
    estaUsandoProduto,
    cadastrarPedido,
    listarPedidoPorId,
    listarPedidosCalculados,
    listarPedidosCalculadosPorId,
    excluirPedido,
    alterarStatusPedido,
    listarPedidosCalculadosPorIdCliente,
    listarPedidosCalculadosPorIdFuncionario
}
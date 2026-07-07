import { ResponseBase } from "../utils/response.js";
import { Pedido } from "../db/models/pedido.js";
import { ClienteService } from "./clienteService.js";
import { FuncionarioService } from "./funcionarioService.js";
import { gerarDatetime } from "../utils/pedidoUtils.js";
import { db } from "../db/conexaoBanco.js";
import { ItensPedido } from "../db/models/pedido.js";
import { ProdutoService } from "./produtoService.js";

export async function cadastrarPedido(p){
    const isValid = await validarPedido(p);

    if(isValid.sucess){
        p.DataPedido = gerarDatetime();
        p.ValorTotal = 0.00;
    }

    const temEstoque = await verificarEstoque(p.ItensPedido);

    if(!temEstoque.sucesso){
        return new ResponseBase(false,temEstoque.erro,null)
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
                sucesso: false,
                erro: `Produto ${produto.Id} não encontrado`
            };
        }

        if (produtoBanco.Estoque < produto.Quantidade) {
            return {
                sucesso: false,
                erro: `Estoque insuficiente para o produto [ ${produtoBanco.Nome} ] `
            };
        }
    }
    return {
        sucesso: true
    };
    }else{
        return false;
    }


}

async function calcularTotalPedido(produtos){
    let idsProdutos = [];

    let valorTotal = 0.00;

        //some para verificar em algum item do array
        produtos.forEach(p => {
            if(!p.Id || !p.Quantidade){
                return false;
            }

            idsProdutos.push(Number(p.Id));
        });
        

        if(idsProdutos.length > 0){
            const [rows] = await db.query(
                `SELECT Id, Preco,Nome FROM Produto WHERE Id IN (?) ;`,
                [idsProdutos]
            );

        for (const produto of produtos) {
            const produtoBanco = rows.find(r => r.Id === produto.Id);
            //sempre vai ter porque validei antes!
            let itemPedido = {
                Id: produto.Id,
                Quantidade: 2
            }
            await inserirTabelaItensPedido(i);
            
            
        }
    }

}


async function inserirTabelaItensPedido(i){
    const valid = validarItemPedido(i);

    if(valid.sucess){
        const [rows] = await db.execute("INSERT INTO ItensPedido (Id, IdPedido,IdProduto,Quantidade) VALUES (DEFAULT,?, ?,?)",[i.IdPedido, i.IdProduto, i.Quantidade]);
    }else{
        return false;
    }

}

async function validarPedido(p){
    try {
        const res = Pedido.parse(p);

        const clientExists = await ClienteService.listarClientesPorId(p.IdCliente);
        const funcExists = await ClienteService.listarClientesPorId(p.IdFuncionario);

        if(funcExists.data.length == 0){
            return new ResponseBase(false,"CLIENTE NAO EXISTENTE",null);
        }

        if(clientExists.data.length == 0){
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
        const [r,f] = await db.execute("SELECT * FROM Pedido WHERE Id = ?;",[idCategoria]);
        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}
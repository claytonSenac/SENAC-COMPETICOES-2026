import { ResponseBase } from "../utils/response.js";
import { Pedido } from "../db/models/pedido.js";
import { ClienteService } from "./clienteService.js";
import { FuncionarioService } from "./funcionarioService.js";
import { gerarDatetime } from "../utils/pedidoUtils.js";
import { db } from "../db/conexaoBanco.js";

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
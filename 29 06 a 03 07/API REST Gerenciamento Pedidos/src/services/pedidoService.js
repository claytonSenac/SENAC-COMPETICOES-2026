import { db } from "../db/ConexaoDb.js";
import { formatarData } from "../utils/formatarData.js";
import {responseBase} from '../utils/responseBase.js';
import { ClienteService } from "./clienteService.js";

async function criarPedido(p){
    responseBase.sucess = false;
        responseBase.message = "";
        responseBase.data = null;
    
    const validated = await  validarPedido(p);

    if(validated.sucess){
        try {
            const [results,fields] = await db.execute("INSERT INTO Pedido (Id, DataPedido, ValorTotal, StatusPedido, IdCliente) VALUES (DEFAULT, ?, ?, ?, ?);"
            ,[p.DataPedido, p.ValorTotal, p.StatusPedido, p.IdCliente]);

                p.Id = results.insertId;

                responseBase.sucess = true;
                responseBase.message = 'Pedido CRIADO COM SUCESSO';
                responseBase.data = p;

            return responseBase;
        } catch (error) {
            responseBase.sucess = false;
            responseBase.message = error;
            responseBase.data = null;
            return responseBase;
        }
    }else{
        return validated;
    }
}

async function listarPedidos(){
    responseBase.sucess = false;
    responseBase.message = "";
    responseBase.data = null;

    try {
        const [results,fields] = await db.execute('SELECT * FROM Pedido;');
        
        for(let i = 0; i < results.length; i++){
            results[i].DataPedido = formatarData(results[i].DataPedido);
        }

        responseBase.data = results;
        responseBase.message = 'Pedidos CARREGADOS';
        responseBase.sucess = true
        return responseBase

    } 
    catch (error) {
        responseBase.message = error;
        responseBase.sucess = false;
        responseBase.data = null;
        return responseBase;
    }
}

 async function listarPedidoPorId(idPedido){
    responseBase.sucess = false;
    responseBase.message = "";
    responseBase.data = null;

    if(!idPedido){
        responseBase.message = 'SEM ID DE PEDIDO';
        responseBase.sucess = false;
        responseBase.data = null;
        return responseBase;
    }

    try {
        const [results,fields] = await db.execute('SELECT * FROM Pedido WHERE Id = ?;',[idPedido]);
        
        if(results.length > 0){

            results[0].DataPedido = formatarData(results[0].DataPedido);
            let cliente = await ClienteService.listarClientesPorId(results[0].IdCliente);
            if(cliente.data != null){
                results[0].Cliente = cliente.data[0];
            }
            responseBase.data = results;
            responseBase.message = 'Pedido ENCONTRADOR';
            responseBase.sucess = true;
            return responseBase;
        }else{
            responseBase.message = "NAO ENCONTRADO"
            return responseBase;
        }
    } 
    catch (error) {
        responseBase.message = error;
        responseBase.sucess = false;
        responseBase.data = null;
        return responseBase;
    }
}
async function listarPedidoPorIdCliente(idCliente){
    responseBase.sucess = false;
    responseBase.message = "";
    responseBase.data = null;

    if(!idCliente){
        responseBase.message = 'SEM ID DE CLIENTE';
        responseBase.sucess = false;
        responseBase.data = null;
        return responseBase;
    } 
    try {
        const [results,fields] = await db.execute('SELECT * FROM Pedido WHERE IdCliente = ?;',[idCliente]);
        
        if(results.length > 0){
            responseBase.data = results;
            responseBase.message = 'Pedido ENCONTRADOR';
            responseBase.sucess = true;
            return responseBase;
        }else{
            return responseBase;
        }
    } 
    catch (error) {
        responseBase.message = error;
        responseBase.sucess = false;
        responseBase.data = null;
        return responseBase;
    }
}

 async function editarPedido(p,idPedido){
    const oldPedido = await listarPedidoPorId(idPedido);
    const payloadValido = validarPedido(p);
    

    if(!oldPedido.sucess || !payloadValido.sucess){
        return payloadValido;
    }else{
        try {
            const [results,fields] = 
            await db.execute('UPDATE Pedido SET DataPedido = ?, ValorTotal = ?, StatusPedido = ?, IdCliente = ? WHERE Id = ?; ',
            [p.DataPedido, p.ValorTotal, p.StatusPedido, p.IdCliente]);
            
            
            if(results.affectedRows > 0){
                p.Id = idPedido;
                responseBase.data = p;
                responseBase.message = 'Pedido editado';
                responseBase.sucess = true;
                
                return responseBase;
            }
            //console.log(results)
        } catch (error) {
            responseBase.sucess = false;
            responseBase.message = error;
            responseBase.data = null;
            return responseBase;
        }
    }

    
};

 async function apagarPedido(idPedido){
    const exists = await listarPedidoPorId(idPedido);

    if(exists.sucess){
        const [results,fields] = await db.execute('DELETE FROM Pedido WHERE Id = ?',[idPedido]);

        if(results.affectedRows > 0){
            responseBase.data = null;
            responseBase.message = 'Pedido apagado';
            responseBase.sucess = true;
            
            return responseBase;
        }else if(results.affectedRows == 0){
            exists.data = null;
            exists.message = 'NAO ENCONTRADO';
            return responseBase;
        }

    }else{
        exists.data = null;
        exists.message = 'NAO ENCONTRADO';
        return responseBase;
    }
};

async function validarPedido(p){
    responseBase.sucess = false;
    responseBase.message = "";
    responseBase.data = null;
    if(!p) {
        responseBase.message = 'SEM OBJETO PEDIDO';
        return responseBase;
    }

    if(!p.DataPedido || !p.ValorTotal || !p.StatusPedido || !p.IdCliente){
        responseBase.message = "FALTAM DADOS" + JSON.stringify(p);
        return responseBase;
    }

    const cliente = await ClienteService.listarClientesPorId(p.IdCliente);

    if(cliente.sucess){
        responseBase.sucess = true;
        return responseBase;
    }else{
        responseBase.message = "SEM CLIENTE PARA ID SELECIONADO";
        return responseBase;
    }

}

export const PedidoService = {
    listarPedidoPorId,
    listarPedidos,
    apagarPedido,
    criarPedido,
    editarPedido,
    listarPedidoPorIdCliente
}
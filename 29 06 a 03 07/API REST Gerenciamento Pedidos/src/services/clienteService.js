import { db } from "../db/ConexaoDb.js";
import { formatarTelefone } from "../utils/formatarTelefone.js";
import {responseBase} from '../utils/responseBase.js'
import { PedidoService } from "./pedidoService.js";
 
 async function criarCliente(c){
    responseBase.sucess = false;
    responseBase.message = "";
    responseBase.data = null;

    const validated = validarCliente(c);
    if(validated.sucess){
        try {
            const [results,fields] = await db.execute("INSERT INTO Cliente (Id, Nome, Email, Telefone) VALUES (DEFAULT, ?, ?, ?);"
            ,[c.Nome, c.Email, c.Telefone]);

            if(results.affectedRows > 0){
                c.Id = results.insertId;

                responseBase.sucess = true;
                responseBase.message = 'CLIENTE CRIADO COM SUCESSO';
                responseBase.data = c;
            }
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
};

 async function listarClientes(){
    responseBase.sucess = false;
    responseBase.message = "";
    responseBase.data = null;

    try {
        const [results,fields] = await db.execute('SELECT * FROM Cliente;');
        
        if(results.length > 0){

            for(let i = 0; i < results.length; i++){
                results[i].Telefone = formatarTelefone(results[i].Telefone)
            };

            responseBase.data = results;
            responseBase.message = 'CLIENTES CARREGADOS';
            responseBase.sucess = true
            return responseBase
        }
    } 
    catch (error) {
        responseBase.message = error;
        responseBase.sucess = false;
        responseBase.data = null;
        return responseBase;
    }
}

 async function listarClientesPorId(idCliente){
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
        const [results,fields] = await db.execute('SELECT * FROM Cliente WHERE Id = ?;',[idCliente]);
        
        if(results.length > 0){
            results[0].Telefone = formatarTelefone(results[0].Telefone);
            responseBase.data = results;

            responseBase.message = 'CLIENTE ENCONTRADOR';
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

 async function editarCliente(c,idCliente){
    const oldClient = await listarClientesPorId(idCliente);
    const payloadValido = validarCliente(c);
    

    if(!oldClient.sucess || !payloadValido.sucess){
        return payloadValido;
    }else{
        try {
            const [results,fields] = 
            await db.execute('UPDATE Cliente SET Nome = ?, Email = ?, Telefone = ? WHERE Id = ?; ',
            [c.Nome, c.Email, c.Telefone, idCliente]);
            
            
            if(results.affectedRows > 0){
                c.Id = idCliente;
                responseBase.data = c;
                responseBase.message = 'Cliente editado';
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

 async function apagarCliente(idCliente){
    const exists = await listarClientesPorId(idCliente);

    if(exists.sucess){
        const [results,fields] = await db.execute('DELETE FROM Cliente WHERE Id = ?',[idCliente]);

        if(results.affectedRows > 0){
            responseBase.data = null;
            responseBase.message = 'Cliente apagado';
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

function validarCliente(c){
    responseBase.sucess = false;
    responseBase.message = "";
    responseBase.data = null;

    if(!c){
        responseBase.sucess = false;
        responseBase.message = "Faltam Dados";
        responseBase.data = null;
        return responseBase;
    }

    if(!c.Nome || !c.Email || !c.Telefone){
        responseBase.sucess = false;
        responseBase.message = `Faltam Dados, payload: ${c}`;
        responseBase.data = null;

        
        return responseBase;
    }

    if(isNaN(c.Telefone) || c.Telefone.lenght != 11){
        responseBase.sucess = false;
        responseBase.message += `Telefone é somente numeros e tamanho maximo de 12 digitos`;
        return responseBase;
    }

    responseBase.sucess = true;
    responseBase.message = 'Sucesso ao validar';
    return responseBase;
};


export const ClienteService = {
    criarCliente,
    listarClientes,
    listarClientesPorId,
    apagarCliente,
    editarCliente
}

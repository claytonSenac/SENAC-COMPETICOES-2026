import { db } from "../db/conexaoBanco.js";
import { Cliente } from "../db/models/cliente.js";
import { ResponseBase } from "../utils/response.js";

async function criarCliente(c){

    const r = validarCliente(c);

    if(!r.sucess){
        return r;
    }

    try {
        const cliente = r.data;

        const [re,f] = await db.execute(`
            INSERT INTO Cliente (Id,Nome,Cpf,Email,Telefone)VALUES
            (DEFAULT,?, ?, ?, ?);
            `,[cliente.Nome, cliente.Cpf, cliente.Email, cliente.Telefone]);

        if(re.affectedRows > 0){
            cliente.Id = re.insertId;
            return new ResponseBase(true,"SUCESSO AO SALVAR",cliente);
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

async function listarClientes(){
    try {
        const [r,f] = await db.execute("SELECT * FROM Cliente;");
        return new ResponseBase(true,"DADOS BUSCADOS",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function listarClientesPorId(idCliente){
    if(isNaN(idCliente)){
        return new ResponseBase(false,'SEM ID CLIENTE',null);
    }
    try {
        const [r,f] = await db.execute("SELECT * FROM Cliente WHERE Id = ?;",[idCliente]);
        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function editarCliente(c,idCliente){
    if(typeof idCliente != 'number'){
        return new ResponseBase(false,'SEM ID CLIENTE',null);
    }

    const valid = validarCliente(c);
    if(!valid.sucess){
        return new ResponseBase(valid);
    }

    const exits = await listarClientesPorId(idCliente);
    if(exits.data.length == 0){
        return new ResponseBase(false,'Cliente não existe',null);
    }

    try {
        const [r,f] = await db.execute(`UPDATE Cliente SET Nome = ?, Email = ?, Cpf = ?, Telefone = ? WHERE Id = ?`,[c.Nome, c.Email, c.Cpf, c.Telefone,idCliente]);

        

        if(r.affectedRows > 0){
            c.Id = idCliente;
            return new ResponseBase(true,'Cliente EDITADO', c);
        }
    } catch (error) {
        let errMsg = error;    
        if(error.sqlMessage){
            errMsg = error.sqlMessage       
        }
        return new ResponseBase(false,errMsg,null);
    }
}

async function excluirCliente(idCliente){
 if(typeof idCliente != 'number'){
        return new ResponseBase(false,'SEM ID CLIENTE',null);
    }

    const exits = await listarClientesPorId(idCliente);
    if(exits.data.length == 0){
        return new ResponseBase(false,'Cliente não existe',null);
    }

    try {
        const [r,f] = await db.execute(`DELETE FROM Cliente Where Id = ?`,[idCliente]);
        if(r.affectedRows > 0){
            return new ResponseBase(true,'Cliente excluido', null);
        }

        } catch (error) {
        let errMsg = error;    
        if(error.sqlMessage){
            errMsg = error.sqlMessage       
        }
        return new ResponseBase(false,errMsg,null);    
    }
}

function validarCliente(c){
    try {
        const res = Cliente.parse(c);
        return new ResponseBase(true,'VALIDADO',res);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

export const ClienteService = {
    criarCliente,
    validarCliente,
    listarClientes,
    listarClientesPorId,
    editarCliente,
    excluirCliente
}
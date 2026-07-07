import { Funcionario } from "../db/models/funcionario.js";
import { ResponseBase } from "../utils/response.js";
import { db } from "../db/conexaoBanco.js";

async function criarFuncionario(f){

    const r = validarFuncionario(f);

    if(!r.sucess){
        return r;
    }

    try {
        const Funcionario = r.data;

        const [re,f] = await db.execute(`
            INSERT INTO Funcionario (Id,Nome,Cargo,Email,Telefone)VALUES
            (DEFAULT,?, ?, ?, ?);
            `,[Funcionario.Nome, Funcionario.Cargo, Funcionario.Email, Funcionario.Telefone]);

        if(re.affectedRows > 0){
            Funcionario.Id = re.insertId;
            return new ResponseBase(true,"SUCESSO AO SALVAR",Funcionario);
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

async function listarFuncionarios(){
    try {
        const [r,f] = await db.execute("SELECT * FROM Funcionario;");
        return new ResponseBase(true,"DADOS BUSCADOS",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function listarFuncionariosPorId(idFuncionario){
    if(isNaN(idFuncionario)){
        return new ResponseBase(false,'SEM ID Funcionario',null);
    }
    try {
        const [r,f] = await db.execute("SELECT * FROM Funcionario WHERE Id = ?;",[idFuncionario]);
        return new ResponseBase(true,"DADO BUSCADO",r ?? []);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

async function editarFuncionario(f,idFuncionario){
    if(typeof idFuncionario != 'number'){
        return new ResponseBase(false,'SEM ID FUNCIONARIO',null);
    }

    const valid = validarFuncionario(f);
    if(!valid.sucess){
        return new ResponseBase(valid);
    }

    const exits = await listarFuncionariosPorId(idFuncionario);
    if(exits.data.length == 0){
        return new ResponseBase(false,'Funcionario não existe',null);
    }

    try {
        const [r,fields] = await db.execute(`UPDATE Funcionario SET Nome = ?, Email = ?, Cargo = ?, Telefone = ? WHERE Id = ?`,[f.Nome, f.Email, f.Cargo, f.Telefone,idFuncionario]);

        

        if(r.affectedRows > 0){
            f.Id = idFuncionario;
            return new ResponseBase(true,'FUNCIONARIO EDITADO', f);
        }
    } catch (error) {
        let errMsg = error;    
        if(error.sqlMessage){
            errMsg = error.sqlMessage       
        }
        return new ResponseBase(false,errMsg,null);
    }

    async function excluirFuncionario(idFuncionario){
     if(typeof idFuncionario != 'number'){
            return new ResponseBase(false,'SEM ID FUNCIONARIO',null);
        }
    
        const exits = await listarFuncionariosPorId(idFuncionario);
        if(exits.data.length == 0){
            return new ResponseBase(false,'FUNCIONARIO não existe',null);
        }
    
        try {
            const [r,f] = await db.execute(`DELETE FROM Funcionario Where Id = ?`,[idFuncionario]);
            if(r.affectedRows > 0){
                return new ResponseBase(true,'FUNCIONARIO excluido', null);
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

async function excluirFuncionario(idFuncionario){
 if(typeof idFuncionario != 'number'){
        return new ResponseBase(false,'SEM ID FUNCIONARIO',null);
    }

    const exits = await listarFuncionariosPorId(idFuncionario);
    if(exits.data.length == 0){
        return new ResponseBase(false,'FUNCIONARIO não existe',null);
    }

    try {
        const [r,f] = await db.execute(`DELETE FROM Funcionario Where Id = ?`,[idFuncionario]);
        if(r.affectedRows > 0){
            return new ResponseBase(true,'Funcionario excluido', null);
        }

        } catch (error) {
        let errMsg = error;    
        if(error.sqlMessage){
            errMsg = error.sqlMessage       
        }
        return new ResponseBase(false,errMsg,null);    
    }
}

function validarFuncionario(f){
    try {
        const res = Funcionario.parse(f);
        return new ResponseBase(true,'VALIDADO',res);
    } catch (error) {
        return new ResponseBase(false,error,null);
    }
}

export const FuncionarioService = {
    listarFuncionarios,
    criarFuncionario,
    editarFuncionario,
    excluirFuncionario,
    validarFuncionario,
    listarFuncionariosPorId
}
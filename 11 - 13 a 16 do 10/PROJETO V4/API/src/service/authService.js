import { Result } from "../utils/result.js";
import { db } from "../core/dbContext.js";
import bcrypt from "bcryptjs";

async function loginAdmin(body){
    try {
        if(!body || !body.email || !body.senha) return Result.fail("Faltam campos",body);

        const exists = await db.user.findFirst({
            where:{
                email: body.email
            }
        });

        if(!exists) return Result.fail("Usuario não existe");

        const login = await bcrypt.compare(body.senha, exists.HashSenha);

        if(!login){
            return {code:401,text:"Credenciais Inválidas", body};
        }else{
            let user = exists;
            delete user.HashSenha;

            return Result.sucess(200, "Autenticado com sucesso", exists)
        }

        
        
    } catch (error) {
        return Result.fail(error)
    }
}

async function loginParticipante(body){
    try {
        if(!body || !body.email || !body.senha) return Result.fail("Faltam campos",body);

        const exists = await db.participante.findFirst({
            where:{
                Email: body.email,
                Ativo:true
            }
        });

        if(!exists) return Result.fail("Participante não existente");

        const login = await bcrypt.compare(body.senha, exists.HashSenha);

        if(!login){
            return {code:401,text:"Credenciais Inválidas", body};
        }else{
            let p = exists;
            delete p.HashSenha;
            
            return Result.sucess(200, "Autenticado com sucesso", p)
        }
        
    } catch (error) {
        return Result.fail("erro no try " + error)
    }
}

export const authService = {
    loginAdmin,loginParticipante
}
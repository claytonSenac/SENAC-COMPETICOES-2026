import { Result } from "../utils/result.js";
import { db } from "../core/dbContext.js";
import bcrypt from "bcryptjs";

async function listar(){
    try {
        const exists = await db.participante.findMany({
            where:{
                Ativo:true
            }
        });

        return Result.sucess(200,"sucesso",exists);
    } catch (error) {
        return Result.fail(error)
    }
}

async function criar(body){
    if(!body || !body.nome || !body.email || !body.telefone || !body.senha) return Result.fail("Campos incorretos", body);

    if(body.telefone.length != 11) return Result.fail("O telefone deve conter no maximo 11 caracteres", body);

    if(body.senha.length < 8) return Result.fail("A senha deve conter no minimo 8 caracteres");

    try {
        const exists = await db.participante.findFirst({
            where:{
                Email: body.email
            }
        });

        if(exists) return Result.fail("Participante ja existe com este email!");

        const salt = await bcrypt.genSalt(10);
        const senha = await bcrypt.hash(body.senha, salt);

        const res = await db.participante.create({
            data:{
                Nome:body.nome,
                Email: body.email,
                Telefone: body.telefone,
                HashSenha: senha
            }
        });

        return Result.sucess(201,"criado", res);

    } catch (error) {
        console.log(error);
        return Result.fail(error);
    }
}

async function editar(body,id){
    if(!body || !body.nome || !id || !body.email || !body.telefone || !body.senha) return Result.fail("Campos incorretos", body);

    if(body.telefone.length != 11) return Result.fail("O telefone deve conter no maximo 11 caracteres", body);

    if(body.senha.length < 8) return Result.fail("A senha deve conter no minimo 8 caracteres");

    try {
        const exists = await db.participante.findFirst({
            where:{
                Email: body.email
            }
        });

        if(!exists) return Result.fail("Participante não existe!");

        const isValid = await bcrypt.compare(body.senha, exists.HashSenha);

        if(!isValid) return Result.fail(401, "Credenciais invalidas!");

        let senha = exists.HashSenha;

        if(body.novaSenha){
            if(body.novaSenha.length < 8 ) return Result.fail("A nova senha deve conter no minimo 8 caracteres");
            
            const salt = await bcrypt.genSalt(10);
            senha = await bcrypt.hash(body.novaSenha, salt);
        }

        const res = await db.participante.update({
            where:{
                Id: id
            },
            data:{
                Nome:body.nome,
                Email: body.email,
                Telefone: body.telefone,
                HashSenha: senha
            }
        });

        return Result.sucess(201,"criado", res);

    } catch (error) {
        console.log(error);
        return Result.fail(error);
    }
}

async function excluir(id){
    if(!id) return Result.fail("Sem id ");

    try {
        const exists = await db.participante.findFirst({
            where: {
                Id:id
            }
        });

        if(!exists) return Result.fail("Participante não existente");

        if(exists.Ativo = false) return Result.fail("Participante ja excluido");

        await db.participante.update({
            where:{
                Id:id
            },
            data:{
                Ativo:false
            }
        });

        return Result.sucess(200,"excluido");
    } catch (error) {
        console.log(error)
        return Result.fail(error);
    }
}

async function inscrever(body){
    if(!body || !body.idParticipante || !body.idAtividade) return Result.fail("Sem campos", body);

    try {
        const exists = await db.inscricao.findFirst({
            where:{
                IdAtividade: body.idAtividade,
                idParticipante: body.idParticipante
            }
        });

        const atividade = await db.atividade.findFirst({
            where:{
                Id: body.idAtividade,
                Ativo:true
            }
        });

        const participante = await db.participante.findFirst({
            where:{
                Id: body.idParticipante,
                Ativo:true
            }
        });

        if(!participante || participante.Ativo == false) return Result.fail("Participante não ativo ou não existe");

        if(atividade.VagasRestantes <= 0)return Result.fail("Atividade sem Vagas!");

        if(exists){
            if(exists.Ativo = true) return Result.fail("Participante ja inscrito");

            await db.inscricao.update({
                where:{
                    Id: exists.Id
                },
                data:{
                    Ativo:true
                }
            });

            return Result.sucess(200, "Inscrição re-ativada com sucesso!");
        }else{
            await db.inscricao.create({
                data:{
                    IdAtividade: body.idAtividade,
                    IdParticipante: body.idParticipante
                }
            });

            return Result.sucess(200, "Inscrição feita com sucesso!");
        }
    } catch (error) {
        console.log(error);
        return Result.fail(error);
    }
}
export const participanteService = {
    
}
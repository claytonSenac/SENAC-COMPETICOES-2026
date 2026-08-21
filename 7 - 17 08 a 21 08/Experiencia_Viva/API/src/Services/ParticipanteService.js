import { db } from "../Core/dbContext.js";
import {ResError,ResSucess} from '../Utils/returnCallBack.js'
import tratarErro from "../utils/tratarErroPrisma.js";

async function listar(){
    try {
        const data = await db.participante.findMany({
            where:{
                ativo: true
            }
        });
        return ResSucess(200,"sucesso",data);
    } catch (e) {
        if(e.code){
            const err = tratarErro(e.code);
            return ResError(400,err);
        }
    }
}

async function listarPorId(id){
    if(!id) return ResError(400,"Falta Campo id");
    try {
        const data = await db.participante.findFirst({
            where:{
                ativo: true,
                id: id
            }
        });
        return ResSucess(200,"sucesso",data);
    } catch (e) {
        if(e.code){
            const err = tratarErro(e.code);
            return ResError(400,err);
        }
    }
}

async function criar(body){
    let email = "";
    let telefone = "";

    if(!body.nome) return ResError(400,"falta campo nome");
    if(!body.email) return ResError(400,"falta campo email");
    if(!body.telefone) return ResError(400,"falta campo telefone");

    email = body.email.toLowerCase().trim();
    telefone = body.telefone.toLowerCase().trim();
        console.log(telefone)
    if(telefone.length != 11) return ResError(400, "telefone deve seguir este padrao [ XX X XXXX XXXX ]");

    try {
        
        const exists = await db.participante.count({
            where:{
                email: email
            }
        });

        if(exists > 0) return ResError(400, `Existe um participante com este email`);


        const data = await db.participante.create({
            data:{
                nome: body.nome,
                email: email,
                telefone: telefone
            }
        });

        return ResSucess(201,"Participante Criado",data);

    } catch (error) {
        console.log(error);
        return ResError(400,error)
    //    if(e.code){
    //         const err = tratarErro(e.code);
    //         return ResError(400,err);
    //     } 
    }
}

async function editar(body,id){
    if(!id) return ResError(400, "falta parametro id");

    let email = "";
    let telefone = "";

    if(!body.nome) return ResError(400,"falta campo nome");
    if(!body.email) return ResError(400,"falta campo email");
    if(!body.telefone) return ResError(400,"falta campo telefone");

    email = body.email.toLowerCase().trim();
    telefone = body.telefone.toLowerCase().trim();

    if(telefone.length != 11) return ResError(400, "telefone deve seguir este padrao [ XX X XXXX XXXX ]");

    try {
        const exists = await db.participante.count({
            where:{
                email: email,
                NOT:{
                    id:id
                }
            }
        });
    
        if(exists > 0) return ResError(400, `Existe um participante com este email`);


        const data = await db.participante.update({
            data:{
                nome: body.nome,
                email: email,
                telefone: telefone
            },
            where:{
                id: id
            }
        });

        return ResSucess(200,"Participante Editado",data);

    } catch (error) {
        //    if(e.code){
        //         const err = tratarErro(e.code);
        //         return ResError(400,err);
        //     } 
        console.log(error);
        return ResError(400,error)
    }
}

async function excluir(id){

    if(!id) return ResError(400,"Falta Parametro Id");

    try {
        
        await db.participante.update({
            data:{
                ativo: false
            },
            where:{
                id: id
            }
        });

        return ResSucess(200,"Participante Excluido",null);

    } catch (error) {
       if(e.code){
            const err = tratarErro(e.code);
            return ResError(400,err);
        } 
    }
}

async function Inscrever(data){
    if(!data.idParticipante) return ResError(400,"sem parametro idParticipante");
    if(!data.idAtividade) return ResError(400,"sem parametro idAtividade");

    try {

        const exists = await db.atividade_participante.count({
            where: {
                idAtividade: data.idAtividade,
                idParticipante: data.idParticipante
            }
        });

        if(exists > 0 ) return ResError(400,"Participante ja inscrito no evento");
        
        const inscricao = await db.atividade_participante.create({
            data:{
                idAtividade: data.idAtividade,
                idParticipante: data.idParticipante
            }
        })


        return ResSucess(201, "Inscrição Feita", inscricao)

    } catch (error) {
       console.log(error);
       ResError(400,error)
    }
}

async function CancelarInscricao(idInscricao){
    if(!idInscricao) return ResError(400,"sem parametro idInscricao");
   

    try {

        const exists = await db.atividade_participante.count({
            where: {
                id: idInscricao
            }
        });

        if(exists == 0 ) return ResError(400,"Participante não inscrito no evento");
        
        const insc = await db.atividade_participante.update({
            data:{
                ativo: false
            },
            where: {
                 id: idInscricao
            }
        })


        return ResSucess(200, "Inscrição Cancelada", insc)

    } catch (error) {
       console.log(error);
       ResError(400,error)
    }
}

const participanteService = {
    listar,
    listarPorId,
    criar,
    editar,
    excluir,
    Inscrever,
    CancelarInscricao
}

export default participanteService;
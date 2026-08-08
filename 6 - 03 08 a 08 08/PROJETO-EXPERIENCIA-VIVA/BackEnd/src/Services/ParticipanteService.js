import { db } from "../dbContext.js";

async function criarParticipante(p){
    const valid = validarParticipante(p);
    if(valid !=null){
        return valid;
    }

    try {
        const exists = await db.participante.findFirst({
            where:{
                email: p.email,
                ativo: true
            }
        });

        console.log(exists)
        if(exists){
            return {code:400,text:"existe um participante ativo com este email"}
        }

        const data = await db.participante.create({
            data: {
                nome: p.nome,
                email: p.email,
                telefone: p.telefone,
            }
        })
        return {code: 200, text: 'sucesso', data: data}
    } catch (error) {
        console.log(error)
        return {code: 500}
    }
}

async function editarParticipante(id,p){
    const valid = validarParticipante(p);
    if(valid !=null){
        return valid;
    }

    try {

        const data = await db.participante.update({
            data: {
                nome: p.nome,
                email: p.email,
                telefone: p.telefone,
            },
            where:{
                id: id,
                ativo:true
            }
        })
        return {code: 200, text: 'sucesso', data: data}
    } catch (error) {
        console.log(error)
        return {code: 500}
    }
}

async function excluirParticipante(id){
    if(!id) return {code:400,text:"id obrigatorio"}
     try {
        const data = await db.participante.update({
            data: {
                ativo:false
            },
            where:{
                id: id,
                ativo:true
            }
        })
        return {code: 200, text: 'Excluido'}
    } catch (error) {
        console.log(error)
        return {code: 500}
    }
    
}

async function listarParticipantes(){
     try {
        const data = await db.participante.findMany({
            where:{
                ativo:true
            }
        })
        return {code: 200, text: 'sucesso',data:data}
    } catch (error) {
        console.log(error)
        return {code: 500}
    }
}

async function listarParticipantePorId(id){
    if(!id) return {code:400,text:"id obrigatorio"}
     try {
        const data = await db.participante.findFirst({
            where:{
                id: id,
                ativo:true
            }
        })
        return {code: 200, text: 'sucesso',data:data}
    } catch (error) {
        console.log(error)
        return {code: 500}
    }
}

function validarParticipante(p){
    if(!p) return {code:400,text:"entidade participante obrigatoria"}
    if(!p.nome) return {code:400,text:"campo [ nome ] obrigatorio"}
    if(!p.email) return {code:400,text:"campo [ email ] obrigatorio"}
    if(!p.telefone) return {code:400,text:"campo [ telefone ] obrigatorio"}

    if(p.telefone.length != 11) return {code:400,text:"campo [ telefone ] deve ter 11 caracteres"}
    return null;
}

export const participanteService = {
    criarParticipante,
    editarParticipante,
    excluirParticipante,
    listarParticipantePorId,
    listarParticipantes
}
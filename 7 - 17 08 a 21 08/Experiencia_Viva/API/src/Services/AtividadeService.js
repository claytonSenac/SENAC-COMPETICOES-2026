import { db } from "../Core/dbContext.js";
import {ResError,ResSucess} from '../Utils/returnCallBack.js'
import tratarErro from "../utils/tratarErroPrisma.js";

async function listar(){
    try {
        const dataAtual = new Date();
        
        const data = await db.atividade.findMany({
            where:{
                ativo: true,
                dataEvento: {
                    gte: dataAtual
                }
            },
            include:{
                atividade_participante: {
                    include:{
                        participante:true
                    },
                    where:{
                        ativo:true
                    }
                } 
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
    if(!id) return ResError(400,"Falta parametro id");
    try {
        const data = await db.atividade.findFirst({
            where:{
                ativo: true,
                id: id
            },
            include:{
                atividade_participante:{
                    include: {
                         atividade:true
                    },
                    where:{
                        ativo:true
                    }
                }
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
    let vagas = 0; 

    if(!body.nome) return ResError(400,"falta campo nome");
    if(!body.dataEvento) return ResError(400,"falta campo data");
    if(isNaN(body.vagas) || !body.vagas){
        return ResError(400,"falta campo vagas ou invalido")
    }else{
        vagas = parseInt(body.vagas);
    }

    if(vagas <= 0) return ResError(400, "Vaga deve ser maior que 0");

    try {
        const dataEvento = new Date(body.dataEvento).toISOString();

        const data = await db.atividade.create({
            data:{
                nome: body.nome,
                dataEvento: dataEvento,
                vagas: vagas,
                quantidade_vagas: vagas,
                descricao: body.descricao ?? ""
            }
        });

        return ResSucess(201,"Atividade Criada",data);

    } catch (error) {
        console.log(error)
        return ResError(400,error);
    }
}

async function editar(body,id){
    let vagas = 0; 

    if(!id) return ResError(400,"Falta Parametro Id");

    if(!body.nome) return ResError(400,"falta campo nome");
    if(!body.dataEvento) return ResError(400,"falta campo data");
    if(isNaN(body.vagas) || !body.vagas){
        return ResError(400,"falta campo vagas")
    }else{
        vagas = parseInt(body.vagas);
    }

    if(vagas <= 0) return ResError(400, "Vaga deve ser maior que 0");

    try {
        const dataEvento = new Date(body.dataEvento).toISOString();

        const data = await db.atividade.update({
            data:{
                nome: body.nome,
                dataEvento: dataEvento,
                quantidade_vagas: vagas,
                descricao: body.descricao ?? ""
            },
            where:{
                id: id
            }
        });

        return ResSucess(200,"Atividade Editada",data);

    } catch (error) {
        console.log(error)
    //    if(e.code){
    //         const err = tratarErro(e.code);
    //     } 
        return ResError(400,error);
    }
}

async function excluir(id){

    if(!id) return ResError(400,"Falta Parametro Id");

    try {
        
        await db.atividade.update({
            data:{
                ativo: false
            },
            where:{
                id: id
            }
        });

        return ResSucess(200,"Atividade Excluida",null);

    } catch (error) {
       if(e.code){
            const err = tratarErro(e.code);
            return ResError(400,err);
        } 
    }
}

const atividadeService = {
    listar,
    listarPorId,
    criar,
    editar,
    excluir
}

export default atividadeService;
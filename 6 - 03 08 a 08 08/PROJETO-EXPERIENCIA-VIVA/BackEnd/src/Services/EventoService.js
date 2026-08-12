import { db } from "../dbContext.js";

async function criarEvento(e){
    if(!e) return {code:400, text: "sem objeto evento"}
    if(!e.nome) return {code:400, text: "sem campo [nome]"}
    if(!e.dataEvento) return {code:400, text: "sem campo [dataEvento]"}
    if(!e.vagas) return {code:400, text: "sem campo [vagas]"};

    let vaga = parseInt(e.vagas);

    if(vaga <= 0) return {code:400, text: "vaga deve ser maior que 0"}
    if(!e.idCategoria)  return {code:400, text: "sem campo [idCategoria]"}

    try {
        const data = await db.evento.create({
            data:{
                nome: e.nome,
                dataEvento: e.dataEvento,
                vagas: vaga,
                idCategoria: e.idCategoria
            }
        })
        
        return {code: 201, text: "criado", data:data};
    } catch (error) {
        console.log(error);
        if(error?.PrismaClientValidationError){
            return {code:500,text:error?.PrismaClientValidationError?.message}
        }else{
            return {code:500}
        }
    }
}

async function editarEvento(id,e){
    if(!e) return {code:400, text: "sem objeto evento"}
    if(!e.nome) return {code:400, text: "sem campo [nome]"}
    if(!e.dataEvento) return {code:400, text: "sem campo [dataEvento]"}
    if(!e.vagas) return {code:400, text: "sem campo [vagas]"}

    let vaga = parseInt(e.vagas);

    if(vaga <= 0) return {code:400, text: "vaga deve ser maior que 0"}
    if(!e.idCategoria)  return {code:400, text: "sem campo [idCategoria]"}
    if(!id)  return {code:400, text: "sem campo [id]"}
    
    try {
        const data = await db.evento.update({
            data:{
                nome: e.nome,
                dataEvento: e.dataEvento,
                vagas:vaga,
                idCategoria: e.idCategoria
            },
            where:{
                id: id
            }
        })
        
        return {code: 200, text: "editado", data:data};
    } catch (error) {
        console.log(error);
        if(error?.PrismaClientKnownRequestError){
            return {code:500,text:error?.PrismaClientKnownRequestError?.message}
        }else{
            return {code:500}
        }
    }
}

async function listarEventos(){
    try {
        const data = await db.evento.findMany({
            where:{
                ativo: true,
                categoria:{
                    ativo:true
                }
            }
        })
        
        return {code: 200, text: "sucesso", data:data};
    } catch (error) {
        console.log(error);
        if(error?.PrismaClientKnownRequestError){
            return {code:500,text:error?.PrismaClientKnownRequestError?.message}
        }else{
            return {code:500}
        }
    }
}

async function listarEventoPorId(id){
    if(!id)  return {code:400, text: "sem campo [id]"}

    try {
        const data = await db.evento.findUnique({
            where:{
                id: id
            }
        });

        if(data?.ativo == false){
            return {code:400, text: "Evento desativado"}
        }
        
        return {code: 200, text: "sucesso", data:data};
    } catch (error) {
        console.log(error);
        if(error?.PrismaClientKnownRequestError){
            return {code:500,text:error?.PrismaClientKnownRequestError?.message}
        }else{
            return {code:500}
        }
    }
}

async function listarProximos(){
    try {
        const data = await db.evento.findMany({
            where:{
                ativo: true,
                categoria:{
                    ativo:true
                }
            },
            include:{
                categoria: true
            },  
            take:4,
            orderBy:{
                dataEvento:'desc'
            }
        })
        
        return {code: 200, text: "sucesso", data:data};
    } catch (error) {
        console.log(error);
        if(error?.PrismaClientKnownRequestError){
            return {code:500,text:error?.PrismaClientKnownRequestError?.message}
        }else{
            return {code:500}
        }
}
}
async function excluirEvento(id){
    if(!id)  return {code:400, text: "sem campo [id]"}

    try {
        const data = await db.evento.update({
            data:{
                ativo:false
            },
            where:{
                id: id
            }
        })
        
        return {code: 200, text: "sucesso"};
    } catch (error) {
        console.log(error);
        if(error?.PrismaClientKnownRequestError){
            return {code:500,text:error?.PrismaClientKnownRequestError?.message}
        }else{
            return {code:500}
        }
    }
}

async function inscreverEvento(idParticipante,idEvento){
    if(!idParticipante || !idEvento) return {code: 400, text: "Faltam dados"};

    try {
        const data = await db.inscricao_evento.create({
            data:{
               idEvento: idEvento,
               idParticipante: idParticipante
            }
        })
        
        return {code: 201, text: "criado", data:data};
    } catch (error) {
        console.log(error);
        if(error?.PrismaClientValidationError){
            return {code:500,text:error?.PrismaClientValidationError?.message}
        }else{
            return {code:500}
        }
    }
}

async function cancelarInscricao(idParticipante,idEvento){
    if(!idParticipante || !idEvento) return {code: 400, text: "Faltam dados"};

    try {
        const data = await db.inscricao_evento.update({
            data:{
               ativo: false
            },
            where:{
                idParticipante: idParticipante,
                idEvento: idEvento
            }
        })
        
        return {code: 201, text: "criado", data:data};
    } catch (error) {
        console.log(error);
        if(error?.PrismaClientValidationError){
            return {code:500,text:error?.PrismaClientValidationError?.message}
        }else{
            return {code:500}
        }
    }
}

async function buscarEventosEParticipantes(){
    
}

export const eventoService = {
    criarEvento,
    editarEvento,
    listarEventos,
    listarEventoPorId,
    excluirEvento,
    listarProximos,
    cancelarInscricao,
    inscreverEvento
}
import { prisma } from "../Database/db.js"

async function addAsync(e){
    if(!validate(e)) return false;

    try {
        const res = await prisma.autor.create({
            data: {
                nome: e.nome,
                nacionalidade: e.nacionalidade,
                dataNascimento: e.dataNascimento
            }
        })
        return res;
    } catch (error) {
        return error.message;
    }
}

async function getAll(){
    try {
        const res = await prisma.autor.findMany();
        return res;
    } catch (error) {
        return error;
    }
}

async function getById(id){
    if(!id  && Number.isNaN(id)) return;

    try {
        const res = await prisma.autor.findFirst(
            {
                where: {
                    id: id
                }
            }
        );
        return res;
    } catch (error) {
        return error;
    }
}

async function deleteAsync(id){
    if(!id  && Number.isNaN(id)) return;

    try {
        const res = await prisma.autor.delete(
            {
                where: {
                    id: id
                }
            }
        );
        return res;
    } catch (error) {
        return error;
    }
}

async function updateAsync(e,id){
    if(!id  && Number.isNaN(id)) return;
    if(!validate(e)) return ;

    try {
        const res = await prisma.autor.update({
            data: {
                nome: e.nome,
                nacionalidade: e.nacionalidade,
                dataNascimento: e.dataNascimento,
            },
            where:{
                id:id
            }
        })
    } catch (error) {
        return error;
    }
}

function validate(e){
    if(!e) return false;
    if(!e.nome || !e.nacionalidade || !e.dataNascimento) return false;
    return true
}

export const autorService = {
    addAsync,
    deleteAsync,
    getAll,
    getById,
    updateAsync
}
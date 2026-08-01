import { prisma } from "../Database/db.js"

async function addAsync(e){
    if(!validate(e)) return false;

    try {
        const res = await prisma.generoLivro.create({
            data: {
                nome: e.nome
            }
        })
        return res;
    } catch (error) {
        return error.message;
    }
}

async function getAll(){
    try {
        const res = await prisma.generoLivro.findMany();
        return res;
    } catch (error) {
        return error;
    }
}

async function getById(id){
    if(!id  && Number.isNaN(id)) return;

    try {
        const res = await prisma.generoLivro.findFirst(
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
        const res = await prisma.generoLivro.delete(
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
        const res = await prisma.generoLivro.update({
            data: {
                nome: e.nome
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
    if(!e.nome) return false;
    return true
}

export const generoService = {
    addAsync,
    deleteAsync,
    getAll,
    getById,
    updateAsync
}
import { prisma } from "../Database/db.js"

async function addAsync(e){
    if(!validate(e)) return false;

    try {
        const res = await prisma.generolivro.create({
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
        const res = await prisma.generolivro.findMany({
            where: {
                deleted:false
            }
        });
        return res;
    } catch (error) {
        return error;
    }
}

async function getById(id){
    if(!id  && Number.isNaN(id)) return;

    try {
        const res = await prisma.generolivro.findFirst(
            {
                where: {
                    id: id,
                    deleted: false
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
        const res = await prisma.generolivro.delete(
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
        const res = await prisma.generolivro.update({
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
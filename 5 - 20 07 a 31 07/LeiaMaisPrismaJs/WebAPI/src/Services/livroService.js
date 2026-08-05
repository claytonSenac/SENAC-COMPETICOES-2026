import {prisma} from '../Database/db.js';

async function getAll(){
    try {
        const data = await prisma.livro.findMany({
            include:{
                autor:true,
                editora:true,
                generolivro:true
            },
            where:{
                deleted: false
            }
        });
        return data;
    } catch (error) {
        if(error.message){
            return error.message
        }else{
            return error
        }
    }
}

async function getById(idLivro){
    if(isNaN(idLivro)){
        return "Sem id do livro"
    }
    try {
        const data = await prisma.livro.findMany({
            where: {
                id: idLivro
            }
        });
        return data;
    } catch (error) {
        if(error.message){
            return error.message
        }else{
            return error
        }
    }
}

async function addAsync(livro){
    if(!livro) return "sem data"
    if(!livro.nome) return "campo nome necessario"
    if(!livro.isbn) return "ISBN obrigatorio"

    try {
        const data = await prisma.livro.create({
            data: {
                nome: livro.nome,
                colecao: livro.colecao,
                dataFundacao: new Date(livro.dataFundacao).toISOString(),
                dataLancamento: new Date(livro.dataLancamento).toISOString(),
                edicao: livro.edicao,
                isbn: livro.isbn,
                numPaginas: livro.numPaginas,
                volume: livro.volume,
                idAutor: livro.idAutor,
                idEditora: livro.idEditora,
                idGenero: livro.idGenero
            }
        })
        return data;
    } catch (error) {
        if(error.message){
            return error.message
        }else{
            return error
        }
    }
}

async function updateAsync(livro, idLivro){
    if(isNaN(idLivro)) return "sem id do livro"
    if(!livro) return "sem data"
    if(!livro.nome) return "campo nome necessario"
    if(!livro.isbn) return "ISBN obrigatorio"

    try {
        const data = await prisma.livro.update({
            data: {
                nome: livro.nome,
                colecao: livro.colecao,
                dataFundacao: new Date(livro.dataFundacao).toISOString(),
                dataLancamento: new Date(livro.dataLancamento).toISOString(),
                edicao: livro.edicao,
                isbn: livro.isbn,
                numPaginas: livro.numPaginas,
                volume: livro.volume,
                idAutor: livro.idAutor,
                idEditora: livro.idEditora,
                idGenero: livro.idGenero
            },
            where:{
                id: idLivro
            }
        });

        return data;
    } catch (error) {
        if(error.message){
            return error.message
        }else{
            return error
        }
    }
}

async function deleteAsync(idLivro){
    if(isNaN(idLivro)) return "sem id do livro"
    try {
        const data = await prisma.livro.update({
            data: {
                deleted:true
            },
            where:{
                id: idLivro
            }
        });

        return true;
    } catch (error) {
        if(error.message){
            return error.message
        }else{
            return error
        }
    }
}

export const livroService = {
    addAsync,
    getAll,
    getById,
    updateAsync,
    deleteAsync
}
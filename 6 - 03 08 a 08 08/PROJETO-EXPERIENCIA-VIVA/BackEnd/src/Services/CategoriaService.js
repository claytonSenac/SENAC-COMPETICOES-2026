import { db } from "../dbContext.js";

async function criarCategoria(c){
    if(!c) return {code:400,text: "Sem entidade Genero"};
    if(!c.nome) return {code:400,text: "Campo [nome] obrigatorio"};

    try {
        const res = await db.categoria.create({
            data:{
                nome: c.nome
            }
        });
        return {code:200, text:"sucesso", data: res}
    } catch (error) {
        console.log(error);
        if(error.PrismaClientKnownRequestError){
            return {
                code: 500,
                text: error?.PrismaClientKnownRequestError?.message ?? ""
            }
        }
        return {code: 500}
    }
}

async function editarCategoria(id,c){
    if(!c) return {code:400,text: "Sem entidade categoria"};
    if(!c.nome) return {code:400,text: "Campo [nome] obrigatorio"};
    if(!id) return {code:400,text: "Campo [id] obrigatorio"};

    try {
        const res = await db.categoria.update({
            data:{
                nome: c.nome
            },
            where:{
                id: id
            }
        });
        return {code:200, text:"sucesso", data: res}
    } catch (error) {
        console.log(error);
        if(error.PrismaClientKnownRequestError){
            return {
                code: 500,
                text: error?.PrismaClientKnownRequestError?.message ?? ""
            }
        }
        return {code: 500}
    }
}

async function listarCategorias(){
    try {
        const res = await db.categoria.findMany({
            where:{
                ativo:true
            }
        });
        return {code:200, text:"sucesso", data: res}
    } catch (error) {
        console.log(error);
        if(error.PrismaClientKnownRequestError){
            return {
                code: 500,
                text: error?.PrismaClientKnownRequestError?.message ?? ""
            }
        }
        return {code: 500}
    }
}

async function listarCategoriasPorId(id){
    if(!id) return {code: 400, text:"campo ID obrigatorio"};
    try {
        const res = await db.categoria.findUnique({
            where:{
                id: id,
                ativo:true
            }
        });
        return {code:200, text:"sucesso", data: res}
    } catch (error) {
        console.log(error);
        if(error.PrismaClientKnownRequestError){
            return {
                code: 500,
                text: error?.PrismaClientKnownRequestError?.message ?? ""
            }
        }
        return {code: 500}
    }
}

async function excluirCategoria(id){
 if(!id) return {code: 400, text:"campo ID obrigatorio"};
    try {

        const res = await db.categoria.update({
            data: {
                ativo: false
            },
            where:{
                id: id
            }
        })

        return {code:200, text:"excluido"}
    } catch (error) {
        console.log(error);
        if(error.PrismaClientKnownRequestError){
            return {
                code: 500,
                text: error?.PrismaClientKnownRequestError?.message ?? ""
            }
        }
        return {code: 500}
    }
}

export const categoriaService = {
    criarCategoria,
    editarCategoria,
    listarCategorias,
    listarCategoriasPorId,
    excluirCategoria
} 
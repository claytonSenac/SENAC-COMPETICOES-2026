import { prisma } from "../Database/db.js";


async function addAsync(e){
    const valid = validate(e);

    if(valid.sucess){
        console.log(valid)
        return {
            sucess: false,
            message: valid.erros,
            code: 400,
            data: null
        }
    }

    try {
        const res = await prisma.editora.create({
            data: {
                nome: e.nome,
                cidade: e.cidade,
                dataFundacao: e.dataFundacao,
                pais: e.pais,
            }
        });

        return {
            sucess: true,
            message: "criado",
            code: 201,
            data: res
        }
    } catch (error) {
        return {
            sucess:false,
            message: error,
            code: 500,
            data: null
        }
    }
}

async function updateAsync(e,id){
    if(isNaN(id)) return {
        sucess: false,
        message: "id Incorreto",
        data: null,
        code: 200
    }

    const valid = validate(e);
    if(valid.sucess){
        return {
            sucess: false,
            message: valid.erros,
            code: 400,
            data: null
        }
    }

    try {
        const res = await prisma.editora.update({
            data: {
                nome: e.nome,
                cidade: e.cidade,
                dataFundacao: e.dataFundacao,
                pais: e.pais,
            },
            where:{
                id: id
            }
        });
        return {
            sucess: true,
            message: "editado",
            code: 200,
            data: res
        }
    } catch (error) {
        return {
            sucess: false,
            message: error,
            code: 500,
            data: null
        }
    }
}

async function getAll(){
    try {
        const res = await prisma.editora.findMany(
            {
                where:{
            deletedAt: null
            }
        });
        return{
            sucess:true,
            code:200,
            message:"sucesso",
            data:res
        }
    } catch (error) {
        return {
            sucess: false,
            message: error,
            code: 500,
            data: null
        }
    }
}

async function deleteAsync(id){
    if(!id  && Number.isNaN(id)) return;

    try {
        const res = await prisma.editora.update(
            {
                data:{
                    deletedAt: new Date().toISOString()
                },
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

function validate(e) {
  let erros = [];
  erros.push('teste')
  if (!e) erros.push("Sem Entidade");
  if (!e.nome) erros.push("Sem nome");
  if (!e.cidade) erros.push("Sem cidade");
  if (!e.pais) erros.push("Sem pais");
  if (!e.dataFundacao) {
    erros.push("Sem Data ou Invalida");
  }
  console.log(erros);
  return { sucess: erros.length == 0, erros: erros };
}


export const editoraService ={
    addAsync,
    updateAsync,
    getAll,
    deleteAsync,
    validate
}
import { Autor, type AutorInterface } from "../Models/Entities/Autor";

import { ResponseBase } from "../Utils/returnBase";

async function addAsync(a:AutorInterface){
    try {
        const autor = await Autor.create({
            Nome:a.Nome,
            Nacionalidade: a.Nacionalidade,
            DataNascimento: a.DataNascimento,
        });
        
        if(autor){
            return new ResponseBase(true,"sucesso",autor.toJSON());
        }else{
            return new ResponseBase(false,"erro")
        }
    } catch (error) {
        console.log(error);
        return new ResponseBase(false,"erro ao criar");
    }
}

async function UpdateAsync(a:AutorInterface,Id:string){
    try {
        const autor = await Autor.findByPk(Id);
        if(autor){
            await Autor.update({
                Nome: a.Nome,
                DataNascimento: a.DataNascimento
            },{
                where:{
                    Id: Id
                },
                returning:true,
            });

            return new ResponseBase(true,"Sucesso",autor.toJSON());
        }else{
            return new ResponseBase(false,"Não Encontrado")
        }
    } catch (error) {
        console.log(error)
        return new ResponseBase(false,"erro")
    }
}

async function GetById(id:string){
    try {
        const data = await Autor.findByPk(id);
        return new ResponseBase(true,'sucesso',data?.toJSON())
    } catch (error) {
        console.log(error)
        return new ResponseBase(false,"erro");
    }
}

async function Delete(id:string){
    try {
       const autor = await Autor.findByPk(id);
        if(autor != null){
            autor.destroy()
            return new ResponseBase(true,'excluido',null)
        }else{
            return new ResponseBase(false,'NÂO EXISTE',null)
        }
    } catch (error) {
        console.log(error)
        return new ResponseBase(false,"erro");
    }
}

export const AutorService = {
    addAsync,
    UpdateAsync,
    GetById,
    Delete
}
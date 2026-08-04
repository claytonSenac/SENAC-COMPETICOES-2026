

import  { type EditoraInterface, Editora } from "../Models/Entities/Editora";
import { ResponseBase } from "../Utils/returnBase";

async function addAsync(a:EditoraInterface){
    try {
        const editora = await Editora.create({
            Nome:a.Nome,
            Cidade: a.Cidade,
            Pais: a.Pais,
            DataFundacao: a.DataFundacao
        });
        
        if(editora){
            return new ResponseBase(true,"sucesso",editora.toJSON());
        }else{
            return new ResponseBase(false,"erro")
        }
    } catch (error) {
        console.log(error);
        return new ResponseBase(false,"erro ao criar");
    }
}

async function UpdateAsync(a:EditoraInterface,Id:string){
    try {
        const editora = await Editora.findByPk(Id);
        if(editora){
            await editora.update({
                Nome:a.Nome,
                Cidade: a.Cidade,
                Pais: a.Pais,
                DataFundacao: a.DataFundacao
            },{
                where:{
                    Id: Id
                },
                returning:true,
            });

            return new ResponseBase(true,"Sucesso",editora.toJSON());
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
        const data = await Editora.findByPk(id);
        return new ResponseBase(true,'sucesso',data?.toJSON())
    } catch (error) {
        console.log(error)
        return new ResponseBase(false,"erro");
    }
}

async function Delete(id:string){
    try {
       const editora = await Editora.findByPk(id);
        if(editora != null){
            editora.destroy()
            return new ResponseBase(true,'excluido',null)
        }else{
            return new ResponseBase(false,'NÂO EXISTE',null)
        }
    } catch (error) {
        console.log(error)
        return new ResponseBase(false,"erro");
    }
}

export const EditoraService = {
    addAsync,
    UpdateAsync,
    GetById,
    Delete
}
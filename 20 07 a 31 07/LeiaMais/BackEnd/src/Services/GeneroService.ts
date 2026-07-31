import { Genero, type GeneroInterface } from "../Models/Entities/Genero";
import { ResponseBase } from "../Utils/returnBase";

async function addAsync(g:GeneroInterface){
    try {
        const genero = await Genero.create({
            Nome:g.Nome
        });
        
        if(genero){
            return new ResponseBase(true,"sucesso",genero.toJSON());
        }else{
            return new ResponseBase(false,"erro")
        }
    } catch (error) {
        console.log(error);
        return new ResponseBase(false,"erro ao criar");
    }
}

async function UpdateAsync(g:GeneroInterface,IdGenero:string){
    try {
        const genero = await Genero.findByPk(IdGenero);
        if(genero){
            await Genero.update({
                Nome: g.Nome
            },{
                where:{
                    Id: IdGenero
                },
                returning:true,
            });

            return new ResponseBase(true,"Sucesso",genero.toJSON());
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
        const data = await Genero.findByPk(id);
        return new ResponseBase(true,'sucesso',data?.toJSON())
    } catch (error) {
        console.log(error)
        return new ResponseBase(false,"erro");
    }
}

async function Delete(id:string){
    try {
       const gen = await Genero.findByPk(id);
        if(gen != null){
            gen.destroy()
            return new ResponseBase(true,'excluido',null)
        }else{
            return new ResponseBase(false,'NÂO EXISTE',null)
        }
    } catch (error) {
        console.log(error)
        return new ResponseBase(false,"erro");
    }
}

export const GeneroService = {
    addAsync,
    UpdateAsync,
    GetById,
    Delete
}

import { type LivroInterface, Livro } from "../Models/Entities/Livro";
import { ResponseBase } from "../Utils/returnBase";

async function addAsync(l:LivroInterface){
    try {
        const livro = await Livro.create({
            Nome:l.Nome,
            ISBN: l.ISBN,
            NumPaginas: l.NumPaginas,
            Volume: l.Volume,
            Colecao: l.Colecao,
            Edicao: l.Edicao,
            DataLancamento: l.DataLançamento,
            IdGenero: l.IdGenero,
            IdAutor: l.IdAutor,
            IdEditora: l.IdEditora,
        });
        
        if(livro){
            return new ResponseBase(true,"sucesso",livro.toJSON());
        }else{
            return new ResponseBase(false,"erro")
        }
    } catch (error) {
        console.log(error);
        return new ResponseBase(false,"erro ao criar");
    }
}

async function UpdateAsync(l:LivroInterface,Id:string){
    try {
        const livro = await Livro.findByPk(Id);
        if(livro){
            await Livro.update({
                Nome:l.Nome,
                ISBN: l.ISBN,
                NumPaginas: l.NumPaginas,
                Volume: l.Volume,
                Colecao: l.Colecao,
                Edicao: l.Edicao,
                DataLancamento: l.DataLançamento,
                IdGenero: l.IdGenero,
                IdAutor: l.IdAutor,
                IdEditora: l.IdEditora,
                },{
                where:{
                    Id: Id
                },
                returning:true,
            });

            return new ResponseBase(true,"Sucesso",livro.toJSON());
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
        const data = await Livro.findByPk(id);
        return new ResponseBase(true,'sucesso',data?.toJSON())
    } catch (error) {
        console.log(error)
        return new ResponseBase(false,"erro");
    }
}

async function Delete(id:string){
    try {
       const livro = await Livro.findByPk(id);
        if(livro != null){
            livro.destroy()
            return new ResponseBase(true,'excluido',null)
        }else{
            return new ResponseBase(false,'NÂO EXISTE',null)
        }
    } catch (error) {
        console.log(error)
        return new ResponseBase(false,"erro");
    }
}

export const LivroService = {
    addAsync,
    UpdateAsync,
    GetById,
    Delete
}
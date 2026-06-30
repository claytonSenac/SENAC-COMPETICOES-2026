import {db} from '../dbConection.js';


export async function criarProduto(produto){
    let returnBody =  {
        sucess: false,
        message: '',
        data: null
    };
    const res = validarProduto(produto);
    
    if(res.validated){
        try{
            const [results,fields] = await db.execute('INSERT INTO produto (Id,Nome,Descricao,Estoque,Preco) VALUES (DEFAULT, ?,?,?,?);',
            [produto.Nome, produto.Descricao, produto.Estoque, produto.Preco]
            );
            
            if(results.affectedRows > 0 ){
                produto.Id = results.insertId
                returnBody.data = produto;
                returnBody.sucess = true;
                returnBody.message = "PRODUTO CRIADO"
            }
            return returnBody;
        }
        catch(e){
            console.log(e);
        }
    }else{
        returnBody.sucess = false;
        returnBody.data = null;
        returnBody.message = res.message
        return returnBody;
    }
}

export async function getById(idProduto){
     let res =  {
        sucess: false,
        message: '',
        data: null
    };

    if(!idProduto) return null;

    try{
        const [result,fields] = await db.execute('SELECT * FROM produto WHERE Id = ?',[idProduto]);

        if(result[0] != null){
            res.sucess = true;
            res.message = 'Dados carregados';
            res.data = result[0];
        }
        else{
            res.sucess = false;
            res.message = 'Erro ao carregar dados';
            res.data = null;
        }
        return res;
    }
    catch(e){
        console.log(e)
    }
}

export async function editarProduto(produto,idProduto){
    let returnBody =  {
        sucess: false,
        message: '',
        data: null
    };

    const res = await getById(idProduto);
    let validated = validarProduto(produto);


    if(res.sucess && idProduto != null){
        let p = produto

        try{
            const [result,fields] = await db.execute('UPDATE produto SET Nome = ?, Descricao = ?, Preco = ?, Estoque = ? WHERE Id = ?;',
                [p.Nome, p.Descricao, p.Preco, p.Estoque, idProduto]
            );

            if(result.affectedRows > 0 ){
                returnBody.sucess = true;
                returnBody.message = 'Produto editado com sucesso';

                p.Id = idProduto;
                returnBody.data = p;
                return returnBody;
            }else{
                returnBody.sucess = false;
                returnBody.data = null;
                returnBody.message = 'NAO ENCONTRADO';
                
                return returnBody;

            }

        }catch(e){
            console.log(e);
            returnBody.sucess = false;
            returnBody.message = e;
            returnBody.data = null
        }
        
    }else{
        returnBody.sucess = false;
        returnBody.data = null;
        returnBody.message = 'NAO ENCONTRADO';
        
        return returnBody;
    }

}

export async function apagarProduto(idProduto){
    let returnBody =  {
        sucess: false,
        message: '',
        data: null
    };
    const res = await getById(idProduto);

    if(res.sucess && idProduto != null){
        try{
            const [result,fields] = await db.execute('DELETE FROM Produto WHERE Id = ?;',
            [idProduto]);

            if(result.affectedRows > 0 ){
                returnBody.sucess = true;
                returnBody.message = 'Produto apagado com sucesso';
                console.log('apagou')
                
            }else{
                returnBody.sucess = false;
                returnBody.message = 'Produto não encontrado'
            }
            return returnBody;
        }catch(e){
            console.log(e);
            returnBody.sucess = false;
            returnBody.message = e;
            returnBody.data = null
        }
    }else{
         returnBody.sucess = false;
        returnBody.message = 'Produto não encontrado';
        console.log('n achou')
        return returnBody;
    }
}

export async function listarProdutos() {
     let res =  {
        sucess: false,
        message: '',
        data: null
    };

    try{
        const [result,fields] = await db.execute('SELECT * FROM produto');

        if(result != null){
            res.sucess = true;
            res.message = 'Dados carregados';
            res.data = result;
        }
        else{
            res.sucess = false;
            res.message = 'Erro ao carregar dados';
            res.data = null;
        }
        return res;
    }
    catch(e){
        console.log(e)
    }
}

function validarProduto(p){
    let res =  {
        validated: false,
        message: ''
    };
    if(!p){
        res.message = 'Sem entidade enviada!';
        return res;
    };
    if(!p.Nome || !p.Descricao || !p.Estoque || !p.Preco) {
        res.message = `Faltam campos! ${JSON.stringify(p)}`;
        return res;
    };

    if(p.Preco < 0){
        res.message = 'O preço não pode ser menor que 0!';
        return res;
    }

    res.validated = true;
    return res;
}

export const ProdutoService = {
    criarProduto,
    editarProduto,
    getById,
    apagarProduto,
    listarProdutos
}
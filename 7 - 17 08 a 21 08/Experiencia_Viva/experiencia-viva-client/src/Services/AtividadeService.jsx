const apiUrl = "http://localhost:3002";

async function listar(){
    const res = await fetch(apiUrl + "/atividade");

    if(res.status){
        return res;
    }else{
        return null;
    }
}

async function excluir(id){
    if(!id) return null;

    const res = await fetch(apiUrl + "/atividade/delete/" + id,{
        method: "DELETE"
    });

    if(res.status){
        return await res.json();
    }else{
        return null;
    }
}


async function criar(data){
    if(!data) return null;

    const res = await fetch(apiUrl + "/atividade/",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({atividade: data})
    });

    if(res.status){
        return await res.json();
    }else{
        return null;
    }
}

async function editar(data){
    if(!data) return null;

    const res = await fetch(apiUrl + "/atividade/"+ data.id,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({atividade: data})
    });

    if(res.status){
        return await res.json();
    }else{
        return null;
    }
}

export const AtividadeService = {
    listar,
    excluir,
    criar,
    editar
}
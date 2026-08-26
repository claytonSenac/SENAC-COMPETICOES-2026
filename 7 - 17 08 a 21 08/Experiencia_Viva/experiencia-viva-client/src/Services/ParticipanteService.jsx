const apiUrl = "http://localhost:3002";

async function listar(){
    const res = await fetch(apiUrl + "/participante");

    if(res.status){
        return res;
    }else{
        return null;
    }
}

async function excluir(id){
    if(!id) return null;

    const res = await fetch(apiUrl + "/participante/delete/" + id,{
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

    const res = await fetch(apiUrl + "/participante/",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({participante: data})
    });

    if(res.status){
        return await res.json();
    }else{
        return null;
    }
}

async function inscrever(data){
    if(!data) return null;

    const res = await fetch(apiUrl + "/participante/inscrever",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({idAtividade: data.idAtividade, idParticipante: data.idParticipante})
    });

    if(res.status){
        return await res.json();
    }else{
        return null;
    }
}

async function editar(data){
    if(!data) return null;

    const res = await fetch(apiUrl + "/participante/"+ data.id,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({participante: data})
    });

    if(res.status){
        return await res.json();
    }else{
        return null;
    }
}

export const participanteService = {
    listar,
    excluir,
    criar,
    editar,
    inscrever
}
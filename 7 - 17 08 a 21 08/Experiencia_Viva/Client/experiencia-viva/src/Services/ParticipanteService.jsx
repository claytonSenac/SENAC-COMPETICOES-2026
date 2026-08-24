const apiUrl = "http://localhost:3002";
async function listar(){
    const res = await fetch(apiUrl + "/participante");

    if(res.ok){
        const data = await res.json();
        return data;
    }else{
        return null;
    }
}

async function excluir(id){
    if(!id) return null;
    const res = await fetch(apiUrl + "/participante/delete/"+id,{
        method:"DELETE"
    });

    if(res.ok){
        const data = await res.json();
        return data;
    }else{
        return null;
    }
}

async function criar(data){
    const res = await fetch(apiUrl + "/participante/",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({participante: data})
    });
    const result = await res.json();
    return result;
}


async function editar(data){

    const res = await fetch(apiUrl + "/participante/"+data.id,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({participante: data})
    });
    const result = await res.json();
    return result;
}


const participanteService = {
    listar,
    excluir,
    criar,
    editar
};

export default participanteService;
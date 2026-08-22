const apiUrl = "http://localhost:3002";
async function listar(){
    const res = await fetch(apiUrl + "/atividade");

    if(res.ok){
        const data = await res.json();
        return data;
    }else{
        return null;
    }
}

async function excluir(id){
    if(!id) return null;
    const res = await fetch(apiUrl + "/atividade/delete/"+id,{
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
    const res = await fetch(apiUrl + "/atividade/",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({atividade: data})
    });
    const result = await res.json();
    return result;
}


const atividadeService = {
    listar,
    excluir,
    criar
};

export default atividadeService;
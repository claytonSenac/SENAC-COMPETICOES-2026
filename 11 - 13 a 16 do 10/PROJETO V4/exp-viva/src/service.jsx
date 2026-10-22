const apiUrl = "http://localhost:3000";

async function criarParticipante(body){
    const res = await fetch(apiUrl + "/participante/criar", {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({data: body})
    });

    return await res.json();
}

async function editarParticipante(body){
    const res = await fetch(apiUrl + "/participante/editar/"+ body.id, {
        method: "PUT",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({data: body})
    });

    return await res.json();
}

async function editarParticipanteAdmin(body){
    const res = await fetch(apiUrl + "/participante/editar/admin/"+ body.id, {
        method: "PUT",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({data: body})
    });

    return await res.json();
}

async function criarAtividade(body){
    const res = await fetch(apiUrl + "/atividade/criar", {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({data: body})
    });

    return await res.json();
}

async function editarAtividade(body){
    const res = await fetch(apiUrl + "/atividade/editar/"+body.id, {
        method: "PUT",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({data: body})
    });

    return await res.json();
}


async function loginAdmin(body){
    const res = await fetch(apiUrl + "/auth/login/admin", {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({data: body})
    });

    return await res.json();
}


async function loginParticipante(body){
    const res = await fetch(apiUrl + "/auth/login/participante", {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({data: body})
    });

    return await res.json();
}



async function excluirAtividade(id){
    const res = await fetch(apiUrl + "/atividade/excluir/"+ id, {
        method: "DELETE",
        headers: {
            "Content-type": "Application/json"
        }
    });

    return await res.json();
}

async function listarDisponiveis(id){
    const res = await fetch(apiUrl + "/atividade/disponiveis/"+ id, {
        method: "GET",
        headers: {
            "Content-type": "Application/json"
        }
    });

    return await res.json();
}

async function cancelarInscricao(id){
    const res = await fetch(apiUrl + "/participante/cancelarInscricao/"+ id, {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        }
    });

    return await res.json();
}

async function redefinirSenha(id){
    const res = await fetch(apiUrl + "/participante/redefinirSenha/"+ id, {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        }
    });

    return await res.json();
}

async function inscrever(idAtividade, idParticipante){
    const res = await fetch(apiUrl + "/participante/inscrever", {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body:JSON.stringify({data: {idAtividade,idParticipante}})
    });

    return await res.json();
}

async function excluirParticipante(id){
    const res = await fetch(apiUrl + "/participante/excluir/"+ id, {
        method: "DELETE",
        headers: {
            "Content-type": "Application/json"
        }
    });

    return await res.json();
}

async function getAtividades(){
    const res = await fetch(apiUrl + "/atividade/listar", {
        method: "GET",
        headers: {
            "Content-type": "Application/json"
        },
    });

    return await res.json();
}

async function getParticipantes(){
    const res = await fetch(apiUrl + "/participante/listar", {
        method: "GET",
        headers: {
            "Content-type": "Application/json"
        },
    });

    return await res.json();
}

async function detalhesParticipante(id){
    const res = await fetch(apiUrl + "/participante/listar/detalhes/"+id, {
        method: "GET",
        headers: {
            "Content-type": "Application/json"
        },
    });

    return await res.json();
}

async function getHealth(){
    const res = await fetch(apiUrl + "/saude", {
        method: "GET",
        headers: {
            "Content-type": "Application/json"
        },
    });

    return await res.json();
}

export const service = {
    getHealth,redefinirSenha,editarAtividade,cancelarInscricao,criarParticipante,loginAdmin,loginParticipante,getAtividades,excluirAtividade,excluirParticipante,criarAtividade,getParticipantes,detalhesParticipante,listarDisponiveis,inscrever,editarParticipante,editarParticipanteAdmin
}
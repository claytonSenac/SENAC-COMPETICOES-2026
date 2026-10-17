const apiUrl = "http://localhost:3000";

async function criarParticipante(body){
    const res = await fetch(apiUrl + "/participante", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data: body})
    });
    return await res.json();
}

async function editarParticipante(body){
    const res = await fetch(apiUrl + "/participante/"+body.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data: body})
    });
    return await res.json();
}

async function editarParticipanteAdmin(body){
    const res = await fetch(apiUrl + "/participante/admin/"+body.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data: body})
    });
    return await res.json();
}

async function login(body){
    const res = await fetch(apiUrl + "/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data: body})
    });
    return await res.json();
}


async function loginParticipante(body){
    const res = await fetch(apiUrl + "/participante/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data: body})
    });
    return await res.json();
}

async function inscreverAtividade(body){
    const res = await fetch(apiUrl + "/inscricao/inscrever", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data: body})
    });
    return await res.json();
}

async function removerInscricao(id){
    const res = await fetch(apiUrl + "/inscricao/cancelar/"+id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await res.json();
}

async function getParticipanteById(id){
    const res = await fetch(apiUrl + "/participante/getById/"+id);
    return await res.json();
}

async function getAtividadesDispoinveis(id){
    const res = await fetch(apiUrl + "/atividade/disponiveis/"+id);
    return await res.json();
}

async function getAtividades(){
    const res = await fetch(apiUrl + "/atividade/");
    return await res.json();
}

async function getParticipantes(){
    const res = await fetch(apiUrl + "/participante/");
    return await res.json();
}

async function excluirAtividade(id){
    const res = await fetch(apiUrl + "/atividade/"+id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await res.json();
}

async function excluirParticipante(id){
    const res = await fetch(apiUrl + "/participante/"+id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await res.json();
}

async function criarAtividade(body){
    const res = await fetch(apiUrl + "/atividade", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data: body})
    });
    return await res.json();
}

async function editarAtividade(body){
    const res = await fetch(apiUrl + "/atividade/"+body.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data: body})
    });
    return await res.json();
}

async function redefinirSenha(body){
    const res = await fetch(apiUrl + "/participante/redefinirSenha/"+body.id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await res.json();
}

export const service = {
    criarParticipante,
    editarParticipante,
    login,
    loginParticipante,
    getParticipanteById,
    getAtividadesDispoinveis,
    inscreverAtividade,
    removerInscricao,
    excluirAtividade,
    getAtividades,
    criarAtividade,
    editarAtividade,
    excluirParticipante,
    getParticipantes,
    editarParticipanteAdmin,
    redefinirSenha
}
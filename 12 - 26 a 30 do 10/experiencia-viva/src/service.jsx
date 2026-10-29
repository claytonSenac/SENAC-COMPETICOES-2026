export const service = {
    criarParticipante,
    editarParticipante,
    editarParticipanteAdmin,
    loginAdmin,
    loginParticipante,
    listarParticipantes,
    listarAtividades,
    criarAtividade,
    editarAtividade,
    carregarParticipante,
    cancelarInscricao,
    listarAtividadesDisponiveis,
    inscreverParticipante,
    excluirParticipante,
    redefinirSenhaParticipante,
    excluirAtividade,
    getDashboard
}
const apiUrl=  "http://localhost:3000";

async function getDashboard(){
    const res = await fetch(apiUrl + "/saude", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return await res.json()
}

async function redefinirSenhaParticipante(id){
    const res = await fetch(apiUrl + "/participante/redefinirSenha/"+id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
    return await res.json()
}

async function excluirParticipante(id){
    const res = await fetch(apiUrl + "/participante/excluir/"+id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    return await res.json()
}

async function excluirAtividade(id){
    const res = await fetch(apiUrl + "/atividade/excluir/"+id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    return await res.json()
}


async function cancelarInscricao(id){
    const res = await fetch(apiUrl + "/participante/cancelarInscricao/"+id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
    return await res.json()
}

async function inscreverParticipante(idParticipante,idAtividade){
    const res = await fetch(apiUrl + "/participante/inscrever/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data:{idParticipante: idParticipante, idAtividade: idAtividade}})
    })
    return await res.json()
}

async function listarAtividadesDisponiveis(id){
    const res = await fetch(apiUrl + "/atividade/disponiveis/" + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return await res.json()
}

async function carregarParticipante(id){
    const res = await fetch(apiUrl + "/participante/listar/detalhes/"+id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return await res.json()
}


async function listarAtividades(){
    const res = await fetch(apiUrl + "/atividade/listar", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return await res.json()
}

async function listarParticipantes(){
    const res = await fetch(apiUrl + "/participante/listar", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return await res.json()
}

async function loginAdmin(body){
    const res = await fetch(apiUrl + "/auth/login/admin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data:body})
    })
    return await res.json()
}

async function loginParticipante(body){
    const res = await fetch(apiUrl + "/auth/login/participante", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data:body})
    })
    return await res.json()
}

async function criarParticipante(body){
    const res = await fetch(apiUrl + "/participante/criar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data:body})
    })
    return await res.json()
}

async function editarParticipante(body){
    const res = await fetch(apiUrl + "/participante/editar/"+body.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data:body})
    })
    return await res.json()
}

async function criarAtividade(body){
    const res = await fetch(apiUrl + "/atividade/criar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data:body})
    })
    return await res.json()
}

async function editarAtividade(body){
    const res = await fetch(apiUrl + "/atividade/editar/"+body.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data:body})
    })
    return await res.json()
}

async function editarParticipanteAdmin(body){
    const res = await fetch(apiUrl + "/participante/editar/admin/"+body.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data:body})
    })
    return await res.json()
}

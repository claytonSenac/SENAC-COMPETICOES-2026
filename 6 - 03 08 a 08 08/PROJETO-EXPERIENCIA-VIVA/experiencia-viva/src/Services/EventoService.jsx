import { apiUrl } from "../definition"

export async function proximosEventos(){
    const data = await fetch(apiUrl + "/api/evento/proximos");
    return data;
}

export async function getEventos(){
    const data = await fetch(apiUrl + "/api/evento");
    return data;
}

export async function create(e){
    const res = await fetch(apiUrl + "/api/evento",{
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "evento":e
        })
    })
    return res;
}

export async function update(e){
    const res = await fetch(apiUrl + "/api/evento/" + e.id,{
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({
            "evento":e
        })
    })
    return res;
}


export async function deleteEvento(id){
    const data = await fetch(apiUrl + "/api/evento/"+id,{
        method: "DELETE"
    });
    return data;
}


export async function inscreverEvento(idParticipante,idEvento){
    const res = await fetch(apiUrl + "/api/evento/inscrever/",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idParticipante: idParticipante,
            idEvento: idEvento
        })
    })

    return res
}

export async function getEventoEInscricoes(idEvento){
    const res = await fetch(apiUrl + "/api/evento/inscricoes/"+idEvento);
    return res;
}

export async function cancelarInscricao(idInscricao){
    const res = await fetch(apiUrl + "/api/evento/cancelarInscricao",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idInscricao: idInscricao
        })
    });

    return res;
}
import { apiUrl } from "../definition"

export async function proximosEventos(){
    const data = await fetch(apiUrl + "/api/evento/proximos");
    return data;
}

export async function getEventos(){
    const data = await fetch(apiUrl + "/api/evento");
    return data;
}

export async function create(){

}


export async function deleteEvento(){

}

export async function update(){

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


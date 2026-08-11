import { apiUrl } from "../definition";

export async function getParticipantes(){
    const response = await fetch(apiUrl+ "/api/participante");
    return response
};

export async function create(p){
    const response = await fetch(apiUrl + '/api/participante',{
        method: "POST",
        body: JSON.stringify({participante: p}),
        headers:{
            'Content-Type': "application/json"
        }
    });

    return response;
}

export async function update(p){
    const response = await fetch(apiUrl + '/api/participante/'+p.id,{
        method: "PUT",
        body: JSON.stringify({participante: p}),
        headers:{
            'Content-Type': "application/json"
        }
    });

    return response;
}

export async function deleteParticipante(p){
    const response = await fetch(apiUrl + '/api/participante/'+p,{
        method: "DELETE",
    });

    return response;
}
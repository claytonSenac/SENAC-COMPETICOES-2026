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


import { apiUrl } from "../definition"

export async function proximosEventos(){
    const data = await fetch(apiUrl + "/api/evento/proximos");
    return data;
}
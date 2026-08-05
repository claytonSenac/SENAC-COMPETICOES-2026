const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:3000";


export async function getAll() {
    try {
        const data = await fetch(apiUrl + "/genero");
        return await data.json();
    } catch (error) {
        console.log(error)
    }
}

export async function deleteAsync(id){
    try {
        const data = await fetch(apiUrl + `/genero/${id}`,{
            method: "delete",

        });
        return await data.status;
    } catch (error) {
        console.log(error)
    }
}

export async function editAsync(genero){
    try {
        const data = await fetch(apiUrl + `/genero/${genero.id}`,{
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({genero:genero})
        });
        return await data.status;
    } catch (error) {
        console.log(error)
    }}
const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:3000"

export async function getLivros(){
    try {
        const data = await fetch(apiUrl + "/livros");
        return await data.json();
    } catch (error) {
        console.log(error)
    }
}
import { apiUrl } from "../definition"

export async function getCategorias(){
    const data = await fetch(apiUrl + "/api/categoria");
    return data;
}

export async function deleteCategory(id){
    const data = await fetch(apiUrl + "/api/categoria/"+id,{
        method: "DELETE"
    });
    return data;
}
export async function updateCategory(c) {
  const response = await fetch(`${apiUrl}/api/categoria/${c.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ categoria: c })
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response;
}

export async function createCategory(c){
    const response = await fetch(`${apiUrl}/api/categoria`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({categoria:c})
    })

    return response;
}

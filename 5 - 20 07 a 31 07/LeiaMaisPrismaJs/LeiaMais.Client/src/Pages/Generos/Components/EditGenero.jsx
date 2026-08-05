import { useEffect, useState } from "react"

export default function EditGenero({generoToEdit,onSave,onClose}){
    
    const [genero,setGenero] = useState(null);
    
    useEffect(() => {
      setGenero(generoToEdit)
    },[generoToEdit]);

    if(!genero) return null;
    return(
    <>
            <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/40">
                <div className="rounded bg-white p-4 flex flex-col items-center justify-center">
                    <input 
                        type="text" 
                        name="nome" 
                        value={genero.nome || ""} 
                        onChange={(e) => {
                          setGenero(
                            (prev)=>({
                                ...prev,
                                [e.target.name]: e.target.value
                            })
                          )
                        }} 
                        />
                    <div className="flex gap-4">
                        <button
                            onClick={() => onClose() }
                            className="rounded cursor-pointer bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                        >
                            Fechar
                        </button>
                        <button
                            onClick={() => onSave(genero) }
                            className="rounded cursor-pointer bg-green-500 px-3 py-1 text-white hover:bg-green-600"
                        >
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
    </>)
}
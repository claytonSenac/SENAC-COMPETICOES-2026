import { useEffect, useState } from "react"
import { deleteAsync, editAsync, getAll } from "./service/generoService";
import ConfirmModal from "../../Common/confirmModal";
import EditGenero from "./Components/editGenero";

export default function Generos(){
    const [generos,setGeneros] = useState([]);
    const [selectedGenero, setSelectedGenero] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [idToDelete,setIdToDelete] = useState(null)
    const [generoToEdit,setGeneroToEdit] = useState(null)

    
    useEffect(() => {
        setIsLoading(true)
        const loadLivros = async () => {
            const data = await getAll();
            if(data !=null){
                setGeneros([...data])
            }
        }
        loadLivros()
        setIsLoading(false);
    },[]);

    function onChangeInput(e){
        setGeneroToEdit({
            ...generoToEdit,
            nome: e.target.value,
        })
    }

    async function handleDeleteGenero(){
        if(!idToDelete) return null;
        setIsLoading(true)
        const res = await deleteAsync(idToDelete);

        if(res == 200){
            const data = await getAll();
            if(data !=null){
                setGeneros([...data])
            }
        }
        setIdToDelete(null)
        setIsLoading(false)
    }

    async function handleEditGenero(genero){
        setIsLoading(true)
        const res = await editAsync(genero);

        if(res == 200){
            const data = await getAll();
            if(data !=null){
                setGeneros([...data])
            }
        }
        setGeneroToEdit(null)
        setIsLoading(false)
    }

    return (
        <>
            <section className="w-full flex flex-col gap-4 p-4 items-center">
                <h1 className="text-4xl font-bold">Lista de Gêneros</h1>
                <div className="w-full max-h-[70vh] overflow-y-scroll shadow  grid gap-4 grid-cols-3 xl:grid-cols-4 bg-blue-200 p-4 rounded-lg ">
                    {generos.map((g)=>(
                        <li key={g.id} className="bg-background p-4 rounded-md list-none flex flex-col gap-2">
                            <h2 className="text-2xl">
                                <strong>Gênero: </strong>{g.nome ?? ""}
                            </h2>
                            <div className="flex gap-4">
                                <button 
                                    disabled={selectedGenero != null || isLoading}
                                    className="bg-blue-300 cursor-pointer text-white font-bold rounded-md p-2 
                                    disabled:cursor-not-allowed disabled:opacity-20"
                                    onClick={() => {
                                     setGeneroToEdit(g)
                                    }}
                                >Editar</button>
                                <button 
                                    disabled={selectedGenero != null || isLoading}
                                    className="bg-red-300 cursor-pointer text-white font-bold rounded-md p-2 
                                    disabled:cursor-not-allowed disabled:opacity-20"
                                    onClick={() => {
                                     setIdToDelete(g.id)
                                    }}
                                >Excluir</button>
                            </div>
                        </li>
                    ))}
                </div>
            </section>
            <ConfirmModal 
                onCancel={() => {
                  setIdToDelete(null)
                }}
                onConfirm={async() => {
                    await handleDeleteGenero()
                }}
                open={idToDelete}
            />
            { generoToEdit && (
                <EditGenero 
                    generoToEdit={generoToEdit}
                    onClose={() => {
                      setGeneroToEdit(null)
                    }}
                    onSave={async(e) => {
                        await handleEditGenero(e)
                    }}
                />
            )}

        </>
    )
}
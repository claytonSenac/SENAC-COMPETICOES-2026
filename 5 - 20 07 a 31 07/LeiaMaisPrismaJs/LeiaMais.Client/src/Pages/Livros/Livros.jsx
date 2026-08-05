import { useEffect, useState } from "react";
import { deleteLivro, getLivros } from "./service/livroService";
import { formatDate } from "./service/utils";
import { DetailsModal } from "./Components/detailsModal";
import ConfirmModal from "../../Common/confirmModal";


const LivroPage = () => {
    const [livros,setLivros] = useState([]);
    const [selectedLivro, setSelectedLivro] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [idToDelete,setIdToDelete] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        const loadLivros = async () => {
            const data = await getLivros();
            if(data !=null){
                setLivros([...data])
            }
        }
        loadLivros()
        setIsLoading(false);
    },[])

    async function handleDeleteLivro(){
        if(!idToDelete) return null;
        setIsLoading(true);
        const res = await deleteLivro(idToDelete);
        if(res == 200){
            const data = await getLivros();
            if(data !=null){
                setLivros([...data])
            }
            setIdToDelete(null)
        }
        setIsLoading(false)
    }

    return(
        <>
            <section className="w-full flex flex-col gap-4 p-4 items-center">
                <h1 className="text-4xl font-bold">Lista de Livros</h1>
                <div className="w-full max-h-[70vh] overflow-y-scroll shadow  grid gap-4 grid-cols-2 xl:grid-cols-3 bg-blue-200 p-4 rounded-lg ">
                    {livros.map((l)=>(
                        <li className="bg-background p-4 rounded-md list-none flex flex-col gap-2">
                            <h2 className="text-2xl">
                                <strong>Livro: </strong>{l.nome ?? ""}
                            </h2>
                            <p>
                                <strong>Editora: </strong>{l.editora?.nome  ?? ""}
                            </p>
                            <p>
                                <strong>Gênero: </strong>{l.generolivro?.nome}
                            </p>
                            <p>
                                <strong>Páginas: </strong>{l.numPaginas}
                            </p>
                            <p>
                                <strong>Autor: </strong>{l.autor?.nome}
                            </p>
                            <div className="flex gap-4">
                                <button 
                                    disabled={selectedLivro != null || isLoading}
                                    className="bg-accent cursor-pointer text-white font-bold rounded-md p-2 
                                    disabled:cursor-not-allowed disabled:opacity-20"
                                    onClick={()=> setSelectedLivro(l)}
                                >Detalhes</button>
                                <button 
                                    disabled={selectedLivro != null || isLoading}
                                    className="bg-red-300 cursor-pointer text-white font-bold rounded-md p-2 
                                    disabled:cursor-not-allowed disabled:opacity-20"
                                    onClick={() => {
                                     setIdToDelete(l.id)
                                    }}
                                >Excluir</button>
                            </div>
                        </li>
                    ))}
                </div>
            </section>

            <DetailsModal 
                onClose={ () => {
                  setSelectedLivro(null)
                }}
                selectedLivro={selectedLivro}
            />

            <ConfirmModal
                onCancel={()=> setIdToDelete(null)}
                open={idToDelete}
                onConfirm={async() => {
                  await handleDeleteLivro()
                }}
            />

              
        </>
    )
}

export default LivroPage;
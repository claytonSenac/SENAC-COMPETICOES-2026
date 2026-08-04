import { useEffect, useState } from "react";
import { getLivros } from "./service/livroService";


const LivroPage = ()=> {
    const [livros,setLivros] = useState([]);

    useEffect(() => {
        const loadLivros = async () => {
            const data = await getLivros();
            if(data !=null){
                setLivros([...data])
            }
        }
        loadLivros()
    },[])

    return(

        <>
            <section className="w-full p-24">
                <h2>Lista de Livros</h2>
                <div className="w-full p-8 flex wrap-break-word flex-wrap gap-4 bg-accent rounded-xl">
                    {livros.map((l)=>(
                        <li className="bg-background p-4 rounded-md list-none">
                            <h2>{l.nome ?? ""}</h2>
                            <p><strong>Editora:</strong>{l.editora?.nome  ?? ""}</p>
                            <p><strong>Gênero:</strong>{l.generolivro?.nome}</p>
                            <p><strong>Criado em:</strong>{l.dataLancamento}</p>
                            <p><strong>ISBN:</strong>{l.isbn}</p>
                            <p><strong>Páginas:</strong>{l.numPaginas}</p>
                        </li>
                    ))}
                </div>
            </section>
        </>
    )
}

export default LivroPage;
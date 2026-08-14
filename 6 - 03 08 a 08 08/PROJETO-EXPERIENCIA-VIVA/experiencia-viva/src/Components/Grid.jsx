import { useEffect, useState } from "react";

export default function Grid({columns, rows, actions}){
    const [page,setPage] = useState(1);
    const itensPage = 8;
    const [data,setData] = useState([]);

    useEffect(() => {
        const inicio = (page - 1 ) * itensPage;
        const fim =  page * itensPage;
        const list = rows.slice(inicio,fim);
        setData([...list])
    },[page,rows]);

    function nextPage(){
        setPage(page + 1)
    }

    function prevPage(){
        if(page == 1) return;
        setPage(page - 1)
    }

    return(
        <>
            <div className="overflow-x-auto mb-4">
                <div className="border p-4 flex gap-4 items-center justify-center">
                    <i className="bi bi-arrow-left p-2 bg-accent rounded text-white text-2xl hover:bg-secondary cursor-pointer transition-all" onClick={prevPage}></i>
                    <p className="text-xl font-bold">Pagina {page}</p>
                    <i className="bi bi-arrow-right p-2 bg-accent rounded text-white text-2xl hover:bg-secondary cursor-pointer transition-all" onClick={nextPage}></i>
                </div>
                <table className="w-full border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            {columns.map((c)=>(
                                <th className="p-3 text-left" key={c.value}>{c.label}</th>
                            ))}
                            {actions ? <th>Ações</th> : null}
                        </tr>
                    </thead>

                    <tbody>
                        {data.length > 0 ? (
                            <>
                            {data.map((r) => (
                                <tr
                                    key={r.id}
                                    className="border-b hover:bg-gray-50"
                                >
                                    {columns.map((c,i)=>{
                                        const val = r[c.value]; // r.nome
                                        
                                        const value = c.render ? c.render(val) : val;
                                        return (
                                            <td key={i}>
                                                {value}
                                            </td>
                                        )
                                    })}
                                    {actions ? (
                                    <>
                                        <td>
                                            {actions(r)}
                                        </td>
                                        </>                 
                                    ) : null}
                                    
                                </tr>
                                    
                                ))}          
                            </>
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-center p-6 text-gray-500"
                                >
                                    Sem Dados.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
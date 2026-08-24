export default function Grid({columns, actions,rows}){

    if(!columns) return null;
    if(!rows) return null;
    return (
        <>
            <div className="w-full h-full flex flex-col gap-4 items-center">
                <table className="">
                    <thead>
                        <tr className="border border-gray-500 bg-gray-200">
                            {columns.map((c)=>(
                                <th key={c.nome}>{c.label}</th>
                            ))}
                            {actions && (<th>Ações</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {/* {rows.length == 0 && (
                            <>
                                <tr className="text-center">Sem dados</tr>
                            </>
                        )} */}
                        
                        {rows.map((r,i)=>(
                            <tr key={i}>
                                {columns.map((c,i)=>{
                                    if(c.render) {
                                        return (
                                            <td key={i}>{c.render(r[c.nome])}</td>
                                        )
                                    }
                                    return (
                                        <td key={i}>{r[c.nome]}</td>
                                    )
                                })}
                                {actions && (
                                    <td>{actions(r)}</td>
                                )}
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}
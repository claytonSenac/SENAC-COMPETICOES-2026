export default function Grid({columns,rows,actions}){
    if(!columns) return null;

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((c)=>(
                            <th className="p-2 bg-gray-300" key={c.nome}>{c.label}</th>
                        ))}
                        {actions != null && (
                            <th className="p-2 bg-gray-500 text-white">Ações</th>
                        )}
                    </tr>
                </thead>
                <tbody>


                    {rows.length > 0 && rows && (
                        <>
                            {rows.map((r)=>(
                                
                                <tr key={r.id}>

                                    {columns.map((c,i)=>{
                                        if(c.render){
                                            return <td key={c+i} className="p-2">{c.render(r[c.nome])}</td>
                                        }
                                        return (
                                            <td key={c+i} className="p-2">
                                                {r[c.nome]}
                                            </td>
                                        )
                                    })}
                                    {actions && (
                                        <td>
                                            {actions(r)}
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </>
                    )}
                </tbody>
            </table>
        </div>
    )
}
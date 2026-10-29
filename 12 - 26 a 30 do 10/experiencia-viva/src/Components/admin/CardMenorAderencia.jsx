export function CardMenorAderencia({p}){
    if(!p) return null;
    return(
        <>
            <li className="w-full list-none bg-white p-4 rounded flex flex-col gap-2">
                <div className="w-full flex justify-between items-center gap-2">
                    <i className="bi bi-calendar bg-blue-400 p-2 rounded text-white"></i>
                    <p className="bg-blue-400 text-white p-2 rounded"><strong>Vagas: </strong>{p.vagas - p.vagasRestantes} / {p.vagas}</p>
                </div>
                <div className="w-full flex justify-between text-xl gap-4">
                    <p><strong>Nome:</strong> {p.nome ?? "-"}</p>
                    <p><strong>Data:</strong> {p.dataFormatada} as {p.Horario}</p>
                    <p><strong>Aderencia:</strong> {p.aderencia}%</p>
                </div>
            </li>
        </>
    )
}
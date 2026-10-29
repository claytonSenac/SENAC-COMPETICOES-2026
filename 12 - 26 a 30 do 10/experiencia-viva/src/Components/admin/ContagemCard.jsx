export function ContagemCard({data}){
    if(!data )return null;
    return(
        <>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="w-full list-none bg-blue-100 p-4 rounded flex flex-col gap-2">
                    <div className="w-full flex justify-between items-center gap-2">
                        <i className="bi bi-calendar bg-blue-400 p-2 rounded text-white"></i>
                    </div>
                    <div className="flex justify-between items-center">
                        <h2>Atividades:</h2>
                        <p className="bg-white rounded p-4 text-xl size-14 text-center font-semibold">{data?.atividades ?? 0}</p>
                    </div>
                </li>
                <li className="w-full list-none bg-blue-100 p-4 rounded flex flex-col gap-2">
                    <div className="w-full flex justify-between items-center gap-2">
                        <i className="bi bi-person-arms-up bg-blue-400 p-2 rounded text-white"></i>
                    </div>
                    <div className="flex justify-between items-center">
                        <h2>Participantes:</h2>
                        <p className="bg-white rounded p-4 text-xl size-14 text-center font-semibold">{data?.participantes ?? 0}</p>
                    </div>
                </li>
                <li className="w-full list-none bg-blue-100 p-4 rounded flex flex-col gap-2">
                    <div className="w-full flex justify-between items-center gap-2">
                        <i className="bi bi-people-fill bg-blue-400 p-2 rounded text-white"></i>
                    </div>
                    <div className="flex justify-between items-center">
                        <h2>Inscritos:</h2>
                        <p className="bg-white rounded p-4 text-xl size-14 text-center font-semibold">{data?.inscritos ?? 0}</p>
                    </div>
                </li>
            </div>

        </>
    )
}
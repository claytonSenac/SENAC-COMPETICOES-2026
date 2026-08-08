import { useEffect, useState } from "react"
import { proximosEventos } from "../../Services/EventoService";
import formatIso from "../../Services/Utils/formatarDateIso";

export default function Home(){
    const [nextEvents,setNextEvents] = useState([]);
    useEffect(() => {
        const loadData = async ()=>{
            const events = await proximosEventos();
            if(events.status == 200){
                const data = await events.json();
                setNextEvents([...data?.data ?? []])
            }
        };

        loadData();
    },[])
    return (
        <>
            <div className="w-full mx-auto flex flex-col items-center justify-center gap-4 p-4 overflow-hidden">
                <h1 className="text-3xl text-center">Experiencia Viva</h1>
                <div className="lg:max-w-[80%] mx-auto bg-secondary flex flex-col p-8 rounded  items-center gap-4">
                    <h2 className="text-white text-2xl text-center">Proximos Eventos:</h2>
                    <div className="grid lg:grid-cols-4 lg:grid-rows-1 gap-4">
                        {nextEvents.map((e)=>(
                            <>
                                <li className="list-none bg-white p-4">
                                   <h3 className="text-center font-medium">{e.nome ?? ""}</h3> 
                                   <p className="text-center">{e.vagas ?? ""} Vagas</p> 
                                   <p>{formatIso(e.dataEvento) ?? ""}</p> 
                                    <hr className="mt-2"/> 
                                </li>
                            </>
                        ))}
                    </div>
                </div>
                <h2 className="text-center font-bold text-2xl">Gerenciamento</h2>
                <div className="w-xl bg-primary text-white flex justify-between mx-auto gap-4 p-4 rounded">
                    <li className="list-none font-semibold bg-accent p-4 gap-8 flex flex-col rounded cursor-pointer">
                        <h2 className="text-2xl">Eventos</h2>
                    </li>
                    <li className="list-none font-semibold bg-accent p-4 gap-8 flex flex-col rounded cursor-pointer">
                        <h2 className="text-2xl">Participantes</h2>
                    </li>
                    <li className="list-none font-semibold bg-accent p-4 gap-8 flex flex-col rounded cursor-pointer">
                        <h2 className="text-2xl">Categorias</h2>
                    </li>
                </div>
            </div>
        </>
    )
}
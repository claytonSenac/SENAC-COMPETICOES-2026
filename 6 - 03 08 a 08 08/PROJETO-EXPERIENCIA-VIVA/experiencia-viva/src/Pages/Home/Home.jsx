import { useEffect, useState } from "react"
import { getEventos, inscreverEvento, proximosEventos } from "../../Services/EventoService";
import formatIso from "../../Services/Utils/formatarDateIso";
import { getParticipantes } from "../../Services/ParticipanteService";

export default function Home(){
    const [nextEvents,setNextEvents] = useState([]);
    const [modalInscrever,setModalInscrever] = useState(false)
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
                                <li key={e.id} className="list-none bg-white p-4">
                                   <h3 className="text-center font-medium">{e.nome ?? ""}</h3> 
                                   <p className="text-center">{e.vagas ?? ""} Vagas</p> 
                                   <p>{formatIso(e.dataEvento) ?? ""}</p> 
                                    <hr className="mt-2"/> 
                                </li>
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
                <button onClick={() => {
                  setModalInscrever(true)
                }} className="bg-accent text-white p-2 rounded font-semibold cursor-pointer hover:bg-primary transition-all duration-300">Inscrever Participante</button>
            </div>

            <ModalInscricaoEvento 
                open={modalInscrever}
                onClose={
                    () => {
                      setModalInscrever(false);
                    }
                }
            />
        </>
    )
}

function ModalInscricaoEvento({open,onClose}){
    if(!open) return null;
    const [participantes, setParticipantes ]= useState([]);
    const [eventos, setEventos ]= useState([]);
    const [participanteSelecionado, setParticipanteSelecionado] = useState(null);
    const [eventoSelecionado, setEventoSelecionado] = useState(null);

    const [textFilter,setTextFIlter] = useState("")

    useEffect(() => {
      const loadData = async ( )=>{
        const resParticipantes = await getParticipantes();
        const resEventos = await getEventos();

        if(resParticipantes.ok && resEventos.ok){
            const data = await resParticipantes.json()
            setParticipantes([...data.data])

            const dataEventos = await resEventos.json()
            setEventos([...dataEventos.data])
        }
      }
      loadData()
    },[])

    function handleSelectParticipante(e){
       setParticipanteSelecionado(e.target.value);
    }
    function handleSelectEvento(e){
       setEventoSelecionado(e.target.value);
   }
   
   async function handleInscreverEvento(){
    if(!participanteSelecionado || !eventoSelecionado ) return null;

        const res = await inscreverEvento(participanteSelecionado,eventoSelecionado);

        if(res.ok){
            alert("inscricao feita");
            onClose();
            setEventoSelecionado(null)
            setParticipanteSelecionado(null)
        }else{
            alert("Participante ja inscrito");
        }
   }

    function handleInputChange(e){
        setTextFIlter(e.target.value)
    }

    useEffect(() => {
        const filtered = participantes.filter(p=> p.nome.includes(textFilter.toLowerCase()));

        setParticipantes([...filtered])
        console.log(filtered)
    },[textFilter])
    
    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center bg-black/40 top-0 left-0 fixed">
                <div className="bg-white p-8 rounded shadow flex flex-col gap-4">
                    <div className="flex gap-4 justify-between items-center">
                        <h2 className="text-2xl text-center font-bold">Inscrever Evento</h2>
                        <button onClick={() => {
                          onClose()
                        }} className="bg-red-400 p-2 text-white rounded cursor-pointer">Fechar</button>
                    </div>
                    {participantes.length>0  && (
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold">Selecione um Participante</h2>
                            <input className="border border-gray-400 rounded p-2" disabled={participanteSelecionado} type="text" placeholder="BUSCA POR PARTICIPANTES" value={textFilter} onChange={handleInputChange} />
                            
                            <select className="border border-gray-500 rounded" onChange={handleSelectParticipante} defaultValue="">
                                <option value="">SELECIONE UM PARTICIPANTE</option>
                                {participantes.map((p)=>(
                                    <option value={p.id}>{p.nome}</option>
                                ))}
                            </select>
                        </div>

                    )}

                    {participanteSelecionado && (
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold">Selecione um Evento</h2>

                            <select className="border border-gray-500 rounded" onChange={handleSelectEvento} defaultValue="">
                                <option value="">SELECIONE UM EVENTO</option>

                                {eventos.map((p)=>(
                                    <option value={p.id}>{p.nome}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {participanteSelecionado && eventoSelecionado && (
                        <button onClick={
                            async () => {
                                await handleInscreverEvento()
                            }
                        } className="p-2 bg-accent text-white text-xl rounded cursor-pointer">Inscrever Participante</button>
                    )}
                </div>

            </div>
        </>
    )
}
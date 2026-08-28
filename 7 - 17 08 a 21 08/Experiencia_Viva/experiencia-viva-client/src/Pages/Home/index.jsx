import { useEffect, useState } from "react"
import { AtividadeService } from "../../Services/AtividadeService";
import { participanteService } from "../../Services/ParticipanteService";
import formatDateIso from "../../Shared/formatDateIso";
import formatTelefone from "../../Shared/formatTelefone";

export default function Home(){
    const [modalInscricao, setModalInscricao] = useState(false);
    const [atividades, setAtividades] = useState([])
    const [participantes, setParticipantes] = useState([]);
    const [formInscricao, setFormInscricao] = useState({idAtividade:"", idParticipante: ""});
    const [proximosEventos, setProximosEventos] = useState([]);

    const [filtroAtividade, setFiltroAtividade] = useState("");

    const [filtroParticipante , setFiltroParticipante] = useState("");

    const [atividadesFiltradas, setAtividadesFiltradas] =  useState([]);
    const [participantesFiltradas, setParticipantesFiltradas] =  useState([]);

    useEffect(() => {
      loadData()
    },[])

    async function handleInscrever(){
        const res = await participanteService.inscrever(formInscricao);
        if(res){
           alert(res.message);
           setModalInscricao(false);
           setFormInscricao({idAtividade:"", idParticipante:""})
        }
    }

    async function loadData(){
        const resAtividades = await AtividadeService.listar();
        const resParticipantes = await participanteService.listar();
        const resProximos = await AtividadeService.listarProximos();

        if(resAtividades && resParticipantes){
            const dataAtividade = await resAtividades.json();
            const dataParticipantes = await resParticipantes.json();

            setAtividades([...dataAtividade.data])
            setParticipantes([...dataParticipantes.data]);

            setAtividadesFiltradas([...dataAtividade.data])
            setParticipantesFiltradas([...dataParticipantes.data])
        }

        if(resProximos){
            const json = await resProximos.json()
            setProximosEventos([...json.data])
        }
    }

    useEffect(() => {
      const filtered = atividades.filter(a => a?.nome.toLowerCase().trim().includes(filtroAtividade));

      setAtividadesFiltradas([...filtered])
    },[filtroAtividade])

    useEffect(() => {
      const filtered = participantes.filter(a => a?.nome.toLowerCase().trim().includes(filtroParticipante) || a?.telefone.trim().includes(filtroParticipante));

      setAtividadesFiltradas([...filtered])
    },[filtroParticipante])

    return(
        <>
            <div className="w-full h-full flex flex-col items-center gap-4 p-8">
                <h1 className="text-3xl text-blue-600 font-semibold">Experiencia Viva</h1>
                <p className="text-gray-500">Dashboard central com proximos eventos</p>

                {proximosEventos && (
                    <div>
                        <h2 className="text-2xl font-semibold text-center mb-4 text-purple-400">Proximos Eventos</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-8 border rounded bg-purple-500 shadow">
                            {proximosEventos.map((e)=>(
                                <div className="min-h-14 rounded bg-white shadow p-4 flex flex-col gap-2 items-center">
                                    <h2 className="font-semibold text-xl border-b border-blue-500">{e?.nome ?? "-"}</h2>
                                    <p className="text-blue-500 font-bold wrap-break-word">{formatDateIso(e?.dataEvento) ?? "-"}</p>
                                    <h2 className="text-sm text-gray-500 wrap-break-word">{e?.descricao ?? "-"}</h2>
                                    <div className="flex  p-2 gap-2 items-center  border rounded bg-blue-500 text-white">
                                        <p className="text-center">{e?.vagas ?? "0"} / {e?.quantidade_vagas}</p>
                                        <p className="font-bold">Vagas</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="">
                    <button onClick={() => {
                      setModalInscricao(true)
                    }} className="p-4 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600">Inscrever Agora!</button>
                </div>


                {modalInscricao && (
                    <>
                         <div className="bg-black/40 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
                            <div className="bg-white p-8 max-w-xs rounded flex flex-col gap-4">
                                <h2 className="text-2xl text-blue-500 font-semibold text-center">Fazer inscrição</h2>
                                <div className="flex flex-col gap-4">
                                    <p className="text-xl font-semibold">Selecione uma Atividade</p>

                                    <input type="text" className="border rounded" placeholder="Filtre por Atividade"  value={filtroAtividade} onChange={(e) => {
                                      setFiltroAtividade(e.target.value)
                                    }}/>

                                    <select className="border rounded" onChange={(e) => {
                                    setFormInscricao((prev)=>({
                                        ...prev,
                                        idAtividade: e.target.value
                                    }))
                                    }}>
                                        <option value="">Selecione uma atividade</option>
                                        {atividadesFiltradas.map((a)=>(
                                            <option value={a.id}>{a.nome}</option>
                                        ))}
                                    </select>
                                    <p className="text-xl font-semibold">Selecione um Participante</p>
                                    <input type="text" className="border rounded" placeholder="Filtre por Participante"  value={filtroParticipante} onChange={(e) => {
                                      setFiltroParticipante(e.target.value)
                                    }}/>
                                    <select className="border rounded" onChange={(e) => {
                                    setFormInscricao((prev)=>({
                                        ...prev,
                                        idParticipante: e.target.value
                                    }))
                                    }}>
                                        <option value="">Selecione uma Participante</option>
                                        {participantesFiltradas.map((a)=>(
                                            <option className="flex flex-col" value={a.id}>
                                                <p>{a.nome}</p>
                                            </option>
                                        ))}d
                                    </select>
                                    <div className="flex gap-2 justify-between">
                                        <button onClick={async () => {
                                            await handleInscrever()
                                        }} className="bg-blue-400 p-2 rounded cursor-pointer"
                                            disabled={formInscricao.idAtividade == "" || formInscricao.idParticipante == ""}
                                        >Inscrever</button>
                                        <button onClick={() => {
                                        setModalInscricao(false)
                                        }} className="bg-red-400 p-2 rounded cursor-pointer">Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
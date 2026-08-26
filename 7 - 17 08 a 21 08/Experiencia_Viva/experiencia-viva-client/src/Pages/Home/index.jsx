import { useEffect, useState } from "react"
import { AtividadeService } from "../../Services/AtividadeService";
import { participanteService } from "../../Services/ParticipanteService";

export default function Home(){
    const [modalInscricao, setModalInscricao] = useState(false);
    const [atividades, setAtividades] = useState([])
    const [participantes, setParticipantes] = useState([]);
    const [formInscricao, setFormInscricao] = useState({idAtividade:"", idParticipante: ""});

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

        if(resAtividades && resParticipantes){
            const dataAtividade = await resAtividades.json();
            const dataParticipantes = await resParticipantes.json();

            setAtividades([...dataAtividade.data])
            setParticipantes([...dataParticipantes.data]);

        }
    }

    return(
        <>
            <div className="w-full h-full flex flex-col items-center gap-4">
                <h1 className="text-xl">Dashboard</h1>
                <div className="">
                    <button onClick={() => {
                      setModalInscricao(true)
                    }} className="p-4 rounded bg-blue-500 text-white hover:bg-blue-600">Realizar Inscrição</button>
                </div>


                {modalInscricao && (
                    <>
                         <div className="bg-black/40 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
                            <div className="bg-white p-8 max-w-xs rounded flex flex-col gap-4">
                                <h2 className="text-xl font-semibold">Fazer inscrição</h2>
                                <div className="flex flex-col gap-4">
                                    <p className="text-xl font-semibold">Selecione uma Atividade</p>
                                    <select className="border rounded" onChange={(e) => {
                                    setFormInscricao((prev)=>({
                                        ...prev,
                                        idAtividade: e.target.value
                                    }))
                                    }}>
                                        <option value="">Selecione uma atividade</option>
                                        {atividades.map((a)=>(
                                            <option value={a.id}>{a.nome}</option>
                                        ))}
                                    </select>

                                    <p className="text-xl font-semibold">Selecione um Participante</p>
                                    <select className="border rounded" onChange={(e) => {
                                    setFormInscricao((prev)=>({
                                        ...prev,
                                        idParticipante: e.target.value
                                    }))
                                    }}>
                                        <option value="">Selecione uma Participante</option>
                                        {participantes.map((a)=>(
                                            <option value={a.id}>{a.nome}</option>
                                        ))}
                                    </select>
                                    <div className="flex gap-2">
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
import { useEffect, useState } from "react"
import participanteService from "../../Services/ParticipanteService";
import atividadeService from "../../Services/AtividadeService";

export default function Dashboard(){

    const [selectInscricao,setSelectInscricao] = useState(false);
    const [participante,setParticipante] = useState([]);
    const [atividade,setAtividade] = useState([]);

    const [formInscricao, setFormInscricao] = useState({idParticipante:"", idAtividade: ""});

    useEffect(() => {
      const loadData = async () => {
        const participantesRes = await participanteService.listar();
        const atividadesRes = await atividadeService.listar();

        if(participantesRes && atividadesRes){
            setAtividade([...atividadesRes.data])
            setParticipante([...participantesRes.data])
        }
      }
      loadData();
    },[]);

    async function handleSalvarInscricao(){
       const res = await participanteService.inscrever(formInscricao)
        
        if(res.code == 201 || res.code == 200){
            alert(res.message ?? "Sucesso");
            setSelectInscricao(false);
        }else{
            alert(res.message ?? "Erro tente novamente")
        }
    }

    return (
        <div>
            <h1>
                Dashboard
            </h1>
            <div className="max-w-2xl mx-auto p-12 border border-blue-500 rounded  flex gap-4 flex-col items-center">
                <h2 className="text-xl text-center font-bold">Cadastre Participantes</h2>
                <button 
                 onClick={() => {
                   setSelectInscricao(true)
                 }}
                 
                className="cursor-pointer p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Realizar Inscrição</button>
            </div>
            {selectInscricao && atividade.length> 0 && participante.length> 0 && (

                <div className="bg-black/40 w-screen h-screen fixed z-20 top-0 left-0 flex flex-col items-center justify-center">
                 <div className="bg-white p-8 rounded flex flex-col items-center gap-4">
                    <h2 className="text-2xl font-semibold">Realizar Inscrição</h2>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl">Atividade</h3>
                        <select className="border border-gray-500 rounded" name="atividade"  onChange={(e) => {
                          setFormInscricao((prev)=>({
                            ...prev,
                            idAtividade: e.target.value
                          }))
                        }}>
                            <option value={""}>Selecione uma Atividade</option>
                            {atividade.map((a)=>(
                                <option value={a.id}>{a.nome}</option>
                            ))}
                        </select>
                        <h3 className="text-xl">Participante</h3>
                        <select className="border border-gray-500 rounded" name="participante" onChange={(e) => {
                          setFormInscricao((prev)=>({
                            ...prev,
                            idParticipante: e.target.value
                          }))
                        }}>
                        <option value={""}>Selecione uma Atividade</option>

                            {participante.map((a)=>(
                                <option value={a.id}>{a.nome}</option>
                            ))}
                        </select>
                        <div className="flex gap-4 items-center justify-between">
                            <button  className="p-2 rounded cursor-pointer bg-blue-400"
                                disabled={formInscricao.idAtividade == "" || formInscricao.idParticipante ==""}
                                onClick={async () => {
                                  await handleSalvarInscricao()
                                }}
                            >Salvar</button>
                            <button onClick={() => {
                              setSelectInscricao(false)
                            }} className="p-2 rounded cursor-pointer bg-red-400">Cancelar</button>
                        </div>
                    </div>
                 </div>
            </div>
            )}
        </div>
    )
}
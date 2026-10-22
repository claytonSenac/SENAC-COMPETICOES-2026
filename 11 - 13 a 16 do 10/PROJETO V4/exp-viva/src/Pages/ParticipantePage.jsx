import { useEffect, useState } from "react";
import FormParticipante from "../Components/FormParticipante";
import { useParams } from "react-router-dom";
import { service } from "../service";
import Button from "../Components/Button";
import ConfirmModal from "../Components/ConfirmModal";
import { toast } from "react-toastify";

export default function ParticipantePage(){
    const [p,setP] = useState(null);
    const [confirm,setConfirm] = useState({open:false,title:"",onConfirm:() => {}});
    const [proximasAtividades,setProximasAtividades] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const load = async () => {
          await loadDetalhes()
        }
        load();
    },[id]);

    async function loadDetalhes(){

        const res = await service.detalhesParticipante(id);

        if(res){
            setP({...res.data});
        }

        await loadProximasAtividades();
    }

    async function loadProximasAtividades(){
        const res = await service.listarDisponiveis(id);

        if(res){
            setProximasAtividades(res.data);
        }
    }

    async function handleCancelarInscricao(id){
        const res = await service.cancelarInscricao(id);
        if(res.code == 200){
            toast.info(res.text);
            await loadDetalhes()
            setConfirm({open:false,title:"",onConfirm:null})
            return;
        }else{
            toast.error("erro ao cancelar");
            setConfirm({open:false,title:"",onConfirm:null})
            return;
        }
    }

    async function handleInscrever(idAtividade){
        const res = await service.inscrever(idAtividade,id);
        if(res.code == 200){
            toast.info(res.text);
            await loadDetalhes()
            setConfirm({open:false,title:"",onConfirm:null})
            return;
        }else{
            toast.error(res.text ?? "erro ao inscrever");
            setConfirm({open:false,title:"",onConfirm:null})
            return;
        }
    }

    if(!p) return null;

    return(
        <>
             <div className="w-full h-full flex flex-col flex-1 items-center justify-center p-4">
                <div className="w-full lg:max-w-10/12 bg-white rounded-2xl min-h-80">
                    <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4 p-4">
                        <div>
                            <FormParticipante title={p.Nome ?? "Participante"} initialData={p} onSaved={async () => {
                                await loadDetalhes()
                            }} isAdmin={false}/>
                        </div>
                        <div className="border-2 border-blue-400 rounded-2xl p-4 flex flex-col gap-4">
                            <h2 className="subTitle"> Inscrições:</h2>
                            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {p.inscricao.map((i)=>(
                                    <InscricaoItem a={i} handleExcluir={() => {
                                     setConfirm({open:true,title:"Cancelar Inscrição", onConfirm:async () => {
                                        await handleCancelarInscricao(i.Id);
                                     }})
                                    }}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-4">
                        <div className="border-2 border-blue-400 rounded-2xl p-4 flex flex-col gap-4">
                            <h2 className="subTitle"> Proximas Atividades:</h2>
                            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {proximasAtividades.map((a)=>(
                                    <AtividadeParticipanteItem a={a} handleInscrever={() => {
                                     setConfirm({open:true,title:"Inscrever na Atividade", onConfirm:async () => {
                                        await handleInscrever(a.Id);
                                     }})
                                    }}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <ConfirmModal open={confirm.open} onCancel={() => {
                  setConfirm({open:false,title:""});
                }} onConfirm={confirm.onConfirm} title={confirm.title}/>
            </div>
        </>
    )
}

function InscricaoItem({a,handleExcluir}){
    const date = new Date(a.atividade.Data.slice(0,10));
    const dataFormatada = `${date.getDate() + 1}/${date.getMonth() + 1}/${date.getFullYear()}`
    return(
        <>
            <li className="list-none w-full min-h-64 bg-blue-900 p-2 rounded shadow items-center flex flex-col justify-between text-white gap-4">
                <h2 className="text-white text-xl">{a.atividade.Nome ?? "-"}</h2>
                <p>{a.atividade.Descricao ?? '-'}</p>
                <p className="bg-gray-50 text-gray-700 h-8 w-14 text-center rounded flex items-center justify-center">{a.atividade.VagasRestantes} / {a.atividade.Vagas}</p>
                <p>{dataFormatada} as {a.atividade.Horario}</p>
                <div className="w-full flex flex-col gap-2">
                    <Button text={
                        <i class="bi bi-trash-fill not-italic p-2 text-xl">Cancelar Inscrição</i> 
                    } bgColor="bg-red-400" onClick={handleExcluir} />
                </div>
            </li>
        </>
    )
}


function AtividadeParticipanteItem({a,handleInscrever}){
    const date = new Date(a.dataInput);
    const dataFormatada = `${date.getDate() + 1}/${date.getMonth() + 1}/${date.getFullYear()}`
    return(
        <>
            <li className="list-none w-full min-h-64 bg-blue-900 p-2 rounded shadow items-center flex flex-col justify-between text-white gap-4">
                <h2 className="text-white text-xl">{a.Nome ?? "-"}</h2>
                <p>{a.Descricao ?? '-'}</p>
                <p className="bg-gray-50 text-gray-700 h-8 w-14 text-center rounded flex items-center justify-center">{a.VagasRestantes} / {a.Vagas}</p>
                <p>{dataFormatada} as {a.Horario}</p>
                <div className="w-full flex flex-col gap-2">
                    <Button text="Se inscrever" onClick={handleInscrever} />
                </div>
            </li>
        </>
    )
}


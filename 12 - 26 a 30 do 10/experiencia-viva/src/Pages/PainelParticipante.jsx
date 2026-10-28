import { useParams } from "react-router-dom";
import FormParticipante from "../Components/FormParticipante";
import { useEffect, useState } from "react";
import { service } from "../service";
import ModalConfirm from "../Components/ModalConfirm";
import Button from "../Components/Button";
import { toast } from "react-toastify";

export default function PainelParticipante(){

    const {id} = useParams();
    const [p,setP] =useState(null);
    const [confirm, setConfirm] = useState({open:false, text:"", onConfirm: ()=>{}});
    const [atividadesDisponiveis,setAtividadesDisponiveis] = useState([])

    useEffect(() => {
      loadParticipante()
    },[id]);

    async function loadParticipante(){
        const res = await service.carregarParticipante(id);

        const disponiveis = await service.listarAtividadesDisponiveis(id);
        setAtividadesDisponiveis([...disponiveis.data])
        setP({...res.data});
    }

    async function handleCancelarInscricao(id){
        const res = await service.cancelarInscricao(id);

        if(!res || res.code !== 201 && res.code !== 200){
            toast.info(res.text ?? "Erro ao cancelar");
            return;
        }

        toast.success(res.text);
        setConfirm({open:false,onConfirm:()=>{},text:""})
        await loadParticipante();
    }
    async function handleInscrever(idAtividade){
        const res = await service.inscreverParticipante(id,idAtividade);

        if(!res || res.code !== 201 && res.code !== 200){
            toast.info(res.text ?? "Erro ao cancelar");
            return;
        }

        toast.success(res.text);
        setConfirm({open:false,onConfirm:()=>{},text:""})
        await loadParticipante();
    }

    if(!id) return null;
    

    return(
        <>
            <div className="flex flex-col flex-1 items-center justify-center p-8">
                <div className="w-full max-w-11/12 bg-slate-50 min-h-96 rounded shadow gap-4 flex flex-col p-4">
                    <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4">
                        <div>
                            <FormParticipante initialData={p} isAdmin={false} onSaved={async () => {
                                await loadParticipante(id)
                            }}
                            title={p?.Nome ?? "Participante"}
                            />
                        </div>
                        <div className="bg-slate-400 w-full border rounded p-4 flex flex-col gap-4">
                            <h2 className="text-white">Inscrições:</h2>
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {p?.inscricao.map((i)=>(
                                    <AtividadeCard idInscricao={i.Id} data={i.atividade} handleCancelarInscricao={() => {
                                        setConfirm({open:true,text:"Deseja cancelar a inscrição?", onConfirm:async() => {
                                            await handleCancelarInscricao(i.Id)
                                        }})
                                    }}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-blue-400 border border-blue-400 rounded p-4 flex flex-col gap-4">
                        <h2 className="text-white">Participe de novas atividades!</h2>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {atividadesDisponiveis.map((i)=>(
                                <AtividadeCard  data={i} handleInscrever={() => {
                                setConfirm({open:true,text:"Deseja Inscrever na atividade?", onConfirm:async() => {
                                    await handleInscrever(i.Id)
                                }})
                                }}/>
                            ))}
                        </div>
                    </div>
                </div>
                <ModalConfirm open={confirm.open} onConfirm={confirm.onConfirm} text={confirm.text} onClose={() => {
                  setConfirm({open:false,onConfirm:()=>{},text:""})
                }}/>
            </div>
        </>
    )
}


function AtividadeCard({
    idInscricao,
    handleInscrever,
    handleCancelarInscricao,
    data
}){
    return(
        <>
            <li className="list-none w-full min-h-64 flex flex-col justify-between p-4 rounded bg-slate-100 text-xl">
                <p><strong>Nome:</strong> {data.Nome ?? "-"}</p>
                <p><strong>Vagas:</strong> {data.Vagas - data.VagasRestantes} / {data.Vagas}</p>
                <p><strong>Data:</strong> {data.dataFormatada} as {data.Horario}</p>
                <div className="flex gap-4">
                    {!idInscricao && (
                        <Button onClick={() => {
                            handleInscrever()
                        }} variant="default" title="Inscrever"/>
                    )}
                   
                    {idInscricao && (
                        <Button onClick={() => {
                            handleCancelarInscricao()
                        }} variant="excluir" title="Cancelar Inscrição"/>
                    )}
                </div>
            </li>
        </>
    )
}
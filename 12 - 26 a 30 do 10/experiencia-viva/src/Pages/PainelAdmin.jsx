import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { service } from "../service";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import FormParticipante from "../Components/FormParticipante";
import ModalConfirm from "../Components/ModalConfirm";
import { toast } from "react-toastify";
import FormAtividade from "../Components/FormAtividade";

export default function Adminpage(){
    const {id} = useParams();

    const [participantes, setParticipantes] = useState([]);
    const [atividades, setAtividades] = useState([]);
    const [modalParticipante, setModalParticipante] = useState({open:false, initialData:null,isAdmin:false});
    const [modalAtividade, setModalAtividade] = useState({open:false, initialData:null,isAdmin:false});
    const [confirm, setConfirm] = useState({open:false, text:"", onConfirm: ()=>{}});
    
    function handleEditParticipante(e){
        setModalParticipante({open:true,initialData: e,isAdmin:true})
    }

    async function loadData(){
        const [participantes,atividades] = await Promise.all([
            service.listarParticipantes(),
            service.listarAtividades()
        ]);

        if(participantes && atividades){
            setParticipantes(participantes.data);
            setAtividades(atividades.data)
        }
    }

    useEffect(() => {
        loadData()
    },[id])

    if(!id) return null;

    function closeModalConfirm(){
        setConfirm({open:false,onConfirm: ()=>{},text:""})
    }

    async function handleRedefinirSenha(id){
        const res = await service.redefinirSenhaParticipante(id);

         if(!res || res.code !== 201 && res.code !== 200){
            toast.info(res.text ?? "Erro ao cancelar");
            return;
        }

        toast.success(res.text);
        closeModalConfirm()
        await loadData();
    }

    async function handleExcluirParticipante(id){
        const res = await service.excluirParticipante(id);

         if(!res || res.code !== 201 && res.code !== 200){
            toast.info(res.text ?? "Erro ao cancelar");
            return;
        }

        toast.success(res.text);
        closeModalConfirm()
        await loadData();
    }

    async function handleExcluirAtividade(id){
        const res = await service.excluirAtividade(id);

         if(!res || res.code !== 201 && res.code !== 200){
            toast.info(res.text ?? "Erro ao excluir");
            return;
        }

        toast.success(res.text);
        closeModalConfirm()
        await loadData();
    }

    return(
        <>
            <div className="flex flex-col flex-1 items-center  justify-center p-8">
                <div className="w-full max-w-11/12 bg-slate-50 min-h-96 rounded shadow gap-4 flex flex-col p-4">
                    <h1 className="text-center">Painel Admin</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="w-full h-full bg-slate-400 rounded">
                            <div className="p-4 flex flex-col gap-4">
                                <div className="flex justify-between gap-4">
                                    <h2 className="text-white">Participante</h2>
                                    <Button title="Novo" variant="custom" newClass="bg-white" textColor="text-slate-900" onClick={() => {
                                      setModalParticipante({open:true, initialData:null,isAdmin:false})
                                    }}/>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {participantes.map((p)=>(
                                        <ParticipanteItem data={p} key={p.Id} onSaved={async () => {
                                            await loadData()
                                        }}
                                        handleEdit={() => {
                                          handleEditParticipante(p)
                                        }}
                                        handleExcluir={() => {
                                          setConfirm({open:true,text:"Excluir Participante",onConfirm:async () => {
                                            await handleExcluirParticipante(p.Id)
                                          }})
                                        }}
                                        handleRedefinirSenha={() => {
                                          setConfirm({open:true,text:"Redefinir Senha do participante",onConfirm:async () => {
                                            await handleRedefinirSenha(p.Id)
                                          }})
                                        }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full bg-blue-400 rounded">
                            <div className="p-4 flex flex-col gap-4">
                                <div className="flex justify-between gap-4">
                                    <h2 className="text-white">Atividade</h2>
                                    <Button title="Novo" variant="custom" newClass="bg-white" textColor="text-slate-900" onClick={() => {
                                      setModalAtividade({open:true, initialData:null,isAdmin:true})
                                    }}/>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {atividades.map((p)=>(
                                        <AtividadeItem data={p} key={p.Id} onSaved={async () => {
                                            await loadData()
                                        }}
                                        handleEdit={() => {
                                           setModalAtividade({open:true,initialData:p,isAdmin:true})
                                        }}
                                        handleExcluir={() => {
                                          setConfirm({open:true,text:"Excluir Atividade",onConfirm:async () => {
                                            await handleExcluirAtividade(p.Id)
                                          }})
                                        }}

                                        handleDetalhes={()=>{
                                            toast.info("Em desenvolvimento")
                                        }}

                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalParticipante 
                    initialData={modalParticipante.initialData}
                    isAdmin={modalParticipante.isAdmin}
                    onClose={() => {
                      setModalParticipante({open:false, initialData:null,isAdmin:false})
                    }}
                    onSaved={async () => {
                      setModalParticipante({open:false, initialData:null,isAdmin:false})

                        await loadData()
                    }}
                    open={modalParticipante.open}
                    key={1}
                />

                <ModalAtividade 
                    initialData={modalAtividade.initialData}
                    isAdmin={modalAtividade.isAdmin}
                    onClose={() => {
                      setModalAtividade({open:false, initialData:null,isAdmin:false})
                    }}
                    onSaved={async () => {
                      setModalAtividade({open:false, initialData:null,isAdmin:false})

                        await loadData()
                    }}
                    open={modalAtividade.open}
                    key={1}
                />

                <ModalConfirm onClose={closeModalConfirm} onConfirm={confirm.onConfirm} open={confirm.open} text={confirm.text} key={1}/>
            </div>
        </>
    )
}


function ParticipanteItem({
    data,
    handleEdit,
    handleExcluir,
    handleRedefinirSenha
}){
    return(
        <>
            <li className="list-none w-full h-full flex flex-col justify-between p-4 rounded bg-slate-100">
                <p><strong>Nome:</strong> {data.Nome ?? "-"}</p>
                <p><strong>Email:</strong> {data.Email ?? "-"}</p>
                <p><strong>Telefone:</strong> {data.Telefone ?? "-"}</p>
                <div className="flex gap-4 justify-between">
                    <Button onClick={() => {
                      handleEdit()
                    }} variant="editar" title="Editar"/>
                    <Button onClick={() => {
                      handleRedefinirSenha()
                    }} variant="custom" title="Redefinir senha" newClass="text-white bg-black"/>
                    <Button onClick={() => {
                      handleExcluir()
                    }} variant="excluir" title="Excluir"/>
                </div>
            </li>
        </>
    )
}

function AtividadeItem({
    data,
    handleEdit,
    handleExcluir,
    handleDetalhes
}){
    return(
        <>
            <li className="list-none w-full h-full flex flex-col justify-between p-4 rounded bg-slate-100">
                <p><strong>Nome:</strong> {data.Nome ?? "-"}</p>
                <p><strong>Vagas:</strong> {data.Vagas - data.VagasRestantes} / {data.Vagas}</p>
                <p><strong>Data:</strong> {data.dataInput} as {data.Horario}</p>
                <div className="flex gap-4 justify-between">
                    <Button onClick={() => {
                      handleEdit()
                    }} variant="editar" title="Editar"/>
                    <Button onClick={() => {
                      handleDetalhes()
                    }} variant="default" title="Detalhes" />
                    <Button onClick={() => {
                      handleExcluir()
                    }} variant="excluir" title="Excluir"/>
                </div>
            </li>
        </>
    )
}

function ModalParticipante(
    {
        open,onClose,initialData, onSaved, isAdmin
    }
){
    return(
        <>
            <Modal open={open} onClose={onClose} title={"Participante"}> 
                <FormParticipante onSaved={onSaved} initialData={initialData} isAdmin={isAdmin} title="Participante"/>
            </Modal>
        </>
    )
}

function ModalAtividade(
    {
        open,onClose,initialData, onSaved, isAdmin
    }
){
    return(
        <>
            <Modal open={open} onClose={onClose} title={"Atividade"}> 
                <FormAtividade onSaved={onSaved} initialData={initialData} isAdmin={isAdmin} title="Atividade"/>
            </Modal>
        </>
    )
}
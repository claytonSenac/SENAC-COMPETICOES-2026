import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { service } from "../service";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import FormParticipante from "../Components/FormParticipante";
import ModalConfirm from "../Components/ModalConfirm";
import { toast } from "react-toastify";
import FormAtividade from "../Components/FormAtividade";
import { CardMenorAderencia } from "../Components/admin/CardMenorAderencia";
import { ContagemCard } from "../Components/admin/ContagemCard";

export default function Adminpage(){
    const {id} = useParams();

    const [participantes, setParticipantes] = useState([]);
    const [atividades, setAtividades] = useState([]);
    const [modalParticipante, setModalParticipante] = useState({open:false, initialData:null,isAdmin:false});
    const [modalAtividade, setModalAtividade] = useState({open:false, initialData:null,isAdmin:false});
    const [confirm, setConfirm] = useState({open:false, text:"", onConfirm: ()=>{}});
    const [detalhes,setDetalhes] = useState({open:false,data:null});

    const [participantesFiltrados,setParticipantesFiltrados] = useState({filter:"",itens:[],showMore:true});
    const [atividadesFiltradas,setAtividadesFiltradas] = useState({filter:"",itens:[],showMore:true});
    const [dashboard,setDashboard] = useState(null);

    function handleEditParticipante(e){
        setModalParticipante({open:true,initialData: e,isAdmin:true})
    }

    async function loadData(){
        const [participantes,atividades,dashboard] = await Promise.all([
            service.listarParticipantes(),
            service.listarAtividades(),
            service.getDashboard()
        ]);

        if(participantes && atividades){
            setParticipantes(participantes.data);
            setAtividades(atividades.data)
            setDashboard(dashboard.data)
        }
    }

    useEffect(() => {
        loadData()
    },[id]);

    useEffect(() => {
      setParticipantesFiltrados((prev)=>({
            ...prev,
            itens: participantes
        }));
    },[participantes]);

    useEffect(() => {
      setAtividadesFiltradas((prev)=>({
            ...prev,
            itens: atividades
        }));
    },[atividades]);

    useEffect(() => {
      const text = participantesFiltrados.filter.toLowerCase().trim();

      const filtered = participantes.filter(p => p?.Nome.toLowerCase().includes(text) 
            || p?.Email.toLowerCase().includes(text) ||p?.Telefone.toLowerCase().includes(text)
        );

        setParticipantesFiltrados((prev)=>({
            ...prev,
            itens:filtered
        }));
    },[participantesFiltrados.filter]);

    useEffect(() => {
      const text = atividadesFiltradas.filter.toLowerCase().trim();

      const filtered = atividades.filter(p => p?.Nome.toLowerCase().includes(text) 
            || p?.Data.toLowerCase().includes(text) || p?.Horario.toLowerCase().includes(text) ||
            p?.Descricao.toLowerCase().includes(text)
        );

        setAtividadesFiltradas((prev)=>({
            ...prev,
            itens:filtered
        }));
    },[atividadesFiltradas.filter]);

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

    async function handleCancelarInscricao(id){
        const res = await service.cancelarInscricao(id);

         if(!res || res.code !== 201 && res.code !== 200){
            toast.info(res.text ?? "Erro ao cancelar");
            return;
        }

        toast.success(res.text);
        closeModalConfirm()
        setDetalhes({open:false,data:null})
        await loadData();
    }

    return(
        <>
            <div className="flex flex-col flex-1 items-center  justify-center p-4 pt-20 sm:pt-8 gap-4">
                <div className="w-full h-full xl:max-w-11/12 bg-slate-50  rounded shadow gap-4 flex flex-col p-4">
                 <h2 className="text-center">Proximas atividades:</h2>
                 <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    {dashboard?.proximas.map((p)=>(
                        <li className="w-full list-none bg-blue-100 p-4 rounded flex flex-col gap-2">
                            <div className="w-full flex justify-between items-center gap-2">
                                <i className="bi bi-calendar bg-blue-400 p-2 rounded text-white"></i>
                                <p className="bg-blue-400 text-white p-2 rounded">{p.Vagas - p.VagasRestantes} / {p.Vagas}</p>
                            </div>
                            <p><strong>Nome:</strong> {p.Nome ?? "-"}</p>
                            <p><strong>Data:</strong> {p.dataFormatada} as {p.Horario}</p>
                        </li>
                    ))}
                 </div>
                </div>
                <div className="w-full h-full xl:max-w-11/12 bg-slate-50 rounded shadow gap-4 flex flex-col p-4">
                    <h2 className="text-center">Contagem:</h2>
                    <ContagemCard data={dashboard} />
                </div>
                <div className="w-full h-full xl:max-w-11/12 bg-red-200 rounded shadow gap-4 flex flex-col p-4">
                    <h2 className="text-center">Atividade com menor aderencia:</h2>
                    <CardMenorAderencia p={dashboard?.menorAderencia} />
                </div>
                <div className="w-full h-full xl:max-w-11/12 bg-slate-50 min-h-96 rounded shadow gap-4 flex flex-col p-4">
                    <h1 className="text-center">Painel Admin</h1>
                    <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="w-full h-full bg-slate-400 rounded">
                            <div className="p-4 flex flex-col gap-4">
                                <div className="flex justify-between gap-4">
                                    <h2 className="text-white">Participante</h2>
                                    <Button onClick={() => {
                                      setParticipantesFiltrados((prev)=>({
                                        ...prev,
                                        showMore: !prev.showMore
                                      }))
                                    }} title={participantesFiltrados.showMore ? "Ver Menos" :  "Ver Mais"}/>
                                    <Button title="Novo" variant="custom" newClass="bg-white" textColor="text-slate-900" onClick={() => {
                                      setModalParticipante({open:true, initialData:null,isAdmin:false})
                                    }}/>
                                </div>
                                <input placeholder="Filte por nome, email, telefone" className="border-slate-600" type="text" value={participantesFiltrados.filter} onChange={(e) => {
                                  setParticipantesFiltrados((prev)=>({
                                    ...prev,
                                    showMore:true,
                                    filter: e.target.value
                                  }))
                                }} />
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                    {
                                    participantesFiltrados.itens
                                    .slice(0, participantesFiltrados.showMore ?
                                         participantesFiltrados.itens.length : 2 )
                                        .map((p)=>(
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
                        <div className="w-full bg-slate-400 rounded">
                            <div className="p-4 flex flex-col gap-4">
                                <div className="flex justify-between gap-4">
                                    <h2 className="text-white">Atividade</h2>
                                    <Button onClick={() => {
                                      setAtividadesFiltradas((prev)=>({
                                        ...prev,
                                        showMore: !prev.showMore
                                      }))
                                    }} title={atividadesFiltradas.showMore ? "Ver Menos" :  "Ver Mais"}/>
                                    <Button title="Novo" variant="custom" newClass="bg-white" textColor="text-slate-900" onClick={() => {
                                      setModalAtividade({open:true, initialData:null,isAdmin:true})
                                    }}/>
                                </div>
                                 <input placeholder="Filte por nome, data,descricao" className="border-slate-600" type="text" value={atividadesFiltradas.filter} onChange={(e) => {
                                  setAtividadesFiltradas((prev)=>({
                                    ...prev,
                                    showMore:true,
                                    filter: e.target.value
                                  }))
                                }} />
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                                   {
                                    atividadesFiltradas.itens
                                    .slice(0, atividadesFiltradas.showMore ?
                                         atividadesFiltradas.itens.length : 2 )
                                        .map((p)=>(
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
                                            setDetalhes({open:true,data:p})
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
                <DetalhesAtividade open={detalhes.open} data={detalhes.data} onClose={() => {
                  setDetalhes({open:false,data:null})
                }} 
                onCancelarInscricao={(id) => {
                  setConfirm({open:true,text:"Cancelar Inscrição",onConfirm: async () => {
                    await handleCancelarInscricao(id)
                  }})
                }}
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
                <div className="flex gap-4 justify-between flex-wrap items-center">
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
                <p><strong>Data:</strong> {data.dataFormatada} as {data.Horario}</p>
                <div className="flex gap-4 justify-between flex-wrap">
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

function DetalhesAtividade({open,onClose,data, onCancelarInscricao}){
    if(!open || !data) return null;
    return (
        <>
            <Modal open={open} title={"Detalhamento"} onClose={onClose} zIndex="z-50">
                <div className="w-full h-full flex gap-4 justify-between flex-col">
                    <div className=" text-xl flex flex-col gap-4 rounded">
                        <p><strong>Nome:</strong> {data?.Nome ?? "-"}</p>
                        <p><strong>Vagas:</strong> {data?.Vagas - data.VagasRestantes} / {data.Vagas}</p>
                        <p><strong>Data:</strong> {data?.dataFormatada} as {data.Horario}</p>
                    </div>
                    <div>
                        <h2>Inscrições:</h2>
                        <div className="w-full p-4 rounded bg-slate-200  flex flex-col gap-4">
                            {data.inscricao.map((i)=>(
                                <li className="flex items-center gap-4 justify-between bg-slate-50 p-4">
                                    <div className="flex flex-col gap-4 justify-between">
                                        <p><strong>Nome: </strong>{i.participante?.Nome ?? "-"}</p>
                                        <p><strong>Telefone:</strong> {i.participante?.Telefone ?? "-"}</p>
                                    </div>
                                    <Button onClick={() => {
                                      onCancelarInscricao(i.Id)
                                    }} variant="excluir" title="Cancelar" />
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
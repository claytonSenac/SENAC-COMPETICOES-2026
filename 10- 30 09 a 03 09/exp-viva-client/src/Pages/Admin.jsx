import { useEffect, useState } from "react";
import { service } from "../service";
import { toast } from "react-toastify";
import Modal from "../Componentes/Modal";
import FormAtividade from "../Componentes/FormAtividade";
import FormParticipante from "../Componentes/FormParticipante";
import ConfirmModal from "../Componentes/ConfirmModal";

export default function Admin(){
    const [atividades,setAtividades] = useState([]);
    const [participantes,setParticipantes] = useState([]);

    const [confirmModal, setConfirmModal] = useState({
        open:false, title: "", onConfirm: () => {}
    });

    const [modalParticipante, setModalParticipante] = useState({open:false, initialData:null,isAdmin:false});
    const [modalAtividade, setmodalAtividade] = useState({open:false, initialData:null});

    const [filterParticipante,setFilterParticipante] = useState({text:"",data:[],showMore:false})
    const [filterAtividade,setFilterAtividade] = useState({text:"",data:[],showMore:false})

    async function handleDeleteAtividade(id){
        const res = await service.excluirAtividade(id);

        if(res){
            toast.info(res.text);
            setConfirmModal({
                open:false,title:"", onConfirm:null
            })
        }else{
            toast.error("Erro ao excluir")
        }
        await loadData();
    }

    async function handleDeleteParticipante(id){
        const res = await service.excluirParticipante(id);

        if(res){
            toast.info(res.text);
            setConfirmModal({
                open:false,title:"", onConfirm:null
            })
        }else{
            toast.error("Erro ao excluir")
        }
        await loadData();
    }

    async function loadData(){
        await service.getAtividades().then((e) => {
          setAtividades([...e.data]);
        });

        await service.getParticipantes().then((e) => {
          setParticipantes([...e.data]);
        });

    }

    useEffect(() => {
      const load = async () => {
        await loadData()
      }

      load();
    },[]);

    async function handleRedefinirSenha(id){
        await service.redefinirSenha(id).then(async (e) => {
          if(e){
            toast.info(e.text);
            await loadData();
            setConfirmModal({open:false,onConfirm:null,title:""})
          }
        })
    }

    useEffect(() => {
        const text = filterParticipante.text.toLowerCase();

      const result = participantes.filter(e => e.nome.includes(text) || e.email.includes(text));
      setFilterParticipante((prev)=>({
        ...prev,
        data:[...result]
      }));
    },[filterParticipante.text, participantes, filterParticipante.showMore])

    
    useEffect(() => {
        const text = filterAtividade.text.toLowerCase();

      const result = atividades.filter(e => e.nome.includes(text) || 
                                            e.data.includes(text)    ||
                                            e.horario.includes(text)    ||
                                            e.vagas.includes(text)    ||
                                            e.descricao.includes(text));
      setFilterAtividade((prev)=>({
        ...prev,
        data:[...result]
      }));
    },[filterAtividade.text, atividades, filterAtividade.showMore])

    return (
        <>
            <div className="w-full h-full flex flex-col flex-1 p-8 items-center justify-center">
                <div className="bg-white rounded p-2 w-full h-full mx-auto">
                    <h1 className="text-blue-900 text-center text-3xl font-semibold">Painel Admin</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 p-4">
                        <div className="bg-blue-400 ">
                            <div className="p-4 flex justify-between items-center  bg-blue-400">
                                <h2 className="font-semibold text-xl text-white">Atividades:</h2>
                                <button className="bg-white text-black rounded p-2 font-semibold cursor-pointer" onClick={() => {
                                  setFilterAtividade((prev)=>({
                                    ...prev,
                                    showMore:!prev.showMore
                                  }))
                                }}>{filterAtividade.showMore ? "Ver Menos" : "Ver Mais"}</button>

                                <button className="bg-blue-900 p-2 rounded text-white cursor-pointer" onClick={() => {
                                  setmodalAtividade({open:true,initialData:null})
                                }}>Novo</button>
                            </div>
                            <div className="grid w-full grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                                {filterAtividade.data.slice(0, filterAtividade.showMore ? filterAtividade.data.length :3).map((a)=>(
                                    <li className="w-full justify-between bg-blue-900 list-none text-white rounded flex flex-col gap-4 p-4">
                                        <p className="text-center font-semibold">{a.nome ?? "-"}</p>
                                        <p>{a.descricao ?? "-"}</p>

                                        <p className="mx-auto text-black h-6 text-center rounded w-16 bg-white">{a.vagas_restantes} / {a.vagas}</p>

                                        <p>{a.data} as {a.horario}</p>

                                        <button
                                            className={`p-2 rounded cursor-pointer bg-blue-400`}
                                            onClick={() => {
                                              alert("Funcionalidade em desenvolvimento")
                                            }}
                                        >
                                            Detalhes
                                        </button>
                                        <button
                                            className={`p-2 rounded cursor-pointer bg-yellow-400`}
                                            onClick={() => {
                                              setmodalAtividade({
                                                open:true,
                                                initialData:a
                                              })
                                            }}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className={`p-2 rounded cursor-pointer bg-red-400`}
                                            onClick={() => {
                                              setConfirmModal({
                                                open:true,title:"Exclusão " +a.nome, onConfirm: async () => {
                                                  await handleDeleteAtividade(a.id)
                                                }
                                              })
                                            }}
                                        >
                                            Excluir
                                        </button>

                                    </li>
                                ))}
                            </div>
                        </div>
                        <div className="bg-blue-200 rounded ">
                            <div className="p-4 flex justify-between items-center ">
                                <h2 className="font-semibold text-xl">Participantes:</h2>
                                <button className="bg-white text-black rounded p-2 font-semibold cursor-pointer" onClick={() => {
                                  setFilterParticipante((prev)=>({
                                    ...prev,
                                    showMore:!prev.showMore
                                  }))
                                }}>{filterParticipante.showMore ? "Ver Menos" : "Ver Mais"}</button>
                                <button className="bg-blue-400 p-2 rounded text-white cursor-pointer" onClick={() => {
                                  setModalParticipante({open:true,initialData:null})
                                }}>Novo</button>
                            </div>
                            <div className="grid w-full grid-cols-1 p-4 md:grid-cols-2  gap-4 ">
                                {filterParticipante.data.slice(0, filterParticipante.showMore ? filterParticipante.data.length : 3 ).map((a)=>(
                                    <li className="w-full bg-blue-900 justify-between list-none text-white rounded flex flex-col gap-4 p-4">
                                        <p className="text-center font-semibold">{a.nome ?? "-"}</p>
                                        <p><strong>Email:</strong> {a.email ?? "-"}</p>
                                        <button
                                            className={`p-2 rounded cursor-pointer bg-blue-400`}
                                            onClick={() => {
                                              setModalParticipante({open:true, initialData:a,isAdmin:true})
                                            }}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className={`p-2 rounded cursor-pointer bg-black text-white`}
                                            onClick={() => {
                                              setConfirmModal({open:true,title: "Redefinir senha "+a.nome, onConfirm:async () => {
                                                await handleRedefinirSenha(a)
                                              }})
                                            }}
                                        >
                                            Redefinir Senha
                                        </button>
                                        <button
                                            className={`p-2 rounded cursor-pointer bg-red-400`}
                                            onClick={() => {
                                              setConfirmModal({
                                                open:true,title:"Exclusão " +a.nome, onConfirm: async () => {
                                                  await handleDeleteParticipante(a.id)
                                                }
                                              })
                                            }}
                                        >
                                            Excluir
                                        </button>

                                    </li>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <ConfirmModal 
                open={confirmModal.open}
                title={confirmModal.title}
                onClose={() => {
                  setConfirmModal({
                    open:false,
                    title:"",
                    onConfirm:null
                  })
                }}
                onConfirm={() => {
                  confirmModal.onConfirm()}
                }
            />

            <Modal open={modalAtividade.open} title="Atividade" onClose={() => {
              setmodalAtividade({open:false,initialData:null})
            }} >
                <FormAtividade 
                    initialData={modalAtividade.initialData}
                    onCreated={async () => {
                      await loadData()
                      setmodalAtividade({open:false, initialData:null})
                    }}
                />
            </Modal>
            <Modal open={modalParticipante.open} title="Participante" onClose={() => {
              setModalParticipante({open:false,initialData:null})
            }} >
                <FormParticipante 
                    isAdmin={modalParticipante.isAdmin}
                    initialData={modalParticipante.initialData}
                    onCreated={async () => {
                      await loadData()
                      setModalParticipante({open:false, initialData:null})
                    }}
                />
            </Modal>
        </>
    )
}




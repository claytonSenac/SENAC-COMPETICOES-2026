import { useEffect, useState } from "react";
import Button from "../Components/Button";
import { service } from "../service";
import ConfirmModal from "../Components/ConfirmModal";
import { toast } from "react-toastify";
import Modal from "../Components/Modal";
import FormAtividade from "../Components/FormAtividade";
import FormParticipante from "../Components/FormParticipante";
import Input from "../Components/Input";

export default function AdminPage(){
    const [confirm,setConfirm] = useState({open:false,title:"",onConfirm:() => {}});
    const [modalAtividade,setModalAtividade] = useState({open:false,initialData: null})
    const [modalAtividadeDetails,setModalAtividadeDetails] = useState({open:false,data: null})
    const [modalParticipante,setModalParticipante] = useState({open:false,initialData: null})
    const [atividades,setAtividades] = useState([]);
    const [participantes,setParticipantes] = useState([]);

    const [filterAtividades,setFilterAtividades ] = useState({text:"",showMore:false, itens: []});
    const [filterParticipantes,setFilterParticipantes ] = useState({text:"",showMore:false, itens: []});

    const [dashboard,setDashboard] = useState({});

    async function loadData(){
        const [atividades,participantes,health] = await Promise.all([
             service.getAtividades(),
             service.getParticipantes(),
             service.getHealth()
        ]);
    

        setAtividades([...atividades.data]);
        setParticipantes([...participantes.data]);
        setDashboard(health.data);
        console.log(dashboard)
    }

    useEffect(() => {
        const load = async () => {
          await loadData()
        }
        load();
    },[]);

    useEffect(() => {
        setFilterAtividades((prev)=>({
            ...prev,
            itens:atividades
        }))
    },[atividades]);

    useEffect(() => {
        setFilterParticipantes((prev)=>({
            ...prev,
            itens:participantes
        }))
    },[participantes])

    useEffect(() => {
      const text = filterAtividades.text.toLowerCase().trim();

      let itens = atividades.filter(a => a.Nome.includes(text) ||a.Data.includes(text) || a.Horario.includes(text) );
      setFilterAtividades((prev)=>({
        ...prev,
        itens:itens
      }))
    },[filterAtividades.text]);

    useEffect(() => {
      const text = filterParticipantes.text.toLowerCase().trim();

      let itens = participantes.filter(a => a?.Nome.includes(text) ||a?.Email.includes(text) || a?.Telefone.includes(text));

      setFilterParticipantes((prev)=>({
        ...prev,
        itens:itens
      }))
    },[filterParticipantes.text])

    function resetConfirm(){
        setConfirm({open:false,title:"",onConfirm:() => {
          
        }})
    }

    async function handleExcluirAtividade(id){
        console.log(id);
        const res = await service.excluirAtividade(id);

        if(res.code == 200 || res.code == 201){
            resetConfirm();
            toast.info(res.text ?? "");
            await loadData();
            return;
        }else{
            toast.error(res.text);
            await loadData();
            resetConfirm();
            return;
        }
    }


    async function handleExcluirParticipante(id){
        console.log(id);
        const res = await service.excluirParticipante(id);

        if(res.code == 200 || res.code == 201){
            resetConfirm();
            toast.info(res.text ?? "");
            await loadData();
            return;
        }else{
            toast.error(res.text);
            await loadData();
            resetConfirm();
            return;
        }
    }

    async function handleRedefinirSenha(id){
        console.log(id);
        const res = await service.redefinirSenha(id);

        if(res.code == 200 || res.code == 201){
            resetConfirm();
            toast.info(res.text ?? "");
            await loadData();
            return;
        }else{
            toast.error(res.text);
            await loadData();
            resetConfirm();
            return;
        }
    }



    return (
        <>
            <div className="w-full h-full flex flex-col gap-4 flex-1 items-center justify-center p-4">
                {dashboard && (
                    <div className="w-full md:max-w-11/12 bg-white rounded-2xl min-h-80 p-4">
                        <h2 className="text-center font-semibold text-2xl border-b-2 border-blue-900">Dashboard:</h2>
                        <div className="w-full grid grid-cols-1 gap-4">
                                <h2 className="text-center font-semibold text-2xl">Proximas Atividades:</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                                {dashboard?.proximas?.length > 0  && (
                                    <>
                                        {dashboard?.proximas.map((a)=>(
                                            <li className="list-none p-4 w-sm mx-auto  bg-blue-900 rounded shadow items-center flex flex-col justify-between text-white gap-4">
                                                <h2 className="text-white text-2xl">{a.Nome ?? "-"}</h2>
                                                  <p>{getDataFormatada(a.Data)} as {a.Horario}</p>
                                                <p className="bg-gray-50 text-gray-700 h-8 min-w-14 text-center rounded flex items-center justify-center">{a.VagasRestantes} / {a.Vagas}</p>
                                                <p className="text-sm">Vagas restantes  /  Total de vagas</p>
                                            </li>
                                    ))}</>
                                )}

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 h-72 w-full justify-center items-center p-4">
                                <div className="flex flex-col gap-4 justify-between w-full h-full text-3xl ">
                                    <li className="p-4 w-full h-full rounded flex-col flex items-center gap-4 text-white">
                                        <h2 className=" text-black text-2xl font-semibold text-center">Geral:</h2>
                                        <div className="bg-blue-400 p-4 h-full  rounded flex flex-col justify-center items-center">
                                            <p><strong>Participantes: </strong>{dashboard.participantes ?? 0}</p>
                                            <p><strong>Atividades: </strong>{dashboard.atividades ?? 0}</p>
                                        </div>
                                   </li>
                                </div>
                                <div className="flex flex-col gap-4 justify-between w-full h-full ">
                                   <li className="p-4 w-full h-full rounded flex-col  items-center gap-4 text-white">
                                        <h2 className=" text-black text-2xl font-semibold text-center">Atividade com menor aderencia:</h2>
                                        <div className="bg-blue-400 w-sm mx-auto p-4  rounded flex flex-col justify-center items-center">
                                        {dashboard?.menorAderencia  && (
                                        <>
                                            <li className="list-none p-4  rounded  items-center flex flex-col justify-between text-white gap-4 ">
                                                <h2 className="text-white text-2xl">{dashboard.menorAderencia.nome ?? "-"}</h2>

                                                <p className="bg-gray-50 text-gray-700 h-8 min-w-14 text-center rounded flex items-center justify-center">{dashboard.menorAderencia.vagasRestantes} / {dashboard.menorAderencia.vagas}</p>
                                                <p className="text-sm">Vagas restantes  /  Total de vagas</p>

                                                <p className="font-semibold">Aderencia: {dashboard.menorAderencia.aderencia}%</p>
                                            </li>
                                        </>
                                        )}
                                        </div>
                                   </li>
                                </div>
                                <div className="w-full flex items-center justify-center">
                                    <img  className="w-sm" src="/imagens_Coronel_Fabriciano_03.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="w-full md:max-w-11/12 bg-white rounded-2xl min-h-80">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <div className="flex flex-col  gap-4 border-2 border-blue-400 rounded-2xl p-4">
                            <div className="flex justify-between gap-4 p-4">
                                <h2 className="subTitle">Atividades</h2>

                                <Button bgColor="bg-blue-900" onClick={()=>{
                                    setFilterAtividades((prev)=>({
                                    ...prev,
                                    showMore: !prev.showMore
                                }))}} text={filterAtividades.showMore ? "Ver Menos": "Ver Mais" }/>

                                <Button onClick={() => {
                                  setModalAtividade({open:true,initialData:null})
                                }} text="Novo"/>
                            </div>
                            <input className="border-2 border-blue-900 px-2 rounded" type="text" placeholder="Filter pelos campos" value={filterAtividades.text} onChange={(e) => {
                              setFilterAtividades((prev)=>({
                                ...prev,
                                text:e.target.value
                              }))
                            }} />
                            <div className="p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
                                {filterAtividades.itens.slice(0, filterAtividades.showMore ? filterAtividades.itens.length : 3 ).map((a)=>(
                                    <AtividadeItem a={a}  
                                        handleExcluir={async() => {
                                          setConfirm({open:true, title:"Excluir Atividade", onConfirm:async () => {
                                           
                                            await handleExcluirAtividade(a.Id)
                                          }})
                                        }}

                                        handleVerDetalhes={async () => {
                                          setModalAtividadeDetails({open:true,data:a})
                                        }}

                                        handleEditar={async () => {
                                          setModalAtividade({open:true,initialData:a})
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-4 border-2 border-blue-400 rounded-2xl p-4">
                            <div className="flex justify-between gap-4 p-4">
                                <h2 className="subTitle">Participantes</h2>
                                <Button bgColor="bg-blue-900" onClick={()=>{
                                    setFilterParticipantes((prev)=>({
                                    ...prev,
                                    showMore: !prev.showMore
                                }))}} text={filterParticipantes.showMore ? "Ver Menos": "Ver Mais" }/>
                                <Button onClick={() => {
                                  setModalParticipante({open:true,initialData:null})
                                }} text="Novo"/>
                            </div>
                            <input className="border-2 border-blue-900 px-2 rounded" type="text" placeholder="Filter pelos campos" value={filterParticipantes.text} onChange={(e) => {
                              setFilterParticipantes((prev)=>({
                                ...prev,
                                text:e.target.value
                              }))
                            }} />
                            <div className="p-4 grid grid-cols-1 lg:grid-cols-2  gap-4 w-full items-center">
                                {filterParticipantes.itens.slice(0, filterParticipantes.showMore ? filterParticipantes.itens.length : 2 ).map((a)=>(
                                    <ParticipanteItem a={a}  
                                        handleExcluir={async() => {
                                          setConfirm({open:true, title:"Excluir Participante", onConfirm:async () => {

                                            await handleExcluirParticipante(a.Id)
                                          }})
                                        }}

                                        handleEditar={async () => {
                                          
                                          setModalParticipante({open:true,initialData:a})
                                        }}
                                        handleRedefinirSenha={async () => {
                                            setConfirm({open:true,title: "Deseja redenir a senha?",onConfirm: async () => {
                                              await handleRedefinirSenha(a.Id)
                                            }})
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <ConfirmModal title={confirm.title} onCancel={resetConfirm} onConfirm={confirm.onConfirm} open={confirm.open}/>
                <ModalAtividade initialData={modalAtividade.initialData} onCancel={() => {
                    setModalAtividade({open:false, initialData:null})
                    }}
                    onSaved={async () => {
                        setModalAtividade({open:false,initialData:null})
                        await loadData()
                    }}
                    open={modalAtividade.open}
                />
                <ModalParticipante initialData={modalParticipante.initialData} onCancel={() => {
                    setModalParticipante({open:false, initialData:null})
                    }}
                    onSaved={async () => {
                        setModalParticipante({open:false,initialData:null})
                        await loadData()
                    }}
                    open={modalParticipante.open}
                />
                <AtividadeDetails onCanceled={async () => {
                    setModalAtividadeDetails({open:false,data:null})
                  await loadData();
                  
                }} a={modalAtividadeDetails.data} open={modalAtividadeDetails.open}  onClose={() => {
                  setModalAtividadeDetails({open:false,data:null})
                }}/>
            </div>
        </>
    )
}

function AtividadeItem({a,handleEditar,handleExcluir,handleVerDetalhes,showDesc = true}){
    const dataFormatada = getDataFormatada(a.dataInput)
    return(
        <>
            <li className="list-none p-4 w-full min-h-64 bg-blue-900 rounded shadow items-center flex flex-col justify-between text-white gap-4">
                <h2 className="text-white text-xl">{a.Nome ?? "-"}</h2>
                {showDesc && (<p>{a.Descricao ?? '-'}</p>)}
                <p className="bg-gray-50 text-gray-700 h-8 min-w-14 text-center rounded flex items-center justify-center">{a.VagasRestantes} / {a.Vagas}</p>
                <p>{dataFormatada} as {a.Horario}</p>
                {handleEditar || handleExcluir || handleVerDetalhes && (
                    <div className="w-full flex flex-wrap  justify-between gap-2">
                        <Button text={
                            <i class="bi bi-info-square-fill p-2 text-xl"></i> 
                        } onClick={handleVerDetalhes} />
                        
                        <Button text={
                            <i class="bi bi-pencil-fill p-2 text-xl"></i> 
                        } bgColor="bg-yellow-400" onClick={handleEditar} />
                        <Button text={
                            <i class="bi bi-trash-fill p-2 text-xl"></i> 
                        } bgColor="bg-red-400" onClick={handleExcluir} />
                    </div>
                )}
            </li>
        </>
    )
}


function getDataFormatada(d){
        const date = new Date(d);
    return( `${date.getDate() + 1}/${date.getMonth() + 1}/${date.getFullYear()}`)
}

function ParticipanteItem({a,handleEditar,handleExcluir,handleRedefinirSenha}){

    return(
        <>
            <li className="list-none w-full min-h-72 bg-blue-900 rounded shadow  flex flex-col justify-between text-white gap-2 p-4">
                <h2 className="text-white text-xl"><strong>Nome: </strong>{a.Nome ?? "-"}</h2>
                <p className="text-white"><strong>Email: </strong>{a.Email ?? "-"}</p>
                <p className="text-white flex flex-wrap"><strong>Telefone: </strong>{formatarTelefone(a.Telefone) ?? "-"}</p>

                <div className="w-full flex  gap-2 justify-between flex-wrap">
                    <Button text={
                        <i class="bi bi-pencil-fill p-2 text-xl"></i> 
                    } bgColor="bg-yellow-400" onClick={handleEditar} />
                    <Button text="Redefinir Senha" bgColor="bg-gray-800" textColor="text-white" onClick={handleRedefinirSenha} />
                    <Button text={
                        <i class="bi bi-trash-fill p-2 text-xl"></i> 
                    } bgColor="bg-red-400" onClick={handleExcluir} />
                </div>
            </li>
        </>
    )
}


function ModalAtividade({open,onCancel,onSaved,initialData}){
    return(
        <Modal open={open} onCancel={onCancel} title={initialData ? initialData?.Nome ?? "Editar" : "Nova Atividade"} zIndex="z-20" >
            <FormAtividade onSaved={onSaved} initialData={initialData} title=""/>
        </Modal>
    )
}

function ModalParticipante({open,onCancel,onSaved,initialData}){
    return(
        <Modal open={open} onCancel={onCancel} title={initialData ? initialData?.Nome ?? "Editar" : "Novo Participante"}  zIndex="z-20" >
            <FormParticipante onSaved={onSaved} initialData={initialData} isAdmin={true} title=""/>
        </Modal>
    )
}

function AtividadeDetails({open, a,onClose, onCanceled}){
    if(!open || !a) return null;
    
    const [confirm,setConfirm] = useState({open:false,text:"",onConfirm:() => {}});

    async function handleCancelarInscricao(id){
        const res = await service.cancelarInscricao(id);
        if(res.code == 200){
            toast.info(res.text);
            
            setConfirm({open:false,title:"",onConfirm:null})
            onCanceled(id)
            return;
        }else{
            toast.error("erro ao cancelar");
            setConfirm({open:false,title:"",onConfirm:null})
            return;
        }
    }

    return(
        <>
            <Modal open={open} onCancel={onClose} zIndex="z-50" title="Detalhes da Atividade">
                <div className="w-full p-4 border-2 border-blue-400 flex flex-col gap-4 rounded">
                    <h2 className="subTitle"><strong>Nome: </strong>{a.Nome}</h2>
                    <p className="wrap-break-word"><strong>Descricao: </strong>{a.Descricao}</p>
                    <p className="bg-blue-400  text-white  p-2 text-center rounded">
                        <strong>Vagas: </strong> {a.VagasRestantes} / {a.Vagas}
                    </p>
                    <p className=""><strong>Horario:</strong> {a.Horario}</p>
                    <div className="w-full p-4 border-2 border-gray-300 rounded-2xl flex flex-col gap-2">
                        <h2 className="subTitle">Inscritos:</h2>
                        <div className="w-full grid-cols-1 grid gap-4">
                            {a.inscricao.map((i)=>(
                                <li className="list-none flex gap-4  justify-between items-center bg-gray-200 p-4 rounded">
                                    <div className="flex flex-col gap-2">
                                        <p>{i.participante.Nome}</p>
                                        <p>{formatarTelefone(i.participante.Telefone)}</p>
                                    </div>
                                    <Button text="Cancelar" bgColor="bg-red-400" onClick={() => {
                                      setConfirm({open:true, text: "Deseja cancelar esta inscrição?", onConfirm: async () => {
                                        await handleCancelarInscricao(i.Id);
                                      }})
                                    }}/>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
                <ConfirmModal open={confirm.open} onConfirm={confirm.onConfirm} title={confirm.text} onCancel={() => {
                  setConfirm({open:false,text:"",onConfirm:() => {}})
                }}/>
            </Modal>
        </>
    )
}

export function formatarTelefone(telefone){
 const t = telefone.split('');
 
 return `+55 ${t[0]}${t[1]} ${t[2]} ${t[3]}${t[4]}${t[5]}${t[6]} - ${t[7]}${t[8]}${t[9]}${t[10]}`
}
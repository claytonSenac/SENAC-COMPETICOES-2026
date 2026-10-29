import { useEffect, useState,useMemo } from "react";
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

    const [dashboard,setDashboard] = useState({atividades:0, participantes:0, proximas:[], menorAderencia:null});

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
            <div className="w-full h-full bg-slate-100 flex flex-col gap-4 flex-1 items-center justify-center p-4">
                {/* {dashboard && (
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
                )} */}

                <DashboardAdminV3 data={dashboard} />
                <DashboardAdminV4 data={dashboard} />
                <DashboardAdminV5 data={dashboard} />
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


function DashboardAdminV3({data = {atividades:0, participantes:0,menorAderencia: null, proximas:[]}}){
    useEffect(() => {
      console.log(data)
    },[data]);

    if(!data.proximas) return null;

    return (
        <>
            <div className="w-full max-w-7xl mt-8 bg-slate-100 border-2 border-blue-400 rounded-2xl shadow shadow-slate-600  grid grid-cols-1  gap-2">
                <h2 className="text-2xl font-semibold text-center mt-4"> Próximas Atividades:</h2>
                <div className="w-full h-full grid grid-cols-1 gap-4 md:grid-cols-3 p-4 min-h-24 bg-blue-400 ">
                    {data.proximas.map((a)=>(
                        <div className="bg-white px-4 grid grid-cols-2 grid-rows-2  p-2">
                            <div className="flex gap-4 justify-center items-center col-span-2 row-span-2">
                                <h2 className="text-center text-xl font-semibold text-slate-800">Nome:</h2>
                                <p> {a?.Nome ?? "-"}</p>
                            </div>
                            <div className="flex row-span-2 col-span-2 justify-between mx-auto w-full gap-4 grid-cols-[2fr_1fr]">
                                <div className="flex  justify-between w-full items-center">
                                    <h2 className="text-center text-xl font-semibold">Data:</h2>
                                    <p className="text-center text-slate-800 font-semibold">{getDataFormatada(a?.Data)}</p>
                                </div>
                                <div className=" flex items-center justify-between w-full">
                                    <p className="font-semibold text-xl">Inscritos: </p>
                                    <p className="rounded text-slate-700 font-semibold">
                                        {a?.Vagas - a?.VagasRestantes} /{a?.Vagas}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
                <div className="grid grid-cols-1  rounded md:grid-cols-[2fr_2fr_1fr] w-full  gap-2 p-4">
                    <div className="bg-white rounded  min-h-24 flex flex-col justify-between gap-4 p-4">
                        <h2 className="text-center text-2xl font-semibold">Contagem</h2>
                        <div className="flex  gap-4 items-center border-2 justify-between rounded border-blue-400 p-2">
                            <h2 className="font-semibold text-xl">Participantes:</h2>
                            <div className="flex gap-2 items-center">
                                <p className="text-xl">{data.participantes}</p>
                                <i className="bi bi-person-circle text-2xl"></i>
                            </div>
                        </div>
                        <div className="flex  gap-4 items-center border-2 justify-between rounded border-blue-400 p-2">
                            <h2 className="font-semibold text-xl">Atividades:</h2>
                            <div className="flex gap-2 items-center">
                                <p className="text-xl">{data.atividades}</p>
                                <i className="bi bi-person-arms-up text-2xl"></i>
                            </div>
                        </div>
                        <div className="flex  gap-4 items-center border-2 justify-between rounded border-blue-400 p-2">
                            <h2 className="font-semibold text-xl">Inscrições:</h2>
                            <div className="flex gap-2 items-center">
                                <p className="text-xl">{data.atividades}</p>
                                <i className="bi bi-person-arms-up text-2xl"></i>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-col  p-2 rounded gap-2 justify-center">
                        <h2 className="text-center text-2xl font-semibold">Menor Aderencia</h2>
                        <div className="bg-red-200 rounded px-4 grid grid-cols-2 grid-rows-2  p-2">
                            <div className="flex gap-4 justify-center items-center col-span-2 row-span-2">
                                <div className="flex  justify-between w-full items-center">
                                    <h2 className="text-center text-xl font-semibold text-slate-800">Nome:</h2>
                                    <p> {data.menorAderencia?.Nome ?? "-"}</p>
                                </div>
                                <div className="flex  justify-between w-full items-center">
                                    <h2 className="text-center text-xl font-semibold">Aderencia:</h2>
                                    <p className="text-center text-slate-800 font-semibold">{data.menorAderencia?.aderencia}%</p>
                                </div>
                            </div>
                            <div className="flex row-span-2 col-span-2 justify-between mx-auto w-full gap-4 grid-cols-[2fr_1fr]">
                                <div className="flex  justify-between w-full items-center">
                                    <h2 className="text-center text-xl font-semibold">Data:</h2>
                                    <p className="text-center text-slate-800 font-semibold">{getDataFormatada(data.menorAderencia?.Data)}</p>
                                </div>

                                <div className=" flex items-center justify-between w-full">
                                    <p className="font-semibold text-xl">Inscritos: </p>
                                    <p className="rounded text-slate-700 font-semibold">
                                        {data.menorAderencia?.vagas - data.menorAderencia?.vagasRestantes} /{data.menorAderencia?.vagas}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=" min-h-24">
                        <img src="/imagens_Coronel_Fabriciano_03.png" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}


export  function DashboardAdminV4({
    data = {
        atividades: 0,
        participantes: 0,
        totalInscricoes: 0,
        menorAderencia: null,
        proximas: [],
        listaAtividades: [],
        listaParticipantes: [],
    },

    onNovaAtividade,
    onNovoParticipante,
    onVerAtividades,
    onVerParticipantes,
    onEditarAtividade,
    onExcluirAtividade,
    onDetalhesAtividade,
    onEditarParticipante,
    onExcluirParticipante,
    onDetalhesParticipante,
}) {
    const [filtroAtividades, setFiltroAtividades] = useState("");
    const [filtroParticipantes, setFiltroParticipantes] = useState("");

    const atividades = data.listaAtividades ?? [];
    const participantes = data.listaParticipantes ?? [];
    const proximas = data.proximas ?? [];
    const menor = data.menorAderencia;

    const formatarData = (valor) => {
        if (!valor) return "Data não definida";

        const dataObj = new Date(valor);

        if (Number.isNaN(dataObj.getTime())) return "Data inválida";

        return dataObj.toLocaleDateString("pt-BR", {
            timeZone: "UTC",
        });
    };

    const formatarHorario = (valor) => {
        if (!valor) return null;
        return valor;
    };

    const getNome = (item) =>
        item?.Nome ?? item?.nome ?? "Sem nome";

    const getData = (item) =>
        item?.Data ?? item?.data ?? item?.dataAtividade;

    const getVagas = (item) =>
        Math.max(0, Number(item?.Vagas ?? item?.vagas ?? 0));

    const getRestantes = (item) =>
        Math.min(
            getVagas(item),
            Math.max(
                0,
                Number(
                    item?.VagasRestantes ??
                    item?.vagasRestantes ??
                    0
                )
            )
        );

    const getInscritos = (item) => {
        if (item?.Inscritos != null) {
            return Number(item.Inscritos);
        }

        if (item?.inscritos != null) {
            return Number(item.inscritos);
        }

        return Math.max(0, getVagas(item) - getRestantes(item));
    };

    const getOcupacao = (item) => {
        const vagas = getVagas(item);

        if (vagas <= 0) return 0;

        return Math.min(
            100,
            Math.round((getInscritos(item) / vagas) * 100)
        );
    };

    const atividadesFiltradas = useMemo(() => {
        const termo = filtroAtividades.toLowerCase().trim();

        return atividades.filter((item) =>
            getNome(item).toLowerCase().includes(termo)
        );
    }, [atividades, filtroAtividades]);

    const participantesFiltrados = useMemo(() => {
        const termo = filtroParticipantes.toLowerCase().trim();

        return participantes.filter((item) => {
            const nome = String(
                item?.Nome ?? item?.nome ?? ""
            ).toLowerCase();

            const email = String(
                item?.Email ?? item?.email ?? ""
            ).toLowerCase();

            return (
                nome.includes(termo) ||
                email.includes(termo)
            );
        });
    }, [participantes, filtroParticipantes]);

    const Botao = ({
        children,
        onClick,
        variante = "secundario",
        className = "",
    }) => {
        const estilos = {
            primario:
                "bg-blue-600 text-white hover:bg-blue-700",
            secundario:
                "bg-white text-blue-800 border border-blue-200 hover:bg-blue-50",
            perigo:
                "bg-red-50 text-red-700 hover:bg-red-100",
        };

        return (
            <button
                type="button"
                onClick={onClick}
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${estilos[variante]} ${className}`}
            >
                {children}
            </button>
        );
    };

    const CartaoIndicador = ({
        titulo,
        valor,
        descricao,
        icone,
    }) => (
        <article className="flex min-w-0 items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <i className={`bi ${icone} text-2xl`} aria-hidden="true" />
            </div>

            <div className="min-w-0">
                <p className="text-sm font-medium text-slate-500">
                    {titulo}
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-900">
                    {valor}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                    {descricao}
                </p>
            </div>
        </article>
    );

    const CartaoOcupacao = ({ item }) => {
        const inscritos = getInscritos(item);
        const vagas = getVagas(item);
        const ocupacao = getOcupacao(item);

        return (
            <article className="flex min-w-0 flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="break-words font-semibold text-slate-900">
                        {getNome(item)}
                    </h3>

                    <span className="shrink-0 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-800">
                        {ocupacao}%
                    </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
                    <i className="bi bi-calendar-event" aria-hidden="true" />
                    <span>{formatarData(getData(item))}</span>

                    {item?.Horario || item?.horario ? (
                        <>
                            <span aria-hidden="true">·</span>
                            <i className="bi bi-clock" aria-hidden="true" />
                            <span>
                                {formatarHorario(
                                    item?.Horario ?? item?.horario
                                )}
                            </span>
                        </>
                    ) : null}
                </div>

                <div className="mt-auto pt-1">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-sm">
                        <span className="text-slate-600">
                            Inscrições
                        </span>

                        <span className="font-semibold text-slate-800">
                            {inscritos} / {vagas}
                        </span>
                    </div>

                    <div
                        className="h-2 overflow-hidden rounded-full bg-slate-100"
                        role="progressbar"
                        aria-label={`Ocupação de ${getNome(item)}`}
                        aria-valuenow={ocupacao}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        <div
                            className={`h-full rounded-full transition-all ${
                                ocupacao >= 90
                                    ? "bg-amber-500"
                                    : "bg-blue-600"
                            }`}
                            style={{ width: `${ocupacao}%` }}
                        />
                    </div>
                </div>
            </article>
        );
    };

    const BlocoVazio = ({ mensagem }) => (
        <div className="flex min-h-32 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
            <i
                className="bi bi-inbox text-3xl text-slate-400"
                aria-hidden="true"
            />
            <p className="text-sm text-slate-600">{mensagem}</p>
        </div>
    );

    const CartaoAtividade = ({ item }) => (
        <article className="flex min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-md">
            <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <i className="bi bi-calendar-event text-xl" aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="break-words font-semibold text-slate-900">
                        {getNome(item)}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                        {item?.Descricao ??
                            item?.descricao ??
                            "Sem descrição informada"}
                    </p>
                </div>
            </div>

            <div className="my-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Data</p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                        {formatarData(getData(item))}
                    </p>
                </div>

                <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Inscrições</p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                        {getInscritos(item)} / {getVagas(item)}
                    </p>
                </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-3">
                <Botao
                    onClick={() => onDetalhesAtividade?.(item)}
                    className="flex-1"
                >
                    <i className="bi bi-eye" aria-hidden="true" />
                    Detalhes
                </Botao>

                <Botao
                    onClick={() => onEditarAtividade?.(item)}
                    className="flex-1"
                >
                    <i className="bi bi-pencil" aria-hidden="true" />
                    Editar
                </Botao>

                <Botao
                    variante="perigo"
                    onClick={() => onExcluirAtividade?.(item)}
                    className="w-full"
                >
                    <i className="bi bi-trash" aria-hidden="true" />
                    Excluir
                </Botao>
            </div>
        </article>
    );

    const CartaoParticipante = ({ item }) => (
        <article className="flex min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                    <i className="bi bi-person text-2xl" aria-hidden="true" />
                </div>

                <div className="min-w-0">
                    <h3 className="break-words font-semibold text-slate-900">
                        {item?.Nome ?? item?.nome ?? "Sem nome"}
                    </h3>

                    <p className="break-all text-sm text-slate-500">
                        {item?.Email ?? item?.email ?? "Sem e-mail"}
                    </p>
                </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-3">
                <Botao
                    onClick={() => onDetalhesParticipante?.(item)}
                    className="flex-1"
                >
                    <i className="bi bi-eye" aria-hidden="true" />
                    Detalhes
                </Botao>

                <Botao
                    onClick={() => onEditarParticipante?.(item)}
                    className="flex-1"
                >
                    <i className="bi bi-pencil" aria-hidden="true" />
                    Editar
                </Botao>

                <Botao
                    variante="perigo"
                    onClick={() => onExcluirParticipante?.(item)}
                    className="w-full"
                >
                    <i className="bi bi-trash" aria-hidden="true" />
                    Excluir
                </Botao>
            </div>
        </article>
    );

    const ocupacaoMenor = menor
        ? getOcupacao(menor)
        : null;

    return (
        <main className="min-h-screen w-full bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-8">

                {/* CABEÇALHO */}
                <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                            Exp Viva
                        </p>

                        <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                            Painel administrativo
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Acompanhe atividades, inscrições e participantes.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <Botao
                            onClick={onVerAtividades}
                        >
                            <i className="bi bi-calendar-event" aria-hidden="true" />
                            Atividades
                        </Botao>

                        <Botao
                            variante="primario"
                            onClick={onVerParticipantes}
                        >
                            <i className="bi bi-people" aria-hidden="true" />
                            Participantes
                        </Botao>
                    </div>
                </header>

                {/* INDICADORES */}
                <section aria-labelledby="titulo-resumo">
                    <div className="mb-4">
                        <h2
                            id="titulo-resumo"
                            className="text-lg font-bold"
                        >
                            Visão geral
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Resumo dos dados cadastrados no sistema.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        <CartaoIndicador
                            titulo="Participantes"
                            valor={data.participantes ?? 0}
                            descricao="Total de cadastrados"
                            icone="bi-people"
                        />

                        <CartaoIndicador
                            titulo="Atividades"
                            valor={data.atividades ?? 0}
                            descricao="Total informado pelo sistema"
                            icone="bi-calendar2-event"
                        />

                        <CartaoIndicador
                            titulo="Inscrições"
                            valor={data.totalInscricoes ?? 0}
                            descricao="Inscrições realizadas"
                            icone="bi-clipboard-check"
                        />
                    </div>
                </section>

                {/* PRÓXIMAS ATIVIDADES */}
                <section aria-labelledby="titulo-proximas">
                    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                        <div>
                            <h2
                                id="titulo-proximas"
                                className="text-lg font-bold"
                            >
                                Próximas atividades
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Acompanhe datas e ocupação das vagas.
                            </p>
                        </div>

                        <Botao onClick={onVerAtividades}>
                            Ver todas
                            <i className="bi bi-arrow-right" aria-hidden="true" />
                        </Botao>
                    </div>

                    {proximas.length === 0 ? (
                        <BlocoVazio
                            mensagem="Nenhuma próxima atividade encontrada."
                        />
                    ) : (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {proximas.slice(0, 3).map((item, index) => (
                                <CartaoOcupacao
                                    key={item?.id ?? item?.Id ?? `${getNome(item)}-${index}`}
                                    item={item}
                                />
                            ))}
                        </div>
                    )}
                </section>

                {/* ALERTA DE MENOR OCUPAÇÃO */}
                <section aria-labelledby="titulo-atencao">
                    <div className="mb-4">
                        <h2
                            id="titulo-atencao"
                            className="text-lg font-bold"
                        >
                            Atenção administrativa
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Identifique atividades que podem precisar de divulgação.
                        </p>
                    </div>

                    {!menor ? (
                        <BlocoVazio
                            mensagem="Não há dados suficientes para identificar uma atividade com menor ocupação."
                        />
                    ) : (
                        <article className="rounded-xl border border-amber-200 bg-white p-5 shadow-sm">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex min-w-0 items-start gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                                        <i className="bi bi-exclamation-circle text-xl" aria-hidden="true" />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-sm font-medium text-slate-500">
                                            Atividade com menor ocupação
                                        </p>

                                        <h3 className="mt-1 break-words text-lg font-bold text-slate-900">
                                            {getNome(menor)}
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-500">
                                            {formatarData(getData(menor))}
                                        </p>
                                    </div>
                                </div>

                                <div className="sm:min-w-56">
                                    <div className="mb-2 flex items-center justify-between gap-3">
                                        <span className="text-sm text-slate-600">
                                            Ocupação
                                        </span>

                                        <span className="font-bold text-slate-900">
                                            {ocupacaoMenor}%
                                        </span>
                                    </div>

                                    <div
                                        className="h-2 overflow-hidden rounded-full bg-slate-100"
                                        role="progressbar"
                                        aria-label="Ocupação da atividade com menor ocupação"
                                        aria-valuenow={ocupacaoMenor}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="h-full rounded-full bg-amber-500"
                                            style={{
                                                width: `${ocupacaoMenor}%`,
                                            }}
                                        />
                                    </div>

                                    <p className="mt-2 text-right text-xs text-slate-500">
                                        {getInscritos(menor)} de {getVagas(menor)} vagas
                                    </p>
                                </div>
                            </div>
                        </article>
                    )}
                </section>


            </div>
        </main>
    );
}

function DashboardAdminV5({data = {atividades:0, participantes:0,menorAderencia: null, proximas:[]}}){
    useEffect(() => {
      console.log(data)
    },[data]);

    if(!data.proximas) return null;

    return (
        <>
            <div className="w-full max-w-7xl mt-8 bg-slate-100 rounded-2xl   grid grid-cols-1  gap-2">
                <h2 className="text-2xl font-semibold text-center mt-4">Visão geral</h2>
                <div className="w-full h-full grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-3 p-4 min-h-24">
                    <h2 className="row-span-2 col-span-3 text-center font-semibold text-xl">Proximas atividades:</h2>
                    {data.proximas.map((a)=>(
                        <div className="bg-white px-4 grid grid-cols-2 grid-rows-2 row-span-1  p-4 rounded-xl border border-slate-200 shadow gap-2">
                            <i className="bi bi-calendar text-xl"></i>
                            <div className="flex gap-4  items-center col-span-2 row-span-2">
                                <h2 className="text-center text-xl font-semibold text-slate-800">Nome:</h2>
                                <p> {a?.Nome ?? "-"}</p>
                            </div>
                            <div className="flex row-span-2 col-span-2 justify-between mx-auto w-full gap-4 grid-cols-[2fr_1fr]">
                                <div className="flex  justify-between w-full items-center">
                                    <h2 className="text-center text-xl font-semibold">Data:</h2>
                                    <p className="text-center text-slate-800 font-semibold">{getDataFormatada(a?.Data)}</p>
                                </div>
                                <div className=" flex items-center justify-between w-full">
                                    <p className="font-semibold text-xl">Inscritos: </p>
                                    <p className="rounded text-slate-700 font-semibold">
                                        {a?.Vagas - a?.VagasRestantes} /{a?.Vagas}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-center text-2xl font-semibold">Contagem</h2>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="w-full p-4 bg-white rounded border-slate-200 border shadow-sm grid grid-cols-2">
                            <div className="size-8 flex justify-center items-center m-auto">
                                <i className="bi bi-person-fill text-2xl"></i>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold ">Participantes:</h2>
                                <p className="text-2xl">{data.participantes}</p>
                                <p className="text-slate-600 text-sm">total de cadastros</p>
                            </div>
                        </div>
                        <div className="w-full p-4 bg-white rounded border-slate-200 border shadow-sm grid grid-cols-2">
                            <div className="size-8 flex justify-center items-center m-auto">
                                <i className="bi bi-person-arms-up text-2xl"></i>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold ">Atividades:</h2>
                                <p className="text-xl">{data.atividades}</p>
                                <p className="text-slate-600 text-sm">total de atividades</p>
                            </div>
                        </div>
                        <div className="w-full p-4 bg-white rounded border-slate-200 border shadow-sm grid grid-cols-2">
                            <div className="size-8 flex justify-center items-center m-auto">
                                <i className="bi bi-person-fill text-2xl"></i>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold ">Inscrições:</h2>
                                <p className="text-xl">75</p>
                                <p className="text-slate-600 text-sm">total de inscrições ativa ( e fake )</p>
                            </div>
                        </div>
                    </div>
                </div>


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
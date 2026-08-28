import { useEffect, useState } from "react"
import { AtividadeService } from "../../Services/AtividadeService";
import Grid from "../../Components/Grid";
import ConfirmModal from "../../Components/ConfirmModal";
import formatDateIso from "../../Shared/formatDateIso";
import formatTelefone from "../../Shared/formatTelefone";

export default function Atividades(){


    const actions = (r) => {
        return (
            <div className="flex gap-4 p-2">
                <i className="bi bi-eye-fill cursor-pointer text-blue-500 hover:text-blue-600 text-xl" onClick={() => {
                  setDetails(r)
                }}></i>
                <i className="bi bi-pencil-fill cursor-pointer text-yellow-500 hover:text-yellow-600 text-xl" onClick={() => {
                    setDataToEdit(r);
                    setOpenForm(true)
                }}></i>
                <i className="bi bi-trash-fill cursor-pointer text-red-500 hover:text-red-600 text-xl" onClick={() => {
                    setIdToDelete(r.id)
                }}></i>
            </div>
        )
    };

    const [atividades,setAtividades] = useState([]);
    const [idToDelete, setIdToDelete] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [dataToEdit, setDataToEdit] = useState(null);

    const [columns,setColumns ] = useState([])

    const [largura,setLargura] = useState(0);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const handleResize = ()=>{
            setLargura(window.innerWidth)
        }

        window.addEventListener("resize",handleResize);

        
    },[])

    useEffect(() => {
      if(largura >= 320 && largura <= 600){
        setColumns([
        {nome: "nome", label: "Nome"},
        ])
      }else if(largura >= 600 && largura < 900){
            setColumns([
                {nome: "nome", label: "Nome"},
                {nome: "vagas", label: "Vagas"},
            ])
      }else {
        setColumns([
            {nome: "nome", label: "Nome"},
            {nome: "quantidade_vagas", label: "Tot. Vagas"},
            {nome: "vagas", label: "Vagas"},
            {nome: "dataEvento", label: "Data", render: formatDateIso}
            ])
        }
    },[largura])

    useEffect(() => {
      loadData()
    },[]);

    async function handleDeleteAtividade(){
        
        const res = await AtividadeService.excluir(idToDelete);

        if(res){
            
            alert(res.message || "Excluido");
            await loadData()
        }else{
            alert("Houve um erro")
        }

        setIdToDelete(null);
    }

    async function handleSaveAtividade(e){
        let res = null;

        if(dataToEdit != null){
            res = await AtividadeService.editar(e);
        }else{
            res = await AtividadeService.criar(e);
        }

        if(res){
            
            alert(res.message);
            await loadData()
        }else{
            alert("Houve um erro")
        }

        setDataToEdit(null);
        setOpenForm(false);
    }


    async function loadData(){
        const res = await AtividadeService.listar();

        if(res){
            const json = await res.json();
            
            setAtividades([...json.data])
            //alert(json.message ?? "sucesso")
        }else{
            //alert("erro ao buscar registros")
        }
    }

    return (
        <>
            <div className="w-full h-full flex flex-col gap-4 p-4 items-center justify-center">
                <h1 className="text-4xl font-semibold">Gerenciamento de Atividades</h1>
                <div className="flex gap-8 items-center">
                    <p className="text-xl">Crie, Edite, Exclua Atividades</p>
                    <button onClick={() => {
                        console.log('clicou')
                            setDataToEdit(null)
                            setOpenForm(true)
                        }}>
                        <i 
                        className="bi bi-plus-square-fill text-blue-500 text-4xl hover:text-blue-600 cursor-pointer"></i>                    
                    </button>
                </div>

                <Grid  columns={columns} rows={atividades} actions={actions}/>

                <ConfirmModal 
                    open={idToDelete}  
                    onCancel={() => {
                    setIdToDelete(null)
                    }}
                    
                    onConfirm={handleDeleteAtividade}
                />

                <AtividadeForm  
                    open={openForm}
                    initialData={dataToEdit}
                    onCancel={() => {
                      setDataToEdit(null)
                      setOpenForm(false)
                    }}
                    onSave={handleSaveAtividade}
                />

                <Details 
                    open={details}
                    details={details}
                    onClose={() => {
                      setDetails(null)
                    }}
                />
            </div>


        </>
    )
}


function AtividadeForm({initialData,onSave,onCancel,open}){
    if(!open) return null;

    const [formData,setFormData] = useState({id:"",nome: "",dataEvento:"",vagas:0,descricao:""});

    useEffect(() => {
        if(initialData){
        let dataEvento = getDataParaInput(initialData?.dataEvento );

        // TODO: ARRUMAR ESSE BUG DA DATA

        setFormData({
            id: initialData?.id ?? "",
            nome: initialData?.nome ?? "",
            vagas: initialData?.vagas ?? 0,
            descricao: initialData?.descricao ?? "",
            dataEvento: dataEvento
        })
    }
    },[initialData])

    function handleInputChange(e){
        const nome = e.target.name;
        const value = e.target.value;
        console.log(nome,value)
        setFormData((prev) => ({
            ...prev,
            [nome]: value
        }))
    }

    return(
        <>
            <div className="bg-black/40 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
                <div className="bg-white rounded p-4 max-w-md flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold text-center">{initialData ? "Editar" : "Criar"}</h2>

                    <form className="flex flex-col gap-4 ">
                        <section className="flex gap-4 justify-between">
                            <label className="font-semibold text-md" htmlFor="nome">Nome:</label>
                            <input className="border rounded p-2" type="text" name="nome" value={formData.nome} onChange={handleInputChange}/>
                        </section>           
                        <section className="flex gap-4 justify-between">
                            <label className="font-semibold text-md" htmlFor="descricao">Descricao:</label>
                            <input className="border rounded p-2" type="text" name="descricao" value={formData.descricao} onChange={handleInputChange}/>
                        </section>
                        <section className="flex gap-4 justify-between">
                            <label className="font-semibold text-md" htmlFor="vagas">Vagas:</label>
                            <input className="border rounded p-2" type="number" name="vagas" value={formData.vagas} onChange={handleInputChange}/>
                        </section>
                        <section className="flex gap-4 justify-between">
                            <label className="font-semibold text-md" htmlFor="dataEvento">DataEvento:</label>
                            <input className="border rounded p-2" type="datetime-local" name="dataEvento" value={formData.dataEvento} onChange={handleInputChange}/>
                        </section>
                        <section className="flex gap-4 justify-between mt-4">
                           <button onClick={(e) => {
                                    e.preventDefault()
                                    onSave(formData)
                                }} className="p-4 rounded text-white bg-blue-500 hover:bg-blue-600 cursor-pointer">Confirmar</button>
                            <button onClick={(e) => {
                                    e.preventDefault()
                                    onCancel()
                                }} className="p-4 rounded text-white bg-red-500 hover:bg-red-600 cursor-pointer">Cancelar</button>
                        </section>
                    </form>
                </div>
            </div>
        </>
    )
}

function getDataParaInput(d){
    const date = new Date(d ?? "");
    const utc = date.getTimezoneOffset() * 60000;

    const dataFormatada = date.getTime() - utc;

    return new Date(dataFormatada).toISOString().slice(0,16);
}


function Details({ details, open, onClose }) {
    if (!details || !open) return null;

    const formatarData = (dataStr) => {
        if (!dataStr) return "-";
        return new Date(dataStr).toLocaleString("pt-BR", {
            dateStyle: "short",
            timeStyle: "short",
        });
    };

    return (
        <div className="bg-black/40 fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto flex flex-col gap-4 shadow-xl">
                <div className="flex justify-between items-center pb-3">
                    <h1 className="text-xl font-semibold">
                        Detalhes da Atividade: <strong>{details?.nome ?? "-"}</strong>
                    </h1>
                    <button
                        onClick={onClose}
                        className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold rounded-md w-9 h-9 flex items-center justify-center transition-colors"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-3 border rounded-md border-gray-300 flex flex-col gap-2 bg-gray-50">
                    <p><strong>Descrição:</strong> {details?.descricao ?? "Sem descrição"}</p>
                    <p><strong>Data do Evento:</strong> {formatarData(details?.dataEvento)}</p>
                    <p><strong>Vagas Disponíveis:</strong> {details?.vagas}</p>
                    <p><strong>Total de Vagas:</strong> {details?.quantidade_vagas}</p>
                    <p><strong>Status:</strong> {details?.ativo ? "Ativo" : "Inativo"}</p>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-gray-700">Participantes Inscritos ({details?.atividade_participante?.length || 0}):</h2>
                    
                    {details?.atividade_participante && details.atividade_participante.length > 0 ? (
                        <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                            {details.atividade_participante.map((item) => {
                                const p = item.participante;
                                return (
                                    <div key={item.id} className="p-2 border rounded border-gray-200 bg-white text-sm">
                                        <p><strong>Nome:</strong> {p?.nome}</p>
                                        <p><strong>Email:</strong> {p?.email}</p>
                                        <p><strong>Telefone:</strong> {formatTelefone(p?.telefone) ?? "-"}</p>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="text-sm text-gray-500">Nenhum participante inscrito nesta atividade.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
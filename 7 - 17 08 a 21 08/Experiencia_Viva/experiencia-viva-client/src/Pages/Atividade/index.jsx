import { useEffect, useState } from "react"
import { AtividadeService } from "../../Services/AtividadeService";
import Grid from "../../Components/Grid";
import ConfirmModal from "../../Components/ConfirmModal";
import formatDateIso from "../../Shared/formatDateIso";

export default function Atividades(){

    const columns = [
        {nome: "nome", label: "Nome"},
        {nome: "quantidade_vagas", label: "Tot. Vagas"},
        {nome: "vagas", label: "Vagas"},
        {nome: "dataEvento", label: "Data", render: formatDateIso}
    ];

    const actions = (r) => {
        return (
            <div className="flex gap-4 p-2">
                <i className="bi bi-eye-fill cursor-pointer text-blue-500 hover:text-blue-600 text-xl" onClick={() => {
                  alert('Funcionalidade em desenvolvimento ( MOD D)')
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
            <div className="w-full h-full flex flex-col gap-4 p-4 items-center">
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
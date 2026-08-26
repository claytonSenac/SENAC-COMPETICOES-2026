import { useEffect, useState } from "react"
import Grid from "../../Components/Grid";
import ConfirmModal from "../../Components/ConfirmModal";
import formatTelefone from "../../Shared/formatTelefone";
import { participanteService } from "../../Services/ParticipanteService";

export default function Participantes(){

    const columns = [
        {nome: "nome", label: "Nome"},
        {nome: "email", label: "email"},
        {nome: "telefone", label: "Telefone", render: formatTelefone}
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

    const [Participantes,setParticipantes] = useState([]);
    const [idToDelete, setIdToDelete] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [dataToEdit, setDataToEdit] = useState(null);


    
    useEffect(() => {
      loadData()
    },[]);

    async function handleDeleteParticipante(){
        
        const res = await participanteService.excluir(idToDelete);

        if(res){
            
            alert(res.message || "Excluido");
            await loadData()
        }else{
            alert("Houve um erro")
        }

        setIdToDelete(null);
    }

    async function handleSaveParticipante(e){
        let res = null;

        if(dataToEdit != null){
            res = await participanteService.editar(e);
        }else{
            res = await participanteService.criar(e);
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
        const res = await participanteService.listar();

        if(res){
            const json = await res.json();
            
            setParticipantes([...json.data])
            //alert(json.message ?? "sucesso")
        }else{
            //alert("erro ao buscar registros")
        }
    }

    return (
        <>
            <div className="w-full h-full flex flex-col gap-4 p-4 items-center">
                <h1 className="text-4xl font-semibold">Gerenciamento de Participantes</h1>
                <div className="flex gap-8 items-center">
                    <p className="text-xl">Crie, Edite, Exclua Participantes</p>
                    <button onClick={() => {
                        console.log('clicou')
                            setDataToEdit(null)
                            setOpenForm(true)
                        }}>
                        <i 
                        className="bi bi-plus-square-fill text-blue-500 text-4xl hover:text-blue-600 cursor-pointer"></i>                    
                    </button>
                </div>

                <Grid  columns={columns} rows={Participantes} actions={actions}/>

                <ConfirmModal 
                    open={idToDelete}  
                    onCancel={() => {
                    setIdToDelete(null)
                    }}
                    
                    onConfirm={handleDeleteParticipante}
                />

                <ParticipanteForm  
                    open={openForm}
                    initialData={dataToEdit}
                    onCancel={() => {
                      setDataToEdit(null)
                      setOpenForm(false)
                    }}
                    onSave={handleSaveParticipante}
                />

            </div>


        </>
    )
}


function ParticipanteForm({initialData,onSave,onCancel,open}){
    if(!open) return null;

    const [formData,setFormData] = useState({id:"",nome: "",email:"",telefone:""});

    useEffect(() => {
        if(initialData){


        setFormData({
            id: initialData?.id ?? "",
            nome: initialData?.nome ?? "",
            email: initialData?.email,
            telefone: initialData?.telefone ?? "",
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
                            <label className="font-semibold text-md" htmlFor="email">email:</label>
                            <input className="border rounded p-2" type="text" name="email" value={formData.email} onChange={handleInputChange}/>
                        </section>
                        <section className="flex gap-4 justify-between">
                            <label className="font-semibold text-md" htmlFor="vagas">telefone:</label>
                            <input className="border rounded p-2" maxLength={11} type="text" name="telefone" value={formData.telefone} onChange={handleInputChange}/>
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
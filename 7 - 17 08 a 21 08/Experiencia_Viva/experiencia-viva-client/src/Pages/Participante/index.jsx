import { useEffect, useState } from "react"
import Grid from "../../Components/Grid";
import ConfirmModal from "../../Components/ConfirmModal";
import formatTelefone from "../../Shared/formatTelefone";
import { participanteService } from "../../Services/ParticipanteService";

export default function Participantes(){

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

    const [Participantes,setParticipantes] = useState([]);
    const [idToDelete, setIdToDelete] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [details, setDetails] = useState(null);

    const [columns,setColumns ] = useState([])

    const [largura,setLargura] = useState(0);

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
                {nome: "email", label: "email"},
            ])
        }else {
        setColumns([
        {nome: "nome", label: "Nome"},
        {nome: "email", label: "email"},
        {nome: "telefone", label: "Telefone", render: formatTelefone}
    ])
        }
    },[largura])
    
    
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
            <div className="w-full h-full flex flex-col gap-4 p-4 items-center justify-center">
                <h1 className="text-4xl font-semibold">Gerenciamento de Participantes</h1>
                <div className="flex gap-8 items-center">
                    <p className="text-xl">Crie, Edite, Exclua Participantes</p>
                    {/* <button onClick={() => {
                        console.log('clicou')
                            setDataToEdit(null)
                            setOpenForm(true)
                        }}>
                        <i 
                        className="bi bi-plus-square-fill text-blue-500 text-4xl hover:text-blue-600 cursor-pointer"></i>                    
                    </button> */}
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


function Details({details,open,onClose}){
    if(!details || !open) return null;
    return (
        <>
            <div className="bg-black/40 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
                <div className="bg-white rounded p-4 max-w-md flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <h1>Detalhes do <strong>{details?.nome ?? "-"}</strong></h1>
                        <button onClick={() => {
                          onClose()
                        }} className="p-2 cursor-pointer bg-red-500 text-white font-bold rounded w-12 h-12">X</button>
                    </div>
                    <div className="p-2 border rounded border-gray-400">
                        <p><strong>Nome: </strong> {details?.nome}</p>
                        <p><strong>Email: </strong> {details?.email}</p>
                        <p><strong>Telefone: </strong> {formatTelefone(details?.telefone)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
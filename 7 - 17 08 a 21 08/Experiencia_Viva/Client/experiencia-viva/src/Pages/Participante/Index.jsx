import { useEffect, useState } from "react";
import Grid from "../../Components/Grid";
import ConfirmModal from "../../Components/ConfirmModal";
import { formatTelefone } from "../../Shared/formatTelefone";
import participanteService from "../../Services/ParticipanteService";

const columns = [
    {label: "Nome",nome: "nome"},
    {label: "Email", nome: "email"},
    {label: "Telefone",nome: "telefone", render: formatTelefone},
]


export default function ParticipantePage(){

    const [Participante,setParticipante] = useState([]);

    const [idToDelete, setIdToDelete] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [dataToEdit,setDataToEdit] = useState(null);
    const [details,setDetails] = useState(null);

    useEffect(() => {
        loadParticipantes()
    },[]);

    async function loadParticipantes(){
        const res = await participanteService.listar();
        
        if(res != null){
            setParticipante([...res.data]);
        }
    }

    async function handleExcluir(){
        if(!idToDelete) return null;
        const res = await participanteService.excluir(idToDelete);
        if(res){
            alert(res.message ?? "excluido");
            setIdToDelete(null);
            await loadParticipantes();
        }
    }

    async function handleSaveOrEdit(e){
        let res 
        if(dataToEdit && e.id != null){
             res = await participanteService.editar(e);
        }else{
            res = await participanteService.criar(e);
        }
        
        if(res.code == 201 || res.code == 200){
            alert(res.message ?? "Sucesso");
            setOpenForm(false);
            await loadParticipantes();
            setDataToEdit({...null})
        }else{
            alert(res.message ?? "Erro")
        }
    }

    const actions = (row)=> {
        return(
            <div className="flex gap-4">
                <i className="bi bi-pencil-fill p-2 text-2xl text-amber-400 cursor-pointer" onClick={() => {
                  setDataToEdit(row);
                  setOpenForm(true)

                }}></i>
                <i className="bi bi-trash-fill p-2 text-2xl text-red-400 cursor-pointer" onClick={() => {
                    setIdToDelete(row.id)
                }}></i>
                <i className="bi bi-eye-fill p-2 text-2xl text-blue-400 cursor-pointer" onClick={() => {
                  setDetails(row)
                }}></i>
            </div>
            )
    }
  
    return (
        <>
        <div className="w-full p-4 flex flex-col items-center justify-center">
            <div className="w-full  flex flex-col gap-4 items-center justify-center">
                <h1 className="text-2xl font-semibold">Gerencie as Participantes</h1>
                <div className="flex gap-4 items-center">
                    <p className="text-gray-600">Crie e Edite as Participantes</p>
                    <button>
                        <i className="bi bi-plus-square-fill text-4xl text-blue-400 cursor-pointer" onClick={() => {
                          setDataToEdit(null)
                          setOpenForm(true)
                        }}></i>
                    </button>
                </div>
                <div>
                    <Grid 
                        columns={columns}
                        actions={actions}
                        rows={Participante}
                        />
                </div>
            </div>
        </div>
            <ConfirmModal
                Open={idToDelete}  
                onCancel={() => {
                  setIdToDelete(null)
                }}
                onConfirm={ async () => {
                  await handleExcluir()
                }}
            />

            <ParticipanteForm 
                open={openForm}
                onSave={handleSaveOrEdit}
                initialData={dataToEdit}
                onCancel={() => {
                  setOpenForm(false);
                  setDataToEdit({...null})
                }}
            />
            <ViewDetails 
                open={details}
                data={details}
                onClose={() => {
                  setDetails(null)
                }}
            />
        </>
    )
}


function ParticipanteForm({open,onSave, initialData, onCancel}){
    const [formData,setFormData] = useState({id:"",nome:"",email:"",telefone:""});

    useEffect(() => {
        if(!initialData) return;

        
        setFormData({
            id: initialData?.id ?? null,
            nome: initialData?.nome ?? "",
            email: initialData?.email ?? "",
            telefone: initialData?.telefone ?? ""
        })
    },[initialData])

    function handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    if(!open) return null;
    return (
        <>
            <div className="fixed w-screen h-full flex bg-black/40 items-center justify-center z-50">
                <div className="bg-white p-4 flex flex-col gap-4 items-center rounded">
                    <h2 className="text-2xl font-semibold">{initialData ? 'Editar' : 'Criar Participante'}</h2>
                   <form className="flex flex-col gap-4 ">
                        <section className="flex gap-4 justify-between items-center">
                            <label className="font-semibold" htmlFor="nome">Nome:</label>
                            <input 
                             className="border rounded p-2"
                            onChange={handleInputChange} type="text" value={formData.nome} name="nome" />
                        </section>
                        <section className="flex gap-4 justify-between items-center">
                            <label className="font-semibold" htmlFor="email">Email:</label>
                            <input 
                             className="border rounded p-2"
                            onChange={handleInputChange} type="text" value={formData.email} name="email" />
                        </section>
                        <section className="flex gap-4 justify-between items-center">
                            <label className="font-semibold" htmlFor="data">Telefone:</label>
                            <input 
                             className="border rounded p-2"
                            onChange={handleInputChange} type="text" maxLength={11} value={formData.telefone} name="telefone" />
                        </section>
                        <section className="flex gap-4 justify-between items-center">
                            <button 
                                className="bg-blue-400 p-2 w-32 text-white cursor-pointer mx-auto rounded hover:bg-blue-500"
                                onClick={(e)=>{
                                    e.preventDefault()
                                    onSave(formData)
                                }}
                            >Salvar</button>
                            <button
                            className="bg-red-400 p-2 w-32 text-white cursor-pointer mx-auto rounded hover:bg-red-500"
                            onClick={() => {
                              onCancel()
                            }}>Cancelar</button>
                        </section>
                   </form>
                </div>
            </div>
        </>
    )
}

function ViewDetails({open,data,onClose}){
    if(!data || !open) return null;

    return (
    <>
        <div className="fixed w-screen h-full flex bg-black/40 items-center justify-center z-50">
            <div className="bg-white p-8 flex flex-col gap-4 items-center rounded">
               <div className="w-full flex gap-4 items-center">
                    <h2 className="text-xl font-semibold">Participante: #{data.nome}</h2>
                    <button className="bg-red-400 p-2 rounded cursor-pointer" onClick={() => {
                      onClose()
                    }}>Fechar</button>
               </div>
               <div className="flex flex-col gap-4">
                    <p className="text-lg"><strong>Nome: </strong>{data.nome}</p>
                    <p className="text-lg"><strong>Email: </strong>{data.email}</p>
                    <p className="text-lg"><strong>Telefone: </strong>{formatTelefone(data.telefone)}</p>
               </div>
            </div>
        </div>
    </>
    )
}

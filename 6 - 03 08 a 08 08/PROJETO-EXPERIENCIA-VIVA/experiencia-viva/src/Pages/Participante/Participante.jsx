import { useEffect, useState } from "react";
import { create, deleteParticipante, getParticipantes, update } from "../../Services/ParticipanteService";
import ConfirmModal from "../../Services/Utils/ConfirmModal";
import { formatarTelefone } from "../../Services/Utils/Formats";
import Grid from "../../Components/Grid";

export default function Participante(){
    const [participantes, setParticipantes]= useState([]);
    const [idToDelete, setIdToDelete] = useState(null);
    const [creatingMode, setCreatingMode] = useState(true);
    const [formOpen,setFormOpen] = useState(false);
    const [initialData, setInitialData] = useState(null);

        const columns = [

            {label: "Nome",value:"nome"},
            {label: "Email",value:"email"},
            {label: "Telefone",value:"telefone", render: (e) => formatarTelefone(e)}
        ]
    
        const actions = (row) => {
            return (
            <div className="flex gap-2">
                <button className="p-2 rounded bg-primary text-white cursor-pointer" onClick={() => {
                    setFormOpen(true);
                    setInitialData(row);
                    setCreatingMode(false)
                }}>
                    <i className="bi bi-pencil-fill"></i>                                        
                </button>
                <button className="p-2 rounded bg-red-400 text-white cursor-pointer" onClick={() => {
                    setIdToDelete(row.id)
                }}>
                    <i className="bi bi-trash-fill"></i>                                        
                </button>
            </div>
            )
        }

    useEffect(() => {
        const loadData = async ()=>{
            const response = await getParticipantes();

            if(response.ok){
                const data = await response.json();

                setParticipantes([...data.data]);
            }
        }
        loadData();
    },[])
    
    async function handleCreateParticipante(e){
        let res = null;
        if(creatingMode){
            res = await create(e);
        }else{
            res = await update(e); 
        }
        
        if(res.ok){
            alert('criado');
            setFormOpen(false);
            setInitialData(null)

            const response = await getParticipantes();

            if(response.ok){
                const data = await response.json();

                setParticipantes([...data.data]);
            }
        }else{
            const data = await res.json();
            alert(data.text);

        }
    }

    async function handleDeleteParticipante(id){
        const res = await deleteParticipante(id);

        if(res.ok){
            alert('excluido');
             const response = await getParticipantes();
             setIdToDelete(null)

            if(response.ok){
                const data = await response.json();

                setParticipantes([...data.data]);
            }

        }
    }

    return (
        <>
            <div className="w-full flex flex-col items-center  h-full justify-center" >
                <h1 className="text-3xl">Gerenciamento de Participantes</h1>

                <div>
                    <div className="flex justify-end p-2">
                        <button  onClick={() => {
                            setFormOpen(true)
                            setCreatingMode(true);
                            setInitialData(null)
                        }} className="p-2 rounded cursor-pointer text-primary text-4xl">
                            <i className="bi bi-plus-square-fill p-4"></i>
                        </button>
                    </div>
                        <Grid 
                            columns={columns}
                            actions={actions}
                            rows={participantes}
                        />
                </div>
            </div>
            
            {formOpen && (
                <FormParticipante 
                open={formOpen}
                creatingMode={creatingMode}
                initialData={initialData}
                onCancel={() => {
                  setFormOpen(false)
                }}
                onSave={async (e) => {
                    console.log(e)
                     await handleCreateParticipante(e)
                }}
            />
            )}

            <ConfirmModal 
                open={idToDelete}
                onCancel={() => {
                  setIdToDelete(null);
                }}
                onConfirm={
                    async () => {
                        await handleDeleteParticipante(idToDelete)
                    }
                }
            />
        </>
    )
}

function FormParticipante({
        open,
        creatingMode,
        initialData,
        onSave,
        onCancel
    }){
    if(!open) return null;

    const [formData, setFormData] = useState({ nome: "", email: "", telefone: "" }); 

    useEffect(() => { setFormData(initialData ?? { nome: "", email: "", telefone: "" }); }, [initialData]);

    function handleInputChange(e){
        if(!e.target.name) return;
        let name = e.target.name;
        let value = e.target.value;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }));
        console.log(formData)
    }

    return (
        <>
            <div className="w-screen h-screen top-0 left-0 bg-black/40 fixed z-50 items-center justify-center flex flex-col">
                <div className="p-4 flex flex-col gap-4 bg-white rounded">
                   <h2 className="text-center text-2xl"> {creatingMode ? "Criar" : "Editar" }</h2>
                   <form className="flex flex-col gap-4">
                        <section className="flex gap-2 items-center justify-between">
                            <label htmlFor="nome">Nome:</label>
                            <input className="border rounded p-2" type="text" name="nome" value={formData.nome ?? ""} onChange={handleInputChange} />
                        </section>
                        <section className="flex gap-2 items-center justify-between">
                            <label htmlFor="email">email:</label>
                            <input className="border rounded p-2" type="text" name="email" id="email" value={formData.email ?? ""} onChange={handleInputChange} />
                        </section>
                        <section className="flex gap-2 items-center justify-between">
                            <label htmlFor="telefone">telefone:</label>
                            <input className="border rounded p-2" type="text" name="telefone" maxLength={11} id="telefone" value={formData.telefone ?? ""} onChange={handleInputChange} />
                        </section>
                        <section className="flex gap-4 items-center justify-center">
                            <button className="bg-red-400 p-2 rounded  cursor-pointer" onClick={() => {
                              onCancel()
                            }}>Cancelar</button>
                            <button className="bg-blue-400 p-2 rounded cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                onSave(formData)
                            }}>{creatingMode ? "Criar" : "Editar" }</button>
                        </section>
                   </form>
                </div>
            </div>
        </>
    )
}
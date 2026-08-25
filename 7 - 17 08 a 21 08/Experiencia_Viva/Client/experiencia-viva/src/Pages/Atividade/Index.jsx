import { useEffect, useState } from "react";
import Grid from "../../Components/Grid";
import atividadeService from "../../Services/AtividadeService";
import ConfirmModal from "../../Components/ConfirmModal";
import { formatDate } from "../../Shared/formatDate";

const columns = [
    {label: "Nome",nome: "nome"},
    {label: "Data do Evento", nome: "dataEvento", render: formatDate},
    {label: "Vagas Rest.",nome: "vagas"},
    {label: "Tot vagas",nome: "quantidade_vagas"}
]


export default function AtividadePage(){

    const [atividade,setAtividade] = useState([]);

    const [idToDelete, setIdToDelete] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [dataToEdit,setDataToEdit] = useState(null);
    const [details,setDetails] = useState(null);

    useEffect(() => {
        loadAtividades()
    },[]);

    async function loadAtividades(){
        const res = await atividadeService.listar();
        
        if(res != null){
            setAtividade([...res.data]);
        }
    }

    async function handleExcluir(){
        if(!idToDelete) return null;
        const res = await atividadeService.excluir(idToDelete);
        if(res){
            alert(res.message ?? "excluido");
            setIdToDelete(null);
            await loadAtividades();
        }
    }

    async function handleSaveOrEdit(e){
        let res 
        if(dataToEdit && e.id != null){
             res = await atividadeService.editar(e);
        }else{
            res = await atividadeService.criar(e);
        }
        
        if(res.code == 201 || res.code == 200){
            alert(res.message ?? "Sucesso");
            setOpenForm(false);
            await loadAtividades();
        }
        setDataToEdit(null)

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
                <h1 className="text-2xl font-semibold">Gerencie as atividades</h1>
                <div className="flex gap-4 items-center">
                    <p className="text-gray-600">Crie e Edite as atividades</p>
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
                        rows={atividade}
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

            <AtividadeForm 
                open={openForm}
                onSave={handleSaveOrEdit}
                initialData={dataToEdit}
                onCancel={() => {
                  setDataToEdit({...null})
                  setOpenForm(false);
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


function AtividadeForm({open,onSave, initialData, onCancel}){
    const [formData,setFormData] = useState({id:"",nome:"",descricao:"",dataEvento:"",vagas:0});

    useEffect(() => {
        if(!initialData) return;
        let data;
        if(initialData?.dataEvento){
         data = initialData.dataEvento.slice(0,16)
        }

        setFormData({
            id: initialData?.id ?? null,
            nome: initialData?.nome ?? "",
            descricao: initialData?.descricao ?? "",
            dataEvento: data || "",
            vagas: initialData?.vagas ?? 0
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
                    <h2 className="text-2xl font-semibold">{initialData ? 'Editar' : 'Criar Atividade'}</h2>
                   <form className="flex flex-col gap-4 ">
                        <section className="flex gap-4 justify-between items-center">
                            <label className="font-semibold" htmlFor="nome">Nome:</label>
                            <input 
                             className="border rounded p-2"
                            onChange={handleInputChange} type="text" value={formData.nome} name="nome" />
                        </section>
                        <section className="flex gap-4 justify-between items-center">
                            <label className="font-semibold" htmlFor="descricao">Descricao:</label>
                            <input 
                             className="border rounded p-2"
                            onChange={handleInputChange} type="text" value={formData.descricao} name="descricao" />
                        </section>
                        <section className="flex gap-4 justify-between items-center">
                            <label className="font-semibold" htmlFor="vagas">Vagas:</label>
                            <input 
                             className="border rounded p-2"
                            onChange={handleInputChange} type="number" min={1} value={formData.vagas} name="vagas" />
                        </section>
                        <section className="flex gap-4 justify-between items-center">
                            <label className="font-semibold" htmlFor="data">Data do Evento:</label>
                            <input 
                             className="border rounded p-2"
                            onChange={handleInputChange} type="datetime-local" value={formData.dataEvento} name="dataEvento" />
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
                    <h2 className="text-xl font-semibold">Detalhes do(a) #{data.nome}</h2>
                    <button className="bg-red-400 p-2 rounded cursor-pointer" onClick={() => {
                      onClose()
                    }}>Fechar</button>
               </div>
               <div className="flex flex-col gap-4">
                    <p className="text-lg"><strong>Nome: </strong>{data.nome}</p>
                    <p className="text-lg"><strong>Descricao: </strong>{data.descricao}</p>
                    <p className="text-lg"><strong>Data: </strong>{data.dataEvento}</p>
                    <p className="text-lg"><strong>Vagas  Restantes: </strong>{data.vagas}</p>
                    
                    <p className="text-lg"><strong>Vagas Total: </strong>{data.quantidade_vagas}</p>

               </div>
            </div>
        </div>
    </>
    )
}

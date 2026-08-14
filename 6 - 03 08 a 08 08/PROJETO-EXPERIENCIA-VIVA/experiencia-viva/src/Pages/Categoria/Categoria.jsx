import { useEffect, useState } from "react"
import { createCategory, deleteCategory, getCategorias,updateCategory } from "../../Services/CategoriaService";
import ConfirmModal from "../../Services/Utils/ConfirmModal";
import Grid from "../../Components/Grid";

export default function Categoria(){
    const [categorias,setCategorias] = useState([]);
    const [categoryToDelete, setCategoryToDelete] = useState(null)
    const [categoryToEdit, setCategoryToEdit] = useState(null)
    const [categoryToCreate, setCategoryToCreate] = useState(null)

    useEffect(() => {
        const loadData = async ()=>{
            const data = await getCategorias();
            if(data.ok){
                const c = await data.json();
                setCategorias([...c.data]);
            }
        }
        loadData();
    },[]);

    async function handleDeleteCategory(){
        if(!categoryToDelete) return null;

        const res = await deleteCategory(categoryToDelete);

        if(res.ok){
            const data = await getCategorias();
            if(data.ok){
                const c = await data.json();
                setCategorias([...c.data]);
            }
        }

        setCategoryToDelete(null);
    }

    async function handleUpdateCategory(){
        if(!categoryToEdit) return null;
        console.log(categoryToEdit)
        const res = await updateCategory(categoryToEdit);

        if(res.ok){
            const data = await getCategorias();
            if(data.ok){
                const c = await data.json();
                setCategorias([...c.data]);
            }
        }

        setCategoryToEdit(null);
    }

    async function handleCreateCategory(){
        if(!categoryToCreate) return null;

        const res = await createCategory(categoryToCreate);

        if(res.ok){
            const data = await getCategorias();
            if(data.ok){
                const c = await data.json();
                setCategorias([...c.data]);
            }
        }

        setCategoryToCreate(null);
    }

    const columns = [
        {label: "Id",value:"id"},
        {label: "Nome",value:"nome"}]

    const actions = (row) => {
        return (
            <div className="flex gap-4">
                <li className="list-none p-2 bg-red-400 rounded cursor-pointer"
                    onClick={() => {
                        setCategoryToDelete(c.id)
                    }}
                >
                    <i className="bi bi-trash-fill"></i>
                </li>
                <li className="list-none p-2 bg-blue-400 rounded cursor-pointer"                                                
                    onClick={() => {
                        setCategoryToEdit(c)
                    }}
                >
                    <i className="bi bi-pencil-fill"></i>
                </li>
            </div>
        )
    }

    return (
        <>
            <div className="w-full flex flex-col items-center  h-full justify-center">
                <h1 className="text-2xl">Categorias</h1>

                <div>
                    <div className="flex justify-end p-2">
                        <button 
                            onClick={() => {
                              setCategoryToCreate(true)
                            }}
                        className="p-2 rounded cursor-pointer text-primary text-4xl">
                            <i className="bi bi-plus-square-fill"></i>
                        </button>
                    </div>

                        <Grid
                            columns={columns}
                            actions={actions}
                            rows={categorias}
                        />
                </div>
            </div> 
            {categoryToEdit && (
                
                <div className="w-screen fixed z-50  h-screen top-0 left-0 bg-black/40 flex flex-col gap-12 items-center justify-center">
                    <div className="bg-white p-12 rounded flex flex-col gap-4 items-center justify-center">
                        <input className="border p-2 rounded" type="text" name="id" value={categoryToEdit.id} disabled/>
                        <input className="border p-2 rounded" type="text" name="id" value={categoryToEdit.nome} onChange={(e) => {
                          setCategoryToEdit((prev)=>({
                            ...prev,
                            nome: e.target.value
                          }))
                        }}/>

                        <div className="flex gap-4">
                            <button className="bg-red-400 p-4 rounded text-white cursor-pointer" onClick={
                            async () => {
                                setCategoryToEdit(null)
                            }
                        }>Cancelar</button>
                        <button className="bg-blue-400 p-4 rounded text-white cursor-pointer" onClick={
                            async () => {
                              await handleUpdateCategory()
                            }
                        }>Salvar</button>
                        </div>
                    </div>
                </div>
            )}

            {categoryToCreate && (
                <div className="w-screen fixed z-50  h-screen top-0 left-0 bg-black/40 flex flex-col gap-12 items-center justify-center">
                    <div className="bg-white p-12 rounded flex flex-col gap-4 items-center justify-center">
                        <label htmlFor="Nome">Nome:</label>
                        <input className="border p-2 rounded" type="text" name="id" value={categoryToCreate.nome} onChange={(e) => {
                          setCategoryToCreate((prev)=>({
                            ...prev,
                            nome: e.target.value
                          }))
                        }}/>

                        <div className="flex gap-4">
                            <button className="bg-red-400 p-4 rounded text-white cursor-pointer" onClick={
                            async () => {
                                setCategoryToCreate(null)
                            }
                        }>Cancelar</button>
                        <button className="bg-blue-400 p-4 rounded text-white cursor-pointer" onClick={
                            async () => {
                              await handleCreateCategory()
                            }
                        }>Salvar</button>
                        </div>
                    </div>
                </div>
            )}

            <ConfirmModal
                open={categoryToDelete}
                onCancel={() => {
                  setCategoryToDelete(null);
                }}
                onConfirm={() => {
                  handleDeleteCategory()
                }}
            />
        </>
    )
}



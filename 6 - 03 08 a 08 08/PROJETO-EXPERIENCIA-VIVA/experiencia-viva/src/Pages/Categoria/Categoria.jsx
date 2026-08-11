import { useEffect, useState } from "react"
import { createCategory, deleteCategory, getCategorias,updateCategory } from "../../Services/CategoriaService";
import ConfirmModal from "../../Services/Utils/ConfirmModal";

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

    return (
        <>
            <div className="w-full flex flex-col items-center gap-8 h-full justify-center">
                <h1 className="text-2xl">Categorias</h1>

                <div>
                    <div className="flex justify-end p-4">
                        <button 
                            onClick={() => {
                              setCategoryToCreate(true)
                            }}
                        className="p-2 rounded cursor-pointer text-primary text-3xl">
                            <i className="bi bi-plus-square-fill"></i>
                        </button>
                    </div>
                    <table className="w-3xl rounded  gap-4 p-2 border-colapse">
                       <thead className="bg-gray-200 rounded">
                            <tr>
                                <th className="border text-left border-colapse p-2">Id</th>
                                <th className="border text-left border-colapse p-2">Nome</th>
                                <th className="border text-left border-colapse p-2">Ações</th>
                            </tr>
                       </thead>
                       <tbody>

                            {categorias.map((c)=>(
                                    <tr key={c.id}>
                                        <td className="bg-white border text-left border-colapse p-2">{c.id}</td> 
                                        <td className="bg-white border text-left border-colapse p-2">{c.nome}</td>
                                        <td className="bg-white border text-left border-colapse p-2 flex gap-2">
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
                                        </td>
                                    </tr>
                            ))}
                        </tbody>
                    </table>
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


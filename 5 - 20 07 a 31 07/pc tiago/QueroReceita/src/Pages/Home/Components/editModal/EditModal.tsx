import { useEffect, useState } from 'react';
import s from './editModal.module.css';
import type { detailedRecipe, RecipeList } from '../../../../Types/recipe';

interface detailsProps{
    data:RecipeList,
    closeModal: ()=> void;
    onSave: (arg0: editRecipe)=>void;
}

export interface editRecipe{
    idMeal:string
    nome:string,
    categoria:string
}

export default function EditModal(props:detailsProps){
    const [recipe,setRecipe] = useState<detailedRecipe>();
    const [formData,setFormData] = useState<editRecipe>({idMeal:"",categoria:"",nome:""});
    const [canSend,setCanSend] = useState(false);

    useEffect(() => {
        setRecipe(props.data);
    },[]);

    useEffect(() => {
        setFormData({
            idMeal:recipe?.idMeal!,
            nome: recipe?.strMeal ?? "",
            categoria: recipe?.strCategory ?? "",
        });
    },[recipe])

    function handleInputChange(e: any) {
        setCanSend(true)
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(e:any){
        e.preventDefault();
        props.onSave(formData);
    }

    return (
        <>
            <div className={s.containerModalDetails}>
                <div className={s.modal}>
                    <h2>Edição:</h2>

                    <form>
                        <section>
                            <label htmlFor="receita">Nome:</label>
                            <input type="text" onChange={handleInputChange} name='nome' value={formData.nome} />
                        </section>
                        <section>
                            <label htmlFor="receita">Categorias:</label>
                            <input type="text" onChange={handleInputChange} name='categoria' value={formData.categoria} />
                        </section>
                        <div className={s.buttons}>
                            <button
                                type="button"
                                className={s.cancelar}
                                onClick={props.closeModal}
                            >
                                Cancelar
                            </button>

                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className={!canSend ? `${s.salvar} ${s.disabled}` : s.salvar}
                                disabled={!canSend}
                            >
                                Salvar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

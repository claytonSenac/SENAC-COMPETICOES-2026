interface confirmModalProps {
    onConfirm: ()=>void;
    onCancel: ()=> void;
    data: RecipeList;
}

import type { RecipeList } from '../../../../Types/recipe';
import s from './modal.module.css';

export default function ConfirmModal(props:confirmModalProps){
    const text = "Você tem certeza, você ira apagar:"
    return (
        <>
            <div className={s.containerModal}>
                <div className={s.modal}>
                    <p>{text}</p>
                    <h2>{props.data.strMeal}</h2>
                    <div className={s.actions}>
                        <button onClick={props.onCancel}>Cancelar</button>
                        <button onClick={props.onConfirm} className={s.confirmButton}>Confirmar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
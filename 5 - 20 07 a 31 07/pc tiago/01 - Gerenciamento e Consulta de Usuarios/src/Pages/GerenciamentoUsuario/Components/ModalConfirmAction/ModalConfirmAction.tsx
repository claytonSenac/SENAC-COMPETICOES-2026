import { useEffect, useState } from "react";
import type { User } from "../../Types/User";
import './modalConfirmAction.css'

export default function ModalConfirmAction(
    props:{
        user:User,
        onConfirm: (user:User)=> void,
        onCancel: ()=> void
    }    
){
    const [texto,setTexto] = useState("");
    const [nomeUser,seNomeUser] = useState("");

    useEffect(() => {
        setTexto(`Você tem certeza que deseja excluir:`);
        seNomeUser(props.user.name)
    },[props.user])

    function handleConfirmModal(){
        props.onConfirm(props.user);
    }

    function handleCancelModal(){
       props.onCancel();
    }
    
    return (
        <>
            <div className="modalConfirmAction">
                <div className="container">
                    <h2>Confirmação</h2>
                    <p>{texto}</p>
                    <h2>{nomeUser}</h2>
                    <div className="actionsModalConfirm">
                        <button className="cancelDelete" onClick={handleCancelModal}>Cancelar</button>
                        <button className="confirmDelete" onClick={handleConfirmModal}>Confirmar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
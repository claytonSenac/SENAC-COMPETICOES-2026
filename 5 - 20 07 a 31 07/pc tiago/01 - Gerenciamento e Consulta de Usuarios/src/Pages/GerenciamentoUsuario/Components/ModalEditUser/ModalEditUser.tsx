import './ModalEditUser.css'
import FormUsers, { type CreateUserForm } from '../FormUsers/FormUsers';
import type { User } from '../../Types/User';
import { useEffect, useState } from 'react';

export interface ModalProps{
    user?: User | null;
    isOpen: boolean;
    onClose: ()=> void;
    onSave: (u:CreateUserForm,idUsuario:number)=> void;
}

export default function ModalEdicao(props:ModalProps){
    const [modalOpen, setModalOpen] = useState(props.isOpen);

    useEffect(() => {
        setModalOpen(props.isOpen);
    }, [props.isOpen]);

    function handleCancelForm(){
        setModalOpen(false);
        props.onClose();
    }

    function handleSaveEdit(e:any){
        if(props.user?.id){
            props.onSave(e, props.user.id);
        }
        setModalOpen(false);
        props.onClose();
    }

    if(!modalOpen || !props.user){
        return null;
    }

    return (
        <>
            <div className="containerModal">
                <div className="modal">
                    <h2>Edição de Usuario</h2>
                    <FormUsers 
                        title=''
                        data={props.user}
                        showCancelButton={true}
                        editingMode={true}
                        cancelForm={handleCancelForm}
                        onAdd={handleSaveEdit}
                    />
                </div>
            </div>
        </>
    )
}

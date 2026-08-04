import { useEffect, useState } from "react";
import ListUsers from "./Components/ListUsers/ListUsers"
import userService from "./Service/UserService";
import type { User } from "./Types/User";
import { useNavigate } from 'react-router-dom';

import toast from '../../utils/toastService';
import './styles/styles.css';
import FormUsers from "./Components/FormUsers/FormUsers";
import ModalEdicao from "./Components/ModalEditUser/ModalEditUser";
import { ToastContainer } from "react-toastify";

export default function GerenciamentoUsuario(){
    const nav = useNavigate();
    const [users,setUsers] = useState<User[]>([])
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        const loadData = async () =>{
            const res = await userService.getUsers();

            if(res.sucess){
                setUsers(res.data || []);
                toast.success(res.message);
            }else{
                toast.error(res.message);
            }
        }

        loadData();

    },[]);

    function handleAddUser(e:any){
        const res = userService.createUser(e);
        
        if(res.sucess){
            toast.success(res.message)
            setUsers(res.data || []);
        }else{
            toast.error(res.message)

        }
    }

    function handleOpenDetails(e:any){
       const res = userService.toggleDetails(e);
       if(res.sucess){
           setUsers(res.data || []);
       }
    }

    function handleDeleteUser(idUsuario:number){
       const res = userService.deleteUser(idUsuario);
       if(res.success){
           setUsers(res.data || []);
           toast.success(res.message);
       }else{
           toast.error(res.message);
       }
    }

    function handleEditUser(idUsuario:number){
       const userToEdit = users.find((user)=>user.id === idUsuario) ?? null;
       setSelectedUser(userToEdit);
       setIsEditModalOpen(Boolean(userToEdit));
    }

    function handleSaveEdit(e:any,idUsuario:number){
        const res = userService.editUser(e, idUsuario);
        if(res.success){
           setUsers(res.data || []);
           toast.success(res.message || "Usuário editado com sucesso.");
           setSelectedUser(null);
           setIsEditModalOpen(false);
       }else{
           toast.error(res.message || "Não foi possível editar o usuário.");
       }
    }

    function handleCloseEditModal(){
        setIsEditModalOpen(false);
        setSelectedUser(null);
    }

    function irParaSobre(){
         nav("/sobre",{replace:true})
    }

    return (
        <>
            <main className="gerenciamentoUsuario">
            <h1>Gerenciamento de Usuarios</h1>

                <div className="containerFeatures">
                    <FormUsers onAdd={handleAddUser} editingMode={false}/>
                    <ListUsers 
                        users={users} 
                        onOpenDetails={handleOpenDetails} 
                        onDeleteUser={handleDeleteUser}
                        onEditUser={handleEditUser}
                        />
                </div>
                <button className="botaoSobre" onClick={irParaSobre}>PAGINA SOBRE</button>
            </main>

            <ModalEdicao 
                user={selectedUser}
                isOpen={isEditModalOpen}
                onClose={handleCloseEditModal}
                onSave={handleSaveEdit}
            />
            <ToastContainer />
        </>
    )
}

import { useEffect, useState } from "react";
import type { User } from "../../Types/User";
import './ListUsers.css';
import ModalConfirmAction from "../ModalConfirmAction/ModalConfirmAction";

export interface ListUsersProps{
    users: User[] | [];
    onOpenDetails: (idUsuario:number) => void;
    onDeleteUser: (idUsuario:number) => void;
    onEditUser: (idUsuario:number) => void;
}

export default function ListUsers(props:ListUsersProps){

    const [filterText,setFilterText] = useState("");
    const [users,setUsers] = useState<User[]>([]);
    const [modeOrder,setModeOrder] = useState("ABC");
    const [userToDelete, setUserToDelete] = useState<User | null>(null);
    const [modalDeleteOpen,setModalDeleteOpen] = useState(false);

    useEffect(() => {
        let texto = filterText.trim();
        filtrarUsuarios(texto);
    },[filterText]);

    useEffect(() => {
        const ordenados = props.users.sort((a,b) => a.name.localeCompare(b.name));
        setUsers([...ordenados])
    },[props.users])


    function filtrarUsuarios(text:string){
        text = text.toLowerCase();
        const filtrados = props.users.filter(u => 
                u.name.toLowerCase().includes(text) || 
                u.email.toLowerCase().includes(text) || 
                u.username.toLowerCase().includes(text) || 
                u.phone.includes(text)
            );

        let ordenados = [];
        if(modeOrder == "CBA"){
             ordenados = filtrados.sort((a,b) => b.name.localeCompare(a.name));
            setUsers([...ordenados])
        }else{
            ordenados = filtrados.sort((a,b) => a.name.localeCompare(b.name));
            setUsers([...ordenados])
        }
    }

    function handleOpenDetails(idUsuario:number){
        props.onOpenDetails(idUsuario)
    }   

    function handleDeleteUser(usuario:User){
        setUserToDelete(usuario);
        setModalDeleteOpen(true);
    }

    function handleConfirmedModal(e:User){
        props.onDeleteUser(e.id);
        handleCancelConfirmModal()
    }

    function handleEditUser(idUsuario:number){
        props.onEditUser(idUsuario)
    }

    function handleToggleOrder(){
        if(modeOrder == "ABC"){
            setModeOrder("CBA");
            const ordenados = users.sort((a,b) => b.name.localeCompare(a.name));
            setUsers([...ordenados])
        }else{
            setModeOrder("ABC");
            const ordenados = users.sort((a,b) => a.name.localeCompare(b.name));
            setUsers([...ordenados])
        }
    }

    function handleCancelConfirmModal(){
        setModalDeleteOpen(false);
        setUserToDelete(null);
    }




    return (
        <>
            <div className="userList">
                <h2>Lista</h2>
                <div className="listUsers">
                    <div className="searchBar">
                        <h3>Filtrar:</h3>
                        <input type="text" value={filterText} onChange={(e:any) => {
                            setFilterText(e.target.value)
                        }}/>
                         <h3>Orderm:</h3>
                        <button className="orderButton" onClick={handleToggleOrder}>{modeOrder}</button>
                    </div>
                { users.map((u:User)=> (
                    <div className="userCard" key={u.id}>
                        <h3>Dados Principais:</h3>
                        <section className="contentUserCard">
                            <section>
                                <div>
                                    <h3>Nome:</h3>
                                    <p>{u.name}</p>

                                    <h3 className="mobileDisable">Username:</h3>
                                    <p className="mobileDisable">{u.username}</p>
                                </div>
                            </section>
                            <div className="actions">
                                <i className="bi bi-info-circle-fill" 
                                    onClick={() => {
                                      handleOpenDetails(u.id)
                                    }}
                                    ></i>
                                <i className="bi bi-pencil-fill" 
                                    onClick={() => {
                                      handleEditUser(u.id)
                                    }}
                                ></i>
                                <i className="bi bi-trash-fill" 
                                    onClick={() => {
                                      handleDeleteUser(u)
                                    }}
                                ></i>                            
                            </div>
                        </section>
                        <hr />
                        { u.openDetail == true && (
                            <>
                                <section className="aditionalInfo">
                                    <h3>Informações Adicionais:</h3>
                                    <section>
                                        <div className="infoField">
                                            <h3>Email:</h3>
                                            <p>{u.email}</p>
                                        </div>

                                        <div className="infoField">
                                            <h3>Empresa:</h3>
                                            <p>{u.company?.name ?? "Não Informado"}</p>
                                        </div>

                                    </section>
                                    <section>
                                        <div className="infoField">
                                            <h3>Cidade:</h3>
                                            <p>{u.address?.city ?? "Não Informado"}</p>
                                        </div>
                                        
                                        <div className="infoField">
                                            <h3>Telefone:</h3>
                                            <p>{u.phone}</p>
                                        </div>
                                    </section>
                                </section>
                            </>
                        )}
                    </div>
                ))}
                </div>
            </div>

            {modalDeleteOpen && userToDelete && (
                <> 
                    <ModalConfirmAction 
                        user={userToDelete}
                        onCancel={handleCancelConfirmModal}
                        onConfirm={handleConfirmedModal}
                    />
                </>
            )}

        </>
    )
}

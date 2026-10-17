import { Outlet, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../Componentes/Modal";
import { InputForm } from "../Componentes/FormParticipante";
import { useState } from "react";
import { service } from "../service";

export default function Layout(){
    const [login,setLogin] = useState({
        open:false,title:"", isAdmin:false
    });

    return (
        <>
            <div className="w-full min-h-dvh flex flex-col">
                <header className="w-full min-h-18 bg-blue-400 flex justify-between fixed top-0 left-0 flex-wrap sm:w-full ">
                    <div className="h-full p-2 flex items-center justify-center">
                        <img className="h-14 cursor-pointer" src="/imagens_Coronel_Fabriciano_02.png" alt="" />
                    </div>
                    <nav className="h-full text-center flex gap-4 p-4">
                        <button onClick={() => {
                          setLogin({
                            open:true,
                            title: "Login Admin",
                            isAdmin:true
                          })
                        }} className="bg-white text-blue-900 font-semibold p-4 flex items-center rounded cursor-pointer ">Painel Admin</button>
                        <button onClick={() => {
                          setLogin({
                            open:true,
                            title: "Login Participante",
                            isAdmin:false
                          })
                        }} className="bg-blue-900 text-white font-semibold p-4 flex items-center rounded cursor-pointer ">Painel Participante</button>
                    </nav>
                </header>
                <main className="flex flex-col pt-18 flex-1 w-full bg-blue-900">
                    <Outlet />
                </main>
            </div>
            <Login open={login.open} title={login.title} isAdmin={login.isAdmin} onClose={() => {
              setLogin((prev)=>(
                {open:false, isAdmin:false,title:""}
              ))
            }}/>
            <ToastContainer />
        </>
    )
}

function Login({open,title,isAdmin = false, onClose}){
    const [form,setForm] = useState({email:"",senha:""});
    const [showSenha,setShowSenha] = useState(false);
    const nav = useNavigate();

    async function onSave(){
        const res =  isAdmin ? await service.login(form) :  await service.loginParticipante(form);

        if(!res) {
            toast.error("Erro no Login")
            return;
        }

        if(res.code == 200){
            toast.success(res.text);
            nav(isAdmin ?  "/admin/"+res.data.id : "/participante/"+res.data.id);
            onClose()
            return;
        }else{
            toast.error(res.text);
            onClose()
            return;
        }
    }


    return(
        <>
            <Modal title={title} open={open} onClose={() => {
              onClose()
            }}>
                <label htmlFor="email">
                    <h2>Email:</h2>
                    <InputForm name={"email"} type={"email"} value={form.email} onChange={(e) => {
                      setForm((prev)=>({
                        ...prev,
                        ["email"]: e.target.value
                      }))
                    }}/>
                </label>
                <label htmlFor="senha">
                    <h2>Senha:</h2>
                    <InputForm name={"senha"} type={showSenha ? "text" : "password" } value={form.senha} onChange={(e) => {
                      setForm((prev)=>({
                        ...prev,
                        ["senha"]: e.target.value
                      }))
                    }}/>
                </label>
                <p className="p-2 text-black font-semibold rounded cursor-pointer" onClick={() => {
                  setShowSenha(!showSenha)
                }}>
                    {showSenha ? "Ocultar Senha" : "Exibir Senha" }
                </p>
                <button onClick={() => {
                  onSave()
                }} className="p-2 bg-blue-400 text-white font-semibold rounded cursor-pointer">Login</button>
            </Modal>
        </>
    )
}
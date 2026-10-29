import { Outlet, useNavigate } from "react-router-dom"
import Button from "../Components/Button";
import { useNavigation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../Components/Modal";
import { useState } from "react";
import { service } from "../service";
import Input from "../Components/Input";

export default function Layout(){
    const nav = useNavigation();

    const [login,setLogin] = useState({open:false,isAdmin:false});

    return(
        <>
            <div className="flex flex-col w-full flex-1 min-h-dvh bg-slate-900">
                <header className="h-auto md:h-20 bg-blue-400 px-4 py-3 flex flex-col md:flex-row items-center justify-between w-full fixed top-0 left-0 z-50 shadow-md gap-4">
                    <div className="h-12 md:h-14 flex items-center">
                        <img 
                            onClick={() => nav("/")} 
                            className="h-full w-auto cursor-pointer object-contain" 
                            src="/imagens_Coronel_Fabriciano_02.png" 
                            alt="Logo" 
                        />
                    </div>

                    <div className="flex flex-row md:flex-row items-center gap-3 w-full md:w-auto justify-center md:justify-end flex-wrap">
                        <Button 
                            bgColor="bg-white" 
                            textColor="text-blue-900" 
                            text="Painel Admin"  
                            onClick={() => setLogin({open: true, isAdmin: true})}
                        />
                        <Button 
                            bgColor="bg-blue-900" 
                            textColor="text-white" 
                            text="Painel Participante"  
                            onClick={() => setLogin({open: true, isAdmin: false})}
                        />
                    </div>
                </header>
                <div className="flex flex-col flex-1 mt-30 md:mt-18  bg-blue-900 h-72">
                    <Outlet />
                </div>
                <ToastContainer />
                <LoginModal open={login.open} isAdmin={login.isAdmin} onClose={() => {
                  setLogin({open:false,isAdmin:false});
                }}/>
            </div>
        </>
    )
}

function LoginModal({open, isAdmin, onClose}){
    const nav = useNavigate();

    const [form,setForm] = useState({email: "", senha:"",showSenha:false});
    function handleInputChange(e){
        if(!e.target.name) return null;

        setForm((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    async function handleLogin(e){
        e.preventDefault();

        if(!form.email || !form.senha) {
            toast.error("preencha todos campos");
            return;
        }

        let res = null;
        if(isAdmin){
            res = await service.loginAdmin(form);
        }else{
            res = await service.loginParticipante(form);
        }

        if(!res || res.code !== 200 && res.code !== 201){
            toast.error(res.text ?? "Erro no login");
            return;
        }

        toast.info(res.text);
        if(isAdmin){
            nav("/admin/"+ res.data.Id);
        }else{
            nav("/participante/"+ res.data.Id);
        }
        onClose();
        setForm({email:"",senha:""})
        return;
    }

    if(!open) return null;

    return(
        <>
            <Modal open={open} onCancel={onClose} zIndex="z-50" title={isAdmin ?  "Login Admin" : "Login Participante"}>
                <form className="flex flex-col justify-between  gap-4">
                    <section className="flex justify-between gap-2 items-center">
                        <label htmlFor="email">Email:</label>
                        <Input onChange={handleInputChange} name="email" value={form.email} type="email" />
                    </section>
                    <section className="flex justify-between gap-2 items-center">
                        <label htmlFor="senha">Senha:</label>
                        <Input onChange={handleInputChange} name="senha" value={form.senha} type={form.showSenha ? "text": "password" } />
                    </section>
                        <button onClick={(e) => {
                            e.preventDefault()
                        setForm((prev)=>({
                            ...prev,
                            showSenha: !prev.showSenha
                        }))
                        }}
                            className="font-semibold cursor-pointer"
                        >{form.showSenha ? "Ocultar Senha" : "Ver Senha" }</button>
                    <Button text="Login" onClick={handleLogin}/>
                </form>
            </Modal>
        </>
    )
}
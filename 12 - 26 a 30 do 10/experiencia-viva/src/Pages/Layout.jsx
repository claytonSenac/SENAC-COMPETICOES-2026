import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import { useState } from "react";
import { service } from "../service";

export default function Layout(){
    const nav = useNavigate();
    const [login,setLogin] = useState({open:false, isAdmin:false})
    return(
        <>
            <div className="min-h-dvh w-full flex flex-col">
                <header className="h-14 bg-blue-400 w-full flex px-4 justify-between fixed top-0 left-0">
                    <div className="h-full p-2">
                        <img onClick={()=>{nav("/")}} className="h-full object-contain" src="/imagens_Coronel_Fabriciano_02.png" alt="" />
                    </div>
                    <div className="flex justify-center gap-4 p-2">
                        <Button onClick={() => {
                          setLogin({open:true, isAdmin:true})
                        }} newClass="bg-blue-900"  title="Painel Admin"/>
                        <Button onClick={() => {
                          setLogin({open:true, isAdmin:false})
                        }} newClass="bg-slate-50" textColor="text-blue-900" title="Painel Participante"/>

                    </div>
                </header>
                <main className="flex flex-col flex-1 bg-slate-200 mt-14">
                    <Outlet />
                </main>
                <ToastContainer />
                <ModalLogin open={login.open} isAdmin={login.isAdmin} onClose={() => {
                  setLogin({open:false, isAdmin:false})
                }} />
            </div>
        </>
    )
}

function ModalLogin({
    open,
    onClose,
    isAdmin = false
}){
    const [form, setForm] = useState({email:"", senha:"", showSenha:false});
    const nav = useNavigate();

    function onChange(e){
        setForm((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    async function handleLogin(){
        let res = null;
        if(isAdmin){
            res = await service.loginAdmin(form);
        }else{
            res = await service.loginParticipante(form)
        }

        if(!res || res.code !== 201 && res.code !== 200){
            toast.info(res.text ?? "Erro no login");
            return;
        }
        
        toast.success(res.text);
        if(isAdmin){
            nav("/admin/"+res.data.Id);
        }else{
            nav("/participante/"+res.data.Id);
        }
        
        setForm({email:"",senha:""})
        onClose()
        return;
    }


    return(
        <>
            <Modal  title={isAdmin ? "Login Admin" : "Login Participante"} open={open} onClose={onClose}>
                <div className="flex flex-col gap-4">
                    <section>
                        <label htmlFor="email">Email:</label>
                        <input type="email" value={form.email} name="email" onChange={onChange} />
                    </section>

                    <section>
                        <label htmlFor="senha">Senha:</label>
                        <input type={form.showSenha ? "text" : "password" } value={form.senha} name="senha" onChange={onChange} />
                    </section>

                    <button onClick={(e) => {
                        e.preventDefault()
                        setForm((prev)=>({
                            ...prev,
                            showSenha: !prev.showSenha
                        }))
                    }}>{form.showSenha ? "Ocultar senha" : "Ver senha"}</button>
    
                    <Button onClick={
                        async (e) => {
                        e.preventDefault()
                        await handleLogin()
                    }} variant="default" newClass="font-semibold" title="Login" />
                </div>
            </Modal>
        </>
    )
}
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { service } from "../service";

export default function FormParticipante({title = "Inscrever", onCreated, initialData, isAdmin = false}){
    const [form,setForm] = useState({id:"",nome:"",email:"",senha:"",confirmSenha:""});
    const [showSenha,setShowSenha] = useState(false);

    function resetForm(){
        setForm(({id:"",nome:"",email:"",senha:"",confirmSenha:""}))
    }

    useEffect(() => {
      if(initialData){
        setForm({
            id: initialData.id,
            nome: initialData.nome ?? "-",
            email: initialData.email ?? "-",
            senha: "",
            confirmSenha: ""
        })
      }
    },[initialData])

    function handleInputChange(e){
        console.log(e)
        const name = e.target.name;
        const value = e.target.value;

        setForm((prev)=>(
            {
                ...prev,
                [name]: value
            }
        ))
    }

    async function onSave(){
        if(form.nome.length < 3){
            toast.error("O nome deve conter no minimo 3 caracteres");
            return;
        }

        if(initialData != null){
            if(isAdmin){
                const res = await service.editarParticipanteAdmin(form);
                 if(res.code == 200 || res.code == 201){
                        toast.success(res.text);
                        resetForm();
                        onCreated(res?.data?.id)
                        return;
                    }else{
                        toast.error(res.text);
                        return;
                    }
            }
            const res = await service.editarParticipante(form);

            if(!res){
                toast.error("Erro ao tentar criar");
                return;
            }

            if(res.code == 200 || res.code == 201){
                toast.success(res.text);
                resetForm();
                onCreated(res?.data?.id)
                return;
            }else{
                toast.error(res.text);
                return;
            }
        }else{
            if(form.senha !== form.confirmSenha){
                toast.error("As senhas não batem")
                return;
            }

            const res = await service.criarParticipante(form);

            if(!res){
                toast.error("Erro ao tentar criar");
                return;
            }

            if(res.code == 200 || res.code == 201){
                toast.success(res.text);
                resetForm();
                onCreated(res?.data?.id)
                return;
            }else{
                toast.error(res.text);
                return;
            }
        }
        
    }

    return (
        <>
            <form className="w-full min-w-72 max-w-100 border-2 border-blue-400 rounded p-4 flex flex-col gap-4">
                <h1 className="font-semibold text-xl text-center">{title}</h1>
                <label htmlFor="nome">
                    <h2 className="font-semibold">Nome:</h2>
                    <InputForm name={"nome"} addClass={""} type={"text"} value={form.nome} onChange={handleInputChange}/>
                </label>
                <label htmlFor="email">
                    <h2 className="font-semibold">Email:</h2>
                    <InputForm name={"email"} addClass={""} type={"email"} value={form.email} onChange={handleInputChange}/>
                </label>
                {!isAdmin && (
                    <>
                        <label htmlFor="senha">
                        <h2 className="font-semibold">Senha:</h2>
                        <InputForm name={"senha"} addClass={""} type={showSenha ? "text" : "password" } value={form.senha} onChange={handleInputChange}/>
                        </label>
                        <label htmlFor="confirmSenha">
                            <h2 className="font-semibold">{initialData && form.id != null  ? "Nova Senha ( opcional )" : "Confirme a Senha" }</h2>
                            <InputForm name={"confirmSenha"} addClass={""} type={showSenha ? "text" : "password" } value={form.confirmSenha} onChange={handleInputChange}/>
                        </label>

                    <p className="p-2 max-w-34 text-center bg-blue-400 text-white font-semibold rounded cursor-pointer" onClick={() => {
                        setShowSenha(!showSenha)
                    }}>
                        {showSenha ? "Ocultar Senha" : "Exibir Senha" }
                    </p>

                    </>
                )}
                <button className="p-2  bg-blue-400 text-white cursor-pointer rounded" onClick={async(e) => {
                    e.preventDefault();
                    await onSave()
                }}>Salvar</button>
            </form>
        </>
    )
}

export function InputForm({name, onChange, addClass, value,type}){
    return(
        <input className={"border rounded px-2 w-full" + addClass} type={type} name={name} onChange={onChange}   value={value}/>
    )
}
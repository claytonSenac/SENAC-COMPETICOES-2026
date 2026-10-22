import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { toast } from "react-toastify";
import { service } from "../service";

export default function FormParticipante({
    title = "Participante",
    initialData = null,
    isAdmin = false,
    onSaved,
    resetForm
}){
    const [form,setForm] = useState({
        id:"",nome:"",email:"",telefone:"",senha:"",confirmSenha:""
    });

    const [showSenha, setShowSenha] = useState(false);

    function resetForm(){
        setForm({id:"",nome:"",email:"",telefone:"",senha:"",confirmSenha:""});
    }

    useEffect(() => {
      if(initialData){
        setForm({
            id: initialData.Id,
            nome: initialData.Nome ?? '-',
            email: initialData.Email ?? "-",
            telefone: initialData.Telefone ?? "-"
        })
      }
    },[initialData])

    function handleInputChange(e){
        if(!e.target.name) return null;

        setForm((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    async function onSave(){
        if(form.nome.length < 3) {
            toast.error("O nome deve conter 3 caracteres");
            return;
        }

        if(initialData && isAdmin){

            if(!form.email || form.telefone.length !== 11){
                toast.error("Preencha os campos obrigatorios!");
                return;
            }

            const res = await service.editarParticipanteAdmin(form);

            if(!res || res.code !== 200 && res.code !== 201){
                toast.error(res.text ?? "Erro ao criar");
                return;
            }else{
                toast.info(res.text);
                resetForm()
                onSaved()
            }
        }else if(initialData && !isAdmin){
            if(!form.email || form.telefone.length !== 11 || !form.senha){
                toast.error("Preencha os campos obrigatorios!");
                return;
            }
            const res = await service.editarParticipante(form);

            if(!res || res.code !== 200 && res.code !== 201){
                toast.error(res.text ?? "Erro ao criar");
                return;
            }else{
                toast.info(res.text);
                resetForm()
                onSaved()
            }

        }else{
            if(!form.email || form.telefone.length !== 11 || !form.senha || !form.confirmSenha){
                toast.error("Preencha os campos obrigatorios!");
                return;
            }
            if(form.senha !== form.confirmSenha) {
                toast.error("As senhas não batem");
                return;
            }

            const res = await service.criarParticipante(form);

            if(!res || res.code !== 200 && res.code !== 201){
                toast.error(res.text ?? "Erro ao criar");
                return;
            }else{
                toast.info(res.text);
                resetForm()
                onSaved();
            }
        }
    }

    return(
        <>
            <form className="flex flex-col w-full h-full max-w-80 gap-4 justify-between p-4 border-2 border-blue-400 rounded-2xl">
                <h1 className="title">{title}</h1>
                <section className="sm:flex justify-between gap-2 items-center">
                    <label htmlFor="nome">nome:</label>
                    <Input onChange={handleInputChange} name="nome" value={form.nome} type="text" />
                </section>
                <section className="sm:flex justify-between gap-2 items-center">
                    <label htmlFor="email">email:</label>
                    <Input onChange={handleInputChange} name="email" value={form.email} type="email" />
                </section>
                <section className="sm:flex justify-between gap-2 items-center">
                    <label htmlFor="telefone">Telefone:</label>
                    <Input onChange={handleInputChange} name="telefone" value={form.telefone} type="text" />
                </section>

                {!isAdmin && (
                    <>
                        <section className="sm:flex justify-between gap-2 items-center">
                            <label htmlFor="senha">Senha:</label>
                            <Input onChange={handleInputChange} name="senha" value={form.senha} type={showSenha ? "text": "password" } />
                        </section>
                        {initialData && (<p className="font-semibold">Campo opcional</p>)}
                        <section className="sm:flex justify-between gap-2 items-center">
                                <label htmlFor="confirmSenha">{initialData ? "Nova Senha:" :"Confirme a Senha:"}</label>
                            <Input onChange={handleInputChange} name="confirmSenha" value={form.confirmSenha} type={showSenha ? "text": "password" } />
                        </section>
                        <button onClick={(e) => {
                            e.preventDefault()
                        setShowSenha(!showSenha)
                        }}
                            className="font-semibold cursor-pointer"
                        >{showSenha ? "Ocultar Senha" : "Ver Senha" }</button>
                    </>
                )}
                
                <Button text="Salvar" onClick={async (e) => {
                  e.preventDefault()
                  await onSave()
                }}/>
            </form>
        </>
    )
}
import { useEffect, useState } from "react"
import Button from "./Button";
import { service } from "../service";
import { toast } from "react-toastify";
import { InputMask } from "@react-input/mask";

export default function FormParticipante({
    isAdmin = false,
    initialData = null,
    title = "Participante",
    onSaved
}){

    const [form,setForm] = useState({
        id:"", nome:"",email:"",telefone:"", senha:"",confirmSenha:""
    });

    const [showSenha,setShowSenha] = useState(false);

    function resetForm(){
        setForm({id:"", nome:"",email:"",telefone:"", senha:"",confirmSenha:""});
    }

    function onChange(e){
        console.log(e)
        setForm((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    async function handleSave() {
        let res = null;
        if(isAdmin && initialData != null){
            if(form.nome.length < 3){
                toast.info("O nome deve conter no minimo 3 caracteres");
                return;
            }
            res = await service.editarParticipanteAdmin(form)

            if(!res || res.code !== 201 && res.code !== 200){
                toast.info(res.text ?? "Erro ao salvar");
                return;
            }

            toast.success(res.text);
            resetForm();
            onSaved(res.data);
            return;

        }else if(!isAdmin && initialData){
             if(form.nome.length < 3){
                toast.info("O nome deve conter no minimo 3 caracteres");
                return;
            }

            if(form.senha.length < 8){
                toast.info("a senha deve conter no minimo 8 caracteres");
                return;
            }
            res = await service.editarParticipante(form)
        }else{
            if(form.nome.length < 3){
                toast.info("O nome deve conter no minimo 3 caracteres");
                return;
            }

            if(form.senha.length < 8){
                toast.info("a senha deve conter no minimo 8 caracteres");
                return;
            }
            res = await service.criarParticipante(form)
        } 

        if(!res || res.code !== 201 && res.code !== 200){
            toast.info(res.text ?? "Erro ao salvar");
            return;
        }

        toast.success(res.text);
        resetForm();
        onSaved(res.data);
        return;
    }

    useEffect(() => {
      if(initialData){
        setForm({
            id: initialData.Id,
            nome: initialData.Nome,
            email: initialData.Email,
            telefone: initialData.Telefone
        })
      }
    },[initialData])


    return(
        <>
            <form className="min-h-96 w-full max-w-80 sm:max-w-none bg-slate-50 border border-slate-300 shadow rounded p-4 flex flex-col gap-4 justify-between">
                <h1>{title}</h1>
                <section>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" value={form.nome} name="nome" onChange={onChange} />
                </section>
                <section>
                    <label htmlFor="email">Email:</label>
                    <input type="email" value={form.email} name="email" onChange={onChange} />
                </section>
                <section>
                    <label htmlFor="telefone">Telefone:</label>
                    <InputMask showMask={true} mask="(__) _ ____-_____" replacement={{ _: /\d/ }} onChange={onChange} value={form.telefone} name="telefone"/>
                </section>

               {!isAdmin && (
                    <>
                    <section>
                        <label htmlFor="senha">Senha:</label>
                        <input type={showSenha ? "text" : "password" } value={form.senha} name="senha" onChange={onChange} />
                    </section>
                    <section>
                        <label htmlFor="confirmSenha">Confirme a Senha:</label>
                        <input type={showSenha ? "text" : "password" } value={form.confirmSenha} name="confirmSenha" onChange={onChange} />
                    </section>
                    <button className="font-semibold cursor-pointer" onClick={(e) => {
                        e.preventDefault()
                        setShowSenha(!showSenha)
                    }}>{showSenha ? "Ocultar senha" : "Ver senha"}</button>
                    </>
                )}

                <Button onClick={
                    async (e) => {
                    e.preventDefault()
                   await handleSave()
                }} variant="default" newClass="font-semibold">Salvar</Button>
            </form>
        </>
    )
}
import { useEffect, useState } from "react"
import Button from "./Button";
import { service } from "../service";
import { toast } from "react-toastify";

export default function FormAtividade({
    isAdmin = false,
    initialData = null,
    title = "Atividade",
    onSaved
}){

    const [form,setForm] = useState({
        id:"", nome:"",vagas:0,horario:"", descricao:"",data:""
    });

    const [showSenha,setShowSenha] = useState(false);

    function resetForm(){
        setForm({id:"", nome:"",vagas:0,horario:"", descricao:"",data:""});

    }

    function onChange(e){
        setForm((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    async function handleSave() {
        let res = null;
        if( initialData != null){
            if(form.nome.length < 3){
                toast.info("O nome deve conter no minimo 3 caracteres");
                return;
            }
            res = await service.editarAtividade(form)

            if(!res || res.code !== 201 && res.code !== 200){
                toast.info(res.text ?? "Erro ao salvar");
                return;
            }

            toast.success(res.text);
            resetForm();
            onSaved(res.data);
            return;
        }else{
            if(form.nome.length < 3){
                toast.info("O nome deve conter no minimo 3 caracteres");
                return;
            }

           
            res = await service.criarAtividade(form)
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
            descricao: initialData.Descricao,
            data: initialData.dataInput,
            horario: initialData.Horario,
            vagas: initialData.Vagas
        })
      }
    },[initialData])


    return(
        <>
            <form className="min-h-96 w-full max-w-80 bg-slate-50 border border-slate-300 shadow rounded p-4 flex flex-col gap-4 justify-between">
                <h1>{title}</h1>
                <section>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" value={form.nome} name="nome" onChange={onChange} />
                </section>
                <section>
                    <label htmlFor="data">Data:</label>
                    <input type="date" value={form.data} name="data" onChange={onChange} />
                </section>
                <section>
                    <label htmlFor="horario">Horario:</label>
                    <input type="text" value={form.horario} name="horario"  onChange={onChange} />
                </section>

                <section>
                    <label htmlFor="vagas">Vagas:</label>
                    <input type="number" min={0} value={form.vagas} name="vagas"  onChange={onChange} />
                </section>

               
                <Button onClick={
                    async (e) => {
                    e.preventDefault()
                   await handleSave()
                }} variant="default" newClass="font-semibold">Salvar</Button>
            </form>
        </>
    )
}
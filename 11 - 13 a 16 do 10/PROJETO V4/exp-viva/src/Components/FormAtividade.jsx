import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { toast } from "react-toastify";
import { service } from "../service";

export default function FormAtividade({
    title = "Atividade",
    initialData = null,
    onSaved,
    resetForm
}){
    const [form,setForm] = useState({
        id:"",nome:"",vagas:0,horario:"",descricao: "",data:""});

    useEffect(() => {
      if(initialData){
        setForm({
            id: initialData.Id,
            data: initialData.dataInput,
            descricao: initialData.descricao ?? "-",
            horario: initialData.Horario,
            vagas: parseInt(initialData.Vagas),
            nome: initialData.Nome
        })
      }
    },[initialData])

    function resetForm(){
        setForm({id:"",nome:"",vagas:0,horario:"",descricao: "",data:""});
    }

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

        if(initialData){
            const res = await service.editarAtividade(form);

            if(!res || res.code !== 200 && res.code !== 201){
                toast.error(res.text ?? "Erro ao criar");
                return;
            }else{
                toast.info(res.text);
                resetForm()
                onSaved();
            }

        }else{


            const res = await service.criarAtividade(form);

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
                <section className="flex justify-between gap-2 items-center">
                    <label htmlFor="nome">nome:</label>
                    <Input onChange={handleInputChange} name="nome" value={form.nome} type="text" />
                </section>

                <section className="flex justify-between gap-2 items-center">
                    <label htmlFor="descricao">descricao:</label>
                    <Input onChange={handleInputChange} name="descricao" value={form.descricao} type="text" />
                </section>
                <section className="flex justify-between gap-2 items-center">
                    <label htmlFor="data">data:</label>
                    <Input onChange={handleInputChange} name="data" value={form.data} type="date" />
                </section>
                <section className="flex justify-between gap-2 items-center">
                    <label htmlFor="horario">horario:</label>
                    <Input onChange={handleInputChange} name="horario" value={form.horario} type="text" />
                </section>

                <section className="flex justify-between gap-2 items-center">
                    <label htmlFor="vagas">Vagas:</label>
                    <Input onChange={handleInputChange} name="vagas" value={form.vagas} type="number" />
                </section>
                
                <Button text="Salvar" onClick={async (e) => {
                  e.preventDefault()
                  await onSave()
                }}/>
            </form>
        </>
    )
}
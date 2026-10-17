import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { service } from "../service";

export default function FormAtividade({title = "Inscrever", onCreated, initialData}){
    const [form,setForm] = useState({id:"",nome:"",data:"",horario:"13:30",descricao:"", vagas:0});

    function resetForm(){
        setForm(({id:"",nome:"",data:"",horario:"",descricao:"", vagas:0}))
    }

    useEffect(() => {
      if(initialData){
        setForm({
            id: initialData.id,
            nome: initialData.nome ?? "-",
            data: initialData.data ?? "-",
            descricao: initialData.descricao ?? "-",
            horario: initialData.horario ?? "-",
            vagas: initialData.vagas ?? 0,

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
            const res = await service.editarAtividade(form);

            if(!res){
                toast.error("Erro ao tentar editar");
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


            const res = await service.criarAtividade(form);

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
            <form className="w-full max-w-80 border-2 border-blue-400 rounded p-4 flex flex-col gap-4">
                <h1 className="font-semibold text-xl text-center">{title}</h1>
                <label htmlFor="nome">
                    <h2 className="font-semibold">Nome:</h2>
                    <InputForm name={"nome"} addClass={""} type={"text"} value={form.nome} onChange={handleInputChange}/>
                </label>
                <label htmlFor="descricao">
                    <h2 className="font-semibold">Descricao:</h2>
                    <InputForm name={"descricao"} addClass={""} type={"text"} value={form.descricao} onChange={handleInputChange}/>
                </label>
                <label htmlFor="data">
                    <h2 className="font-semibold">Data:</h2>
                    <InputForm name={"data"} addClass={""} type={"date"} value={form.data} onChange={handleInputChange}/>
                </label>
                <label htmlFor="horario">
                    <h2 className="font-semibold">horario:</h2>
                    <InputForm name={"horario"} addClass={""} type={"text"} value={form.horario} onChange={handleInputChange}/>
                </label>
                <label htmlFor="vagas">
                    <h2 className="font-semibold">vagas:</h2>
                    <InputForm name={"vagas"} addClass={""} type={"number"} value={form.vagas} onChange={handleInputChange}/>
                </label>


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
import { useState } from "react"
import type { Aluno } from "../types/Aluno";
import "../styles/formAluno.css";


export interface propsFormAluno{
    onAdd: (formData:Aluno)=> void;
}

export function FormAluno(props:propsFormAluno){

    const [formData,setFormData] = useState({
        nome: "",
        email: "",
        sala: "",
        idade: 0
    });

    function handleInputChange(event: any){
        const name = event.target.name;
        const value = event.target.value;

        if(name && value){
            setFormData((prev) => ({
              ...prev,
              [name]:value
            }))
        }

        console.log(formData)
    }

    function handleSaveAluno(e:any){
        e.preventDefault();

        if(formData.nome.length > 3 && formData.sala.length > 3){
            props.onAdd(formData);
        }

        setFormData({nome:"",email: "",idade: 0,sala: ""})
    }

    return  <>
        <div className="formAluno">
            <h2>Cadastro de Alunos</h2>
            <form onSubmit={handleSaveAluno}>
                <section className="formSection">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" required  onChange={handleInputChange} value={formData.nome}/>
                </section>
                <section className="formSection">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" required   onChange={handleInputChange} value={formData.email}/>
                </section>
                <section className="formSection">
                    <label htmlFor="sala">Sala:</label>
                    <input type="text" name="sala" required   onChange={handleInputChange} value={formData.sala}/>
                </section>
                <section className="formSection">
                    <label htmlFor="Idade">Idade:</label>
                    <input type="number" name="idade" required   onChange={handleInputChange} value={formData.idade}/>
                </section>
                <div className="containerButton">
                    <button className="saveButton">Salvar</button>
                </div>
            </form>
        </div>
    </>
}
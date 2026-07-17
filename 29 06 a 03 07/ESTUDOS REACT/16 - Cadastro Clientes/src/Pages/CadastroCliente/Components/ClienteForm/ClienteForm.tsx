import { useState } from "react"
import type { Cliente } from "../../../Types/Cliente"
import '../../Styles/clienteForm.css'

interface ClienteFormProps {
    onAdd: (c:Cliente) => void;
}

export default function ClienteForm(props:ClienteFormProps){

    const [formData,setFormData] = useState<Cliente>({nome:"", cpf: "", telefone: "", cidade: ""});

    function handleInputChange(e:any){

        if(e.target.name && e.target.value){
            setFormData((prev)=> ({
                ...prev,
                [e.target.name]: e.target.value
            }));
        };
    }

    function handleSubmitForm(e:any){
        e.preventDefault();
        props.onAdd(formData);
    }
    return (
        <>
            <h2>Formulário Clientes</h2>

            <form onSubmit={handleSubmitForm}>
                <section className="formSection">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required/>
                </section>
                <section className="formSection">
                    <label htmlFor="nome">CPF:</label>
                    <input type="text"  name="cpf" value={formData.cpf}  onChange={handleInputChange} required/>
                </section>
                <section className="formSection">
                    <label htmlFor="nome">Telefone:</label>
                    <input type="number"  name="telefone"  value={formData.telefone}  onChange={handleInputChange} required/>
                </section>
                <section className="formSection">
                    <label htmlFor="nome">Cidade:</label>
                    <input type="text"  name="cidade" value={formData.cidade}  onChange={handleInputChange} required/>
                </section>
                <button>Salvar</button>
            </form>
        </>
    )
}
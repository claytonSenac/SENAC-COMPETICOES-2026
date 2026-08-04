import { useEffect, useRef, useState } from "react";
import { IMaskInput } from "react-imask";
import './FormUsers.css'
import type { User } from "../../Types/User";

export interface FormUsersProps{
    onAdd?: (arg0: CreateUserForm)=> void;
    cancelForm?: ()=>void;
    title?: string,
    showCancelButton?:boolean;
    editingMode:boolean;
    data?:User;
}

export interface CreateUserForm{
    nome:string,
    email:string,
    cidade:string,
    telefone:string,
    empresa:string,
    username:string
}

export default function FormUsers(props:FormUsersProps){
    const [formData,setFormData] = useState<CreateUserForm>(
        {nome:"",cidade:"",email:"",empresa:"",telefone:"",username:""}
    );

    const [sendEnabled,setSendEnabled] = useState(true)

    useEffect(() => {
      if(props.editingMode && props.data){
        setSendEnabled(false);
        const user = props.data;
        let cidadeUser = user.address?.city ?? "";
        let empresaUser = user.company?.name ?? "";

        setFormData({
            nome: user.name,
            cidade: cidadeUser,
            email: user.email,
            empresa: empresaUser,
            telefone: user.phone,
            username: user.username
        })

        inputPhoneRef.current.value = user.phone;
      }
    },[props.editingMode, props.data])

    const inputPhoneRef = useRef<any>(null);

    function handleInputChange(e:any){
        if(!e.target?.name){
            return;
        }

        setSendEnabled(true)
        let name = e.target.name;
        let value = e.target.value ?? "";
        console.log(name,value)

        setFormData((prev)=>({
            ...prev,
            [name] : value
        }))
    }

    function handleSubmitForm(e:any){
        e.preventDefault();

        props.onAdd!(formData);
        props.cancelForm!();
        clearForm();
        
    }

    function handleCancelForm(){
        props.cancelForm!();
    }

    function clearForm(){
        setFormData({nome:"",cidade:"",email:"",empresa:"",telefone:"",username:""})

        if(inputPhoneRef.current){
            inputPhoneRef.current.value = '';
        };
    }


    return (
        <>
            <form>
                <h2>{props.title ?? "Cadastro"}</h2>
                <section>
                    <label htmlFor="Nome">Nome:</label>
                    <input type="text" name="nome" value={formData.nome}  required onChange={handleInputChange}/>
                </section>
                <section>
                    <label htmlFor="Nome">Email:</label>
                    <input type="email" name="email" value={formData.email} required  onChange={handleInputChange}/>
                </section>
                <section>
                    <label htmlFor="Nome">Username:</label>
                    <input maxLength={25} type="text" name="username" value={formData.username} required  onChange={handleInputChange}/>
                </section>            
                <section>
                    <label htmlFor="Nome">Cidade:</label>
                    <input type="text" name="cidade" value={formData.cidade} required  onChange={handleInputChange}/>
                </section>  
                <section>
                    <label htmlFor="Nome">Empresa:</label>
                    <input type="text" name="empresa" value={formData.empresa} required  onChange={handleInputChange}/>
                </section>  
                <section>
                    <label htmlFor="Nome">Telefone:</label>
                    <IMaskInput
                        mask="(00) 0 0000 - 0000"
                        value={formData.telefone}
                        onAccept={handleInputChange}
                        inputRef={inputPhoneRef}
                        placeholder="(00) 0 0000 - 0000"
                    />
                </section>  
                <div className="buttons">
                    {props.showCancelButton && (
                        <button 
                            className="cancelButton"
                            onClick={handleCancelForm}
                        >Cancelar</button>
                    )}
                    <button 
                        className={`send-btn ${!sendEnabled ? 'disabled' : ''}`} 
                        disabled={!sendEnabled} 
                        onClick={handleSubmitForm}
                        >Enviar</button>
                </div>
            </form>
        </>
    )
}
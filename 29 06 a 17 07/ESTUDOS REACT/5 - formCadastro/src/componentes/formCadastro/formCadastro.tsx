import { useState } from "react";

interface User {
  nome: string;
  email: string;
  data: string;
}

export default function FormCadastro(){

    const [haveUser,setHaveUser] = useState(false);
    const [user,setUser] = useState<User | null>();

    function submitForm(e:any){
        e.preventDefault();
        const form = e.target;
        
        const nome = form[0].value;
        const email = form[1].value;
        const data = form[2].value;

        const pessoa = {nome,email,data};

        setUser(pessoa);
        setHaveUser(true);
    }

    return (
        <>  
        <div className="flex flex-col gap-2 justify-arround bg-white p-8 br-2 rounded-lg">
            <h2 className="font-bold text-center text-3xl">Formulário de Cadastro</h2>
            <form onSubmit={submitForm} className="flex flex-col gap-4 mt-2">
                <section className="formSection flex flex-col gap-2">
                    <label htmlFor="Nome" className="font-bold text-1xl">Nome</label>
                    <input type="text"  required minLength={3}  className="border-2 border-black rounded-xs p-2 bg-bçue-500"/>
                </section>
                <section className="formSection flex flex-col gap-2">
                    <label htmlFor="Email" className="font-bold text-1xl">Email:</label>
                    <input type="email" required className="border-2 border-black rounded-xs p-2 bg-bçue-500"/>
                </section>
                <section className="formSection flex flex-col gap-2">
                    <label htmlFor="DataNasc" className="font-bold text-1xl">Data Nascimento:</label>
                    <input type="date" name="DataNasc" id="DataNasc" max="2026-07-30" min="1900-01-01" className="border-2 border-black rounded-xs p-2 bg-bçue-500"/>
                </section>
                <button className="bg-blue-300 w-48 rounded-xs p-2 text-center mx-auto my-0 cursor-pointer">Salvar</button>
            </form>
            {haveUser && user &&
            <>
                <h2 className="font-bold text-center text-3xl mt-4">Usuario:</h2>
                <div className="containerDadosPessoa flex flex-col gap-2">
                    <h3 className="font-bold text-xl">Nome:</h3>
                    <p>{user.nome}</p>
                    <h3 className="font-bold text-xl">Email:</h3>
                    <p>{user.email}</p>
                    <h3 className="font-bold text-xl">Data:</h3>
                    <p>{user.data}</p>
                </div>
            </>
            }
        </div>
            
        </>
    )
}
import { useState } from "react";
import { login, setAutenticated } from "../../Auth/auth";

export default function LoginComponent(){
    const [showPassword,setShowPassword] = useState(false);

    function handleSubmit(event:any){
        event.preventDefault()
        const form = event.target;

        const email = form[0].value;
        const senha = form[1].value;

        const res = login({email, "password":senha});

        if(res){
            setAutenticated()
            window.location.href = "/"
        }else{
            alert('CREDENCIAIS INCORRETAS')
        }
    }

    return (
    <>
        <div className="container w-screen h-screen bg-blue-200 flex flex-col gap-2 items-center justify-center">
            <h2 className="font-bold text-3xl">Login:</h2>
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xs flex flex-col gap-2">
                <section className="flex flex-col gap-2 p-2">
                    <label htmlFor="email" className="font-bold text-xl">Email:</label>
                    <input type="text"  className="p-2 border-1 border-black rounded-[4px]"/>
                </section>
                <section className="flex flex-col gap-2 p-2">
                    <label htmlFor="senha" className="font-bold text-xl">Senha:</label>
                    <div className="boxSenha gap-2 flex font-bold items-center justify-center">
                        <input type={showPassword ? "text": "password"}  className="p-2 border-1 border-black rounded-[4px]"/>

                        <i className="bi bi-eye text-xl cursor-pointer" onClick={() => {
                          setShowPassword(p=> !p)
                        }}></i>
                    </div>
                </section>
                <button className="bg-black p-2 text-white rounded my-0 mx-auto cursor-pointer">LOGIN</button>
            </form>
        </div>
    </>
    );
}
import { useNavigate } from "react-router-dom";
import FormParticipante from "../Componentes/FormParticipante";

export default function Home(){
    const nav = useNavigate();
    return (
        <>
            <div className="w-full h-full flex-1 flex flex-col justify-center items-center">
                <div className="bg-white p-4 rounded md:max-w-7xl justify-between md:max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full flex flex-col items-center justify-center gap-4">
                        <h2 className="text-blue-900 font-bold text-2xl px-4">Realize sua Inscrição</h2>
                        <FormParticipante 
                            title="Inscrever"
                            onCreated={(e) => {
                              nav("/participante/"+e)
                            }}
                        />
                    </div>  
                    <div className="hidden lg:flex  w-full p-4 rounded">
                        <img className="w-full" src="/imagens_Coronel_Fabriciano_01.png" alt="Imagem festival experiencia viva" />
                    </div>
                </div>
            </div>
        </>
    )
}
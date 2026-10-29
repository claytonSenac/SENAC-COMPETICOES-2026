import { useNavigate } from "react-router-dom";
import FormParticipante from "../Components/FormParticipante";

export default function Home(){
    const nav = useNavigate();


    return (
        <>
            <div className="h-full flex flex-col items-center justify-center flex-1">
                
                <div className="m-auto w-full max-w-7xl bg-slate-50 min-h-0 rounded-2xl shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                    <div className="bg-blue-400 w-full flex flex-col h-full items-center justify-center gap-4 p-2 rounded-2xl">
                        <h2 className="text-white text-center">Faça parte!</h2>
                        <FormParticipante isAdmin={false} onSaved={(e) => {
                            nav("/participante/" + e.Id);
                        }}/>
                    </div>
                    <div className="bg-white hidden md:flex h-full rounded-2xl flex-col items-center justify-center">
                        <img src="imagens_Coronel_Fabriciano_01.png" alt="" />
                    </div>
                </div>
                
            </div>
        </>
    )
}
import FormParticipante from "../Components/FormParticipante";

export default function Home(){
    return (
        <>
            <div className="w-full h-full flex flex-col flex-1 justify-center items-center">
                <div className="w-full md: max-w-7xl bg-white rounded-none xl:rounded-2xl shadow min-h-96 grid 
                 grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 p-4">
                    <div className="w-full mx-auto md:mx-0 flex items-center">
                        <FormParticipante />
                    </div>
                    <div className="w-full hidden md:flex items-center justify-center ">
                        <img src="/imagens_Coronel_Fabriciano_01.png" alt="logo experiencia viva" />
                    </div>
                </div>
            </div>
        </>
    )
};
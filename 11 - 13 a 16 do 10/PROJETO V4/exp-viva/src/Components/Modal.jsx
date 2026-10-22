import Button from "./Button";

export default function Modal({open=false,title="",onCancel, zIndex="z-10",children}){
    
    if(!open) return null;
    return(
        <>
            <div className={`w-screen h-screen fixed bg-black/40 flex items-center justify-center top-0 left-0  ${zIndex}` }>
                <div className="flex flex-col bg-white rounded-2xl p-4 gap-4">
                    <div className="flex justify-between gap-4 items-center" >
                        <h2 className="subTitle">{title}</h2>
                        <Button bgColor="bg-red-400" text="Fechar" onClick={onCancel}/>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
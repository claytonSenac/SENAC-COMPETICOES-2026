import Button from "./Button";

export default function Modal({
    zIndex = "z-10",
    onClose,
    children,
    open = false,
    title = ""
}){

    if(!open) return null;
    return (
        <>
            <div className={`w-screen h-screen top-0 left-0 p-4 bg-black/40 fixed flex justify-center  items-center ${zIndex}`}>
                <div className="bg-slate-50 flex flex-col p-4 min-h-32 min-w-32 rounded gap-4">
                    <div className="w-full flex justify-between gap-2 items-center">
                        <p className="font-semibold text-lg">{title}</p>
                        <Button variant="excluir" onClick={onClose} title="Fechar"/>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}
export default function Modal({open = false, onClose,title = "Modal",children}){
    if(!open) return null;
    return (
        <>
            <div className="w-screen h-screen text-black fixed left-0 top-0 bg-black/40 flex items-center justify-center">
                <div className="bg-white p-4 rounded flex flex-col gap-4">
                    <div className="flex gap-4 items-center justify-between">
                        <h2 className="font-semibold">{title}</h2>
                        <button className="bg-red-400 text-white rounded p-2 text-center cursor-pointer
                        " onClick={() => {
                          onClose()
                        }}>Fechar</button>
                    </div>
                    <div className="flex flex-col flex-1 gap-4">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
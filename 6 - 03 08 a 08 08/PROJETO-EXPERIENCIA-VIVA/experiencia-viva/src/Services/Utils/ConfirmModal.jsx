
export default function ConfirmModal({onConfirm, onCancel, open}){
    if(!open) return null;
    return (
        <>
            <div className="w-screen fixed z-50  h-screen top-0 left-0 bg-black/40 flex flex-col gap-12 items-center justify-center">
                <div className="bg-white p-12 rounded flex flex-col gap-12 items-center justify-center">
                    <h2>Deseja Confirmar Ação?</h2>
                    <div className="flex gap-4">

                    <button
                        className="rounded p-2 bg-blue-400 cursor-pointer h:bg-blue-500"
                        onClick={() => {
                            onConfirm()
                        }}
                        >Confirmar</button>
                    <button 
                        className="rounded p-2 bg-red-400 cursor-pointer h:bg-red-500"
                        onClick={() => {
                            onCancel()
                        }}
                        >Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
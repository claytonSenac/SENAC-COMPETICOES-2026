

export default function ConfirmModal({open, onConfirm, onCancel}){
    if(!open) return null;
    return(
        <>
            <div className="bg-black/40 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
                <div className="bg-white p-8 max-w-xs rounded flex flex-col gap-4">
                    <h2 className="text-2xl text-center font-semibold">Deseja realmente excluir este registro?</h2>

                    <div className="w-full flex gap-4 items-center justify-between">
                        <button onClick={() => {
                         onConfirm()
                        }} className="p-4 rounded text-white bg-blue-500 hover:bg-blue-600 cursor-pointer">Confirmar</button>
                        <button onClick={() => {
                         onCancel()
                        }} className="p-4 rounded text-white bg-red-500 hover:bg-red-600 cursor-pointer">Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
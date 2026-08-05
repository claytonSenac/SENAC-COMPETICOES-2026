export default function ConfirmModal({open,onCancel,onConfirm}){
    if(!open) return null;
    return(
        <>
            <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/40">
                <div className="p-4 flex flex-col gap-4 rounded bg-white justify-center items-center">
                    <h2 className="text-xl font-bold">Você tem certeza que deseja apagar este registro?</h2>
                    <div className="flex items-center w-full justify-center gap-8">
                        <button onClick={() => {
                          onConfirm()
                        }} className="bg-green-300 text-white border-2 p-2 font-bold rounded cursor-pointer">Confirmar</button>
                        <button onClick={() => {
                          onCancel()
                        }} className="bg-red-300 text-white p-2 font-bold rounded cursor-pointer">Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
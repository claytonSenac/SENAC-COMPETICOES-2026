export default function ConfirmModal({onConfirm,onCancel,Open}){
    if(!Open) return null;
    return (
        <>
            <div className="fixed w-screen h-full flex bg-black/40 items-center justify-center z-50">
                <div className="bg-white p-4 flex flex-col gap-4 items-center">
                    <h2>Deseja confirmar a exclusão?</h2>
                    <div className="flex gap-4">
                        <button className="p-2 rounded bg-blue-300 cursor-pointer hover:bg-blue-500" onClick={() => {
                          onConfirm()
                        }}>Confirmar</button>
                        <button className="p-2 rounded bg-red-300 cursor-pointer hover:bg-red-500" onClick={() => {
                          onCancel()
                        }}>Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
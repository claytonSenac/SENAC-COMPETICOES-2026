import Modal from "./Modal"

export default function ConfirmModal({open = false, title = '', onConfirm, onClose}){
    return (
        <>
            <Modal onClose={onClose} open={open} title={title} >
                <div className="flex w-full p-4 flex-col gap-4 text-black">
                    <h2 className="font-semibold text-center text-xl">Confirmar Ação:</h2>
                    <div className="flex w-full justify-between gap-4">
                        <button onClick={() => {
                          onClose()
                        }} className="bg-red-400 cursor-pointer p-2 text-white rounded">Cancelar</button>
                        <button onClick={() => {
                          onConfirm()
                        }} className="bg-blue-400 cursor-pointer p-2 text-white rounded">Confirmar</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
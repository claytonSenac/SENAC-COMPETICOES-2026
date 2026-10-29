import Button from "./Button";
import Modal from "./Modal";

export default function ModalConfirm({
    open, text,onConfirm, onClose
}){
    return(
        <>
            <Modal onClose={onClose} open={open} title="Confirmar Ação" zIndex="z-50">
                <div className="flex flex-col gap-4">
                    <h2 className="text-center">{text}</h2>
                    <div className="flex gap-4 justify-between">
                        <Button title="Cancelar" variant="excluir" onClick={onClose}/>
                        <Button title="Confirmar" variant="default" onClick={onConfirm}/>
                    </div>
                </div>
            </Modal>
        </>
    )
}
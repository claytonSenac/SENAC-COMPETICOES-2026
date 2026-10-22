import Button from "./Button";
import Modal from "./Modal";

export default function ConfirmModal({open, onCancel,onConfirm, title="Confirmar Ação"}){
    return(
        <>
            <Modal open={open} onCancel={onCancel} onConfirm={onConfirm} title={"Ação"} >
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <div className="flex justify-between p-2 items-center gap-4">
                        <Button text="Confirmar" onClick={onConfirm} />
                        <Button text="Cancelar" onClick={onCancel} bgColor="bg-red-400" />
                    </div>
                </div>
            </Modal>
        </>
    )
}
import { useEffect, useState } from "react";
import {
    create,
    deleteEvento,
    getEventos,
    update
} from "../../Services/EventoService";
import ConfirmModal from "../../Services/Utils/ConfirmModal";

export default function Evento() {
    const [Eventos, setEventos] = useState([]);
    const [idToDelete, setIdToDelete] = useState(null);
    const [creatingMode, setCreatingMode] = useState(true);
    const [formOpen, setFormOpen] = useState(false);
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        loadEventos();
    }, []);

    async function loadEventos() {
        const response = await getEventos();

        if (response.ok) {
            const data = await response.json();
            setEventos(data.data ?? []);
        }
    }

    async function handleCreateEvento(e) {
        let res;

        if (creatingMode) {
            res = await create(e);
        } else {
            res = await update(e);
        }

        if (res.ok) {
            alert(creatingMode ? "Evento criado!" : "Evento atualizado!");

            setFormOpen(false);
            setInitialData(null);

            await loadEventos();
        } else {
            const data = await res.json();
            alert(data.text ?? "Ocorreu um erro.");
        }
    }

    async function handleDeleteEvento(id) {
        const res = await deleteEvento(id);

        if (res.ok) {
            alert("Evento excluído!");

            setIdToDelete(null);

            await loadEventos();
        } else {
            alert("Não foi possível excluir o evento.");
        }
    }

    function handleOpenCreate() {
        setInitialData(null);
        setCreatingMode(true);
        setFormOpen(true);
    }

    function handleOpenEdit(evento) {
        setInitialData(evento);
        setCreatingMode(false);
        setFormOpen(true);
    }

    return (
        <>
            <div className="w-full p-8 flex flex-col gap-4 items-center">
                <h1 className="text-3xl font-semibold">
                    Gerenciamento de Eventos
                </h1>

                <div className="w-full max-w-225 p-4 flex flex-col">
                    <div className="flex justify-end p-4">
                        <button
                            type="button"
                            className="text-3xl text-primary cursor-pointer"
                            onClick={handleOpenCreate}
                        >
                            <i className="bi bi-plus-square-fill p-4"></i>
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="p-3 text-left">Id</th>
                                    <th className="p-3 text-left">Nome</th>
                                    <th className="p-3 text-left">Data</th>
                                    <th className="p-3 text-left">Vagas</th>
                                    <th className="p-3 text-left">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Eventos.length > 0 ? (
                                    Eventos.map((evento) => (
                                        <tr
                                            key={evento.id}
                                            className="border-b hover:bg-gray-50"
                                        >
                                            <td className="p-3">
                                                {evento.id}
                                            </td>

                                            <td className="p-3">
                                                {evento.nome}
                                            </td>

                                            <td className="p-3">
                                                {formatarData(
                                                    evento.dataEvento
                                                )}
                                            </td>

                                            <td className="p-3">
                                                {evento.vagas}
                                            </td>

                                            <td className="p-3">
                                                <div className="flex gap-2">
                                                    <button
                                                        type="button"
                                                        className="p-2 rounded bg-primary text-white cursor-pointer"
                                                        onClick={() =>
                                                            handleOpenEdit(
                                                                evento
                                                            )
                                                        }
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="p-2 rounded bg-red-400 text-white cursor-pointer"
                                                        onClick={() =>
                                                            setIdToDelete(
                                                                evento.id
                                                            )
                                                        }
                                                    >
                                                        <i className="bi bi-trash-fill"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="text-center p-6 text-gray-500"
                                        >
                                            Nenhum evento cadastrado.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {formOpen && (
                <FormEvento
                    open={formOpen}
                    creatingMode={creatingMode}
                    initialData={initialData}
                    onCancel={() => {
                        setFormOpen(false);
                        setInitialData(null);
                    }}
                    onSave={handleCreateEvento}
                />
            )}

            <ConfirmModal
                open={idToDelete !== null}
                onCancel={() => {
                    setIdToDelete(null);
                }}
                onConfirm={async () => {
                    await handleDeleteEvento(idToDelete);
                }}
            />
        </>
    );
}


function formatarData(data) {
    if (!data) return "-";

    const date = new Date(data);

    if (Number.isNaN(date.getTime())) {
        return "-";
    }

    return date.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

function formatarParaInput(data) {
    if (!data) return "";

    const date = new Date(data);

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    const ano = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, "0");
    const dia = String(date.getDate()).padStart(2, "0");
    const hora = String(date.getHours()).padStart(2, "0");
    const minuto = String(date.getMinutes()).padStart(2, "0");

    return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
}

function FormEvento({
    open,
    creatingMode,
    initialData,
    onSave,
    onCancel
}) {
    const [formData, setFormData] = useState({
        id: null,
        nome: "",
        dataEvento: "",
        vagas: ""
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                id: initialData.id ?? null,
                nome: initialData.nome ?? "",
                dataEvento: formatarParaInput(
                    initialData.dataEvento
                ),
                vagas: initialData.vagas ?? ""
            });
        } else {
            setFormData({
                id: null,
                nome: "",
                dataEvento: "",
                vagas: ""
            });
        }
    }, [initialData]);

    if (!open) return null;

    function handleInputChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!formData.nome.trim()) {
            alert("Informe o nome do evento.");
            return;
        }

        if (!formData.dataEvento) {
            alert("Informe a data do evento.");
            return;
        }

        if (!formData.vagas || Number(formData.vagas) <= 0) {
            alert("Informe uma quantidade válida de vagas.");
            return;
        }

        const evento = {
            ...formData,
            vagas: Number(formData.vagas),
            dataEvento: new Date(formData.dataEvento).toISOString()
        };

        onSave(evento);
    }

    return (
        <div className="w-screen h-screen top-0 left-0 bg-black/40 fixed z-50 flex items-center justify-center">
            <div className="w-full max-w-md p-6 flex flex-col gap-5 bg-white rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-semibold">
                    {creatingMode ? "Criar Evento" : "Editar Evento"}
                </h2>

                <form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <section className="flex flex-col gap-1">
                        <label htmlFor="nome">
                            Nome:
                        </label>

                        <input
                            className="border rounded p-2 w-full"
                            type="text"
                            name="nome"
                            id="nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                            placeholder="Nome do evento"
                        />
                    </section>

                    <section className="flex flex-col gap-1">
                        <label htmlFor="dataEvento">
                            Data do evento:
                        </label>

                        <input
                            className="border rounded p-2 w-full"
                            type="datetime-local"
                            name="dataEvento"
                            id="dataEvento"
                            value={formData.dataEvento}
                            onChange={handleInputChange}
                        />
                    </section>

                    <section className="flex flex-col gap-1">
                        <label htmlFor="vagas">
                            Vagas:
                        </label>

                        <input
                            className="border rounded p-2 w-full"
                            type="number"
                            name="vagas"
                            id="vagas"
                            min="1"
                            value={formData.vagas}
                            onChange={handleInputChange}
                            placeholder="Quantidade de vagas"
                        />
                    </section>

                    <section className="flex gap-4 items-center justify-end pt-2">
                        <button
                            type="button"
                            className="bg-red-400 text-white p-2 px-4 rounded cursor-pointer"
                            onClick={onCancel}
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-400 text-white p-2 px-4 rounded cursor-pointer"
                        >
                            {creatingMode ? "Criar" : "Editar"}
                        </button>
                    </section>
                </form>
            </div>
        </div>
    );
}
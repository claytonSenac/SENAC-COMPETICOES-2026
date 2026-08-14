import { useEffect, useState } from "react";
import {
    cancelarInscricao,
    create,
    deleteEvento,
    getEventoEInscricoes,
    getEventos,
    update
} from "../../Services/EventoService";
import ConfirmModal from "../../Services/Utils/ConfirmModal";
import { getCategorias } from "../../Services/CategoriaService";
import Grid from "../../Components/Grid";
import { formatarData, formatarParaInput, formatarTelefone } from "../../Services/Utils/Formats";

export default function Evento() {
    const [Eventos, setEventos] = useState([]);
    const [idToDelete, setIdToDelete] = useState(null);
    const [creatingMode, setCreatingMode] = useState(true);
    const [formOpen, setFormOpen] = useState(false);
    const [initialData, setInitialData] = useState(null);
    const [eventoToDetails, setEventoToDetails] = useState(null);
    const [categorias,setCategorias] = useState(null);

    const columns = [
        {label: "Id",value:"id"},
        {label: "Nome",value:"nome"},
        {label: "Data",value:"dataEvento", render: (e) => 
          formatarData(e)
        },
        {label: "Vagas",value:"vagas"}]

    const actions = (row) => {
        return (
        <div className="flex gap-2">
        <button
            type="button"
            className="p-2 rounded bg-yellow-500 text-white cursor-pointer"
            onClick={() =>
                handleOpenEdit(
                    row
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
                    row.id
                )
            }
        >
            <i className="bi bi-trash-fill"></i>
        </button>
        <button
            type="button"
            className="p-2 rounded bg-blue-400 text-white cursor-pointer"
            onClick={() =>
                setEventoToDetails(
                    row.id
                )
            }
        >
            <i className="bi bi-eye-fill"></i>
        </button>
    </div>
        )
    }

    useEffect(() => {
        loadEventos();
        loadCategorias();
    }, []);

    async function loadEventos() {
        const response = await getEventos();

        if (response.ok) {
            const data = await response.json();
            setEventos(data.data ?? []);
        }
    }

    async function loadCategorias(){
        const response = await getCategorias();

        if (response.ok) {
            const data = await response.json();
            setCategorias(data.data ?? []);
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
                            className="text-4xl text-primary cursor-pointer"
                            onClick={handleOpenCreate}
                        >
                            <i className="bi bi-plus-square-fill p-4"></i>
                        </button>
                    </div>
                    <Grid 
                        columns={columns}
                        rows={Eventos}
                        actions={actions}
                    />
                </div>
            </div>

            {formOpen && (
                <FormEvento
                    open={formOpen}
                    creatingMode={creatingMode}
                    initialData={initialData}
                    categorias={categorias}
                    onCancel={() => {
                        setFormOpen(false);
                        setInitialData(null);
                    }}
                    onSave={handleCreateEvento}
                />
            )}

            {eventoToDetails &&(
                <InscricoesEvento 
                    idEvento={eventoToDetails}
                    onClose={() => {
                      setEventoToDetails(null)
                    }}
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




function FormEvento({
    open,
    creatingMode,
    initialData,
    onSave,
    onCancel,
    categorias
}) {
    const [formData, setFormData] = useState({
        id: null,
        nome: "",
        dataEvento: "",
        vagas: ""
    });

    const [filterCategoria, setFilterCategoria]= useState("");
    const [categoriasFilter,setCategoriasFIlter] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada]= useState(null);


    useEffect(() => {
        if (initialData) {
            console.log(initialData)
            setFormData({
                id: initialData.id ?? null,
                nome: initialData.nome ?? "",
                dataEvento: formatarParaInput(
                    initialData.dataEvento
                ),
                vagas: initialData.vagas ?? ""
            });
            setCategoriaSelecionada(initialData.idCategoria);
        } else {
            setFormData({
                id: null,
                nome: "",
                dataEvento: "",
                vagas: ""
            });
            setCategoriaSelecionada("")
        }
    }, [initialData]);

    useEffect(() => {
        setCategoriasFIlter([...categorias])
    },[])

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

        if(!categoriaSelecionada){
            alert("selecione uma categoria")
            return;
        }

        const evento = {
            ...formData,
            vagas: Number(formData.vagas),
            idCategoria: categoriaSelecionada,
            dataEvento: new Date(formData.dataEvento).toISOString()
        };

        onSave(evento);
    }

    useEffect(() => {
      let filtered = categorias.filter(c => c.nome.includes(filterCategoria.toLowerCase()));

      setCategoriasFIlter([...filtered])
    },[filterCategoria]);

    function handleSelectCategoria(e){
       setCategoriaSelecionada(e.target.value);
   }

    if (!open) return null;

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
                        <label htmlFor="nome" className="font-semibold">
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
                        <label htmlFor="dataEvento" className="font-semibold">
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
                        <label htmlFor="vagas" className="font-semibold">
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
                    <section className="flex flex-col gap-4">
                        <label htmlFor="categoria" className="font-semibold">
                            Categoria:
                        </label>

                        <input
                            className="border rounded p-1"
                            type="text"
                            name="categoriaText"
                            value={filterCategoria}
                            onChange={(e) => {
                              setFilterCategoria(e.target.value)
                            }}
                            placeholder="Pesquise"
                        />
                        <select className="border border-gray-500 rounded p-2 w-full" onChange={handleSelectCategoria} defaultValue="" value={categoriaSelecionada}>
                            <option value="">SELECIONE UMA CATEGORIA</option>

                            {categoriasFilter.map((p)=>(
                                <option value={p.id}>{p.nome}</option>
                            ))}
                        </select>
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

function InscricoesEvento({idEvento, onClose}){

    const [evento,setEvento] = useState(null);
    const [idToDelete,setIdToDelete] = useState(null)

    useEffect(() => {
        const loadData = async () => {
            const data = await getEventoEInscricoes(idEvento);

            if(data.ok){
                const result = await data.json()
                setEvento(result.data);
            }
        }

        loadData();
    },[idEvento])

    if(!evento) return null;

    async function handleCancelarInscricao(id){
        const res = await cancelarInscricao(id);
        if(res.ok){
            setIdToDelete(null);
            const inscritos = evento.inscricao_evento.filter(e=> e.id !=id);

            setEvento((prev)=>({
                ...prev,
                inscricao_evento: inscritos
            }))
        }
    }

    return (
        <>
        <div className="w-screen h-screen top-0 left-0 bg-black/40 fixed z-50 flex items-center justify-center">
            <div className="w-full max-w-md p-6 flex flex-col gap-5 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col">
                    <h2 className="text-center text-2xl font-semibold">Detalhes do Evento <span className="text-accent">{evento.nome}</span></h2>
                </div>

                <p>Data: <strong>{formatarData(evento.dataEvento)}</strong></p>
                <p>Vagas: <strong>{formatarData(evento.vagas)}</strong></p>
                <p>Categoria: <strong>{evento.categoria.nome ?? ""}</strong></p>

                <div className="w-full p-8 flex flex-col gap-4 border rounded border-gray-400 bg-secondary max-h-64 overflow-auto">
                    <h2 className="font-bold text-2xl text-center">Inscritos:</h2>

                    {evento?.inscricao_evento.length > 0 ? (

                    <>
                        {evento.inscricao_evento.map((e,i)=> (
                            <li key={i} className="border border-accent p-4 rounded bg-white flex gap-4">
                                <div>
                                    <h2><strong>Nome:</strong> {e.participante.nome}</h2>
                                    <h2><strong>Telefone:</strong> {formatarTelefone(e.participante.telefone)}</h2>
                                    <h2><strong>Email:</strong> {e.participante.email}</h2>
                                </div>
                                <button className="flex items-center justify-center"
                                 onClick={() => {
                                   setIdToDelete(e.id)
                                 }}>
                                    <i className="bi bi-trash-fill p-2 text-accent text-2xl cursor-pointer"></i>
                                </button>
                            </li>
                        ))}

                    </>
                    ) : (
                        <div className="p-4 rounded bg-white  text-center text-2xl">
                            <p>Sem Inscrições</p>
                        </div>
                    )}    
                </div>     
                <button
                    type="button"
                    className="bg-red-400 text-white p-2 px-4 rounded cursor-pointer"
                    onClick={onClose}
                >
                    Fechar
                </button>           
            </div>
        </div>

            <ConfirmModal
                    open={idToDelete !== null}
                    onCancel={() => {
                        setIdToDelete(null);
                    }}
                    onConfirm={async () => {
                        await handleCancelarInscricao(idToDelete);
                    }}
            />
        </>
    );
}
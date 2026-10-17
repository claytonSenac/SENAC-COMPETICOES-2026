import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { service } from "../service";
import FormParticipante from "../Componentes/FormParticipante";
import ConfirmModal from "../Componentes/ConfirmModal";

export default function Participante() {
    const { id } = useParams();

    const [p, setP] = useState(null);
    const [atividadesDisponiveis, setAtividadesDisponiveis] = useState([]);

    async function loadData() {
        const res = await service.getParticipanteById(id);

        const atividadesRes = await service.getAtividadesDispoinveis(id);

        if (atividadesRes) {
            setAtividadesDisponiveis(atividadesRes.data);
        }

        if (!res) {
            toast.error("Erro ao carregar dados");
            return;
        }

        if (res.code === 200) {
            setP(res.data);
        } else {
            toast.error(res.text);
        }
    }

    useEffect(() => {
        loadData();
    }, [id]);

    return (
        <div className="h-full w-full flex flex-1 flex-col items-center justify-center flex-wrap p-4">
            <div className="bg-white w-full max-w-11/12 p-4 rounded flex flex-wrap gap-4">
                <div className="flex gap-4 justify-between w-full">
                    <div>
                    <FormParticipante
                        title={p?.nome}
                        initialData={p}
                        onCreated={async () => {
                            await loadData();
                        }}
                    />
                </div>

                <div className="border-2 border-blue-400 w-full p-4 rounded">
                    <h2 className="font-semibold">
                        Inscrições feitas:
                    </h2>

                    <div className="w-full">

                        {p?.atividade_participante?.length === 0 && (
                            <p>Sem Inscrições</p>
                        )}

                        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">

                            {p?.atividade_participante?.map((inscricao) => (
                                <AtividadeList
                                    key={inscricao.id}
                                    a={inscricao.atividade}
                                    idInscricao={inscricao.id}

                                    idParticipante={id}
                                    inscrito={true}

                                    onSaved={async () => {
                                        await loadData();
                                    }}
                                />
                            ))}

                        </div>
                    </div>
                </div>
                </div>

                <div className="w-full border-2 border-blue-400 p-4 rounded">

                    <h2 className="font-semibold">
                        Atividades disponíveis:
                    </h2>

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">

                        {atividadesDisponiveis.map((atividade) => (
                            <AtividadeList
                                key={atividade.id}
                                a={atividade}
                                idParticipante={id}
                                inscrito={false}
                                onSaved={async () => {
                                    await loadData();
                                }}
                            />
                        ))}

                    </div>
                </div>

            </div>
           
        </div>
    );
}


function AtividadeList({
    a = null,
    inscrito = false,
    onSaved,
    idParticipante,
    idInscricao = null
}) {

    const [confirmModal, setConfirmModal] = useState({open:false,title:"", onConfirm: ()=>{}})

    if (!a) {
        return null;
    }

    async function handleClicked() {
        if (inscrito) {

            console.log("inscricao", idInscricao);

            const res = await service.removerInscricao(idInscricao);

            if (res) {
                toast.info(res.text);
                await onSaved();
            }
            return;
        }

        const res = await service.inscreverAtividade({
            idAtividade: a.id,
            idParticipante: idParticipante
        });

        if (res) {
            toast.info(res.text);
            await onSaved();
        }
    }


    return (
        <li className="w-full bg-blue-900 list-none text-white rounded flex flex-col gap-4 p-2">

            <p>
                {a.nome ?? "-"}
            </p>

            <p className="text-black h-6 text-center rounded w-16 bg-white">
                {a.vagas_restantes} / {a.vagas}
            </p>

            <p>
                {a.data} as {a.horario}
            </p>

            <button
                className={`p-2 rounded cursor-pointer ${
                    inscrito
                        ? "bg-red-400"
                        : "bg-blue-400"
                }`}
                onClick={() => {
                  setConfirmModal({open:true,title:inscrito ? "Remover Inscrição" :  "Realizar Inscrição", onConfirm: () => {
                        handleClicked()
                  }})
                }}
            >
                {inscrito ? "Cancelar" : "Inscrever"}
            </button>

             <ConfirmModal onClose={() => {
              setConfirmModal({open:false, onConfirm:null});
            }} 
                open={confirmModal.open}
                onConfirm={confirmModal.onConfirm}
                title={confirmModal.title}
            />

        </li>
    );
}

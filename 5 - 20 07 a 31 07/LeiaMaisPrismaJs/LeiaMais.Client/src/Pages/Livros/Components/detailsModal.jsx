import { formatDate } from "../service/utils";
export function DetailsModal({
  selectedLivro,
  onClose,
}) {
  if (!selectedLivro) return null;

    return (
        <>
            {selectedLivro != null && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/40">
                    <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Detalhes do Livro</h2>

                            <button
                                onClick={() => onClose() }
                                className="rounded cursor-pointer bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                            >
                                Fechar
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            <p>
                                <strong>Nome:</strong> {selectedLivro.nome}
                            </p>

                            <p>
                                <strong>ISBN:</strong> {selectedLivro.isbn}
                            </p>

                            <p>
                                <strong>Autor:</strong> {selectedLivro.autor?.nome}
                            </p>

                            <p>
                                <strong>Nacionalidade:</strong>{" "}
                                {selectedLivro.autor?.nacionalidade}
                            </p>

                            <p>
                                <strong>Nascimento do Autor:</strong>{" "}
                                {selectedLivro.autor
                                    ? formatDate(selectedLivro.autor.dataNascimento)
                                    : ""}
                            </p>

                            <p>
                                <strong>Editora:</strong>{" "}
                                {selectedLivro.editora?.nome}
                            </p>

                            <p>
                                <strong>País da Editora:</strong>{" "}
                                {selectedLivro.editora?.pais}
                            </p>

                            <p>
                                <strong>Cidade:</strong>{" "}
                                {selectedLivro.editora?.cidade}
                            </p>

                            <p>
                                <strong>Fundação da Editora:</strong>{" "}
                                {selectedLivro.editora
                                    ? formatDate(selectedLivro.editora.dataFundacao)
                                    : ""}
                            </p>

                            <p>
                                <strong>Gênero:</strong>{" "}
                                {selectedLivro.generolivro?.nome}
                            </p>

                            <p>
                                <strong>Páginas:</strong>{" "}
                                {selectedLivro.numPaginas}
                            </p>

                            <p>
                                <strong>Volume:</strong>{" "}
                                {selectedLivro.volume}
                            </p>

                            <p>
                                <strong>Coleção:</strong>{" "}
                                {selectedLivro.colecao}
                            </p>

                            <p>
                                <strong>Edição:</strong>{" "}
                                {selectedLivro.edicao}
                            </p>

                            <p>
                                <strong>Data de Lançamento:</strong>{" "}
                                {formatDate(selectedLivro.dataLancamento)}
                            </p>

                            <p>
                                <strong>Data de Cadastro:</strong>{" "}
                                {formatDate(selectedLivro.dataFundacao)}
                            </p>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
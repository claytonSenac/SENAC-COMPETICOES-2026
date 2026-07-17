import './CardPessoa.css'

interface CardPessoaProps{
    nome: string;
    profissao?: string;
    idade:number;
    cidade:string
}

export function CardPessoaComponent(data:CardPessoaProps){
    return (
        <>
            <div className="containerPessoa">
                <h2>Dados Pessoa:</h2>
                <div className="containerCaracteristicas">

                <section className="boxInfoPessoa">
                    <h3>Nome:</h3>
                    <p>{data.nome}</p>
                </section>
                <section className="boxInfoPessoa">
                    <h3>Profissão:</h3>
                    <p>{data.profissao ?? "Não Informado"}</p>
                </section>
                <section className="boxInfoPessoa">
                    <h3>Idade:</h3>
                    <p>{data.idade}</p>
                </section>
                <section className="boxInfoPessoa">
                    <h3>Cidade:</h3>
                    <p>{data.cidade}</p>
                </section>
                </div>
            </div>
        </>
    )
}
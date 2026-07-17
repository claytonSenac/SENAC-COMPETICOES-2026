import './BoasVindas.css'

 interface BoasVindasProps {
  NomeAluno:string;
  Curso: string;
  Cidade: string;
}

export function BoasVindasComponent(data:BoasVindasProps){
  const getDateTime = () => {
    let dataAtual = new Date().toLocaleString([],{
        hour: '2-digit',
        minute: '2-digit',
        day: 'numeric',
        month: '2-digit',
        year: 'numeric'
    });
    return dataAtual;
  }

  return (
    <>
    <div className="boasVindas">
      <div className="introducao">
        <h1>Seja bem Vindo(a)</h1>
        <h2>{data.NomeAluno}</h2>

      </div>

      <div className="dadosAluno">
        <section className="infoAluno">
          <h3>Você é do curso:</h3>
          <p>{data.Curso}</p>
        </section>
        <section className="infoAluno">
          <h3>Você é da Cidade:</h3>
          <p>{data.Cidade}</p>
        </section>
        <section className="infoAluno">
          <h3>Data Atual:</h3>
          <p>{getDateTime()}</p>
        </section>
      </div>
    </div>
    </>
  )
};

export default BoasVindasComponent;
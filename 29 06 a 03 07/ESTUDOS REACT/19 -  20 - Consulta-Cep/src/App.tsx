import { useState } from "react"
import { getCep, type viaCepResponse } from "./Service/viaCepService";


function App() {
  const [cep,setCep] = useState("");
  const [showResult,setShowResult] = useState(false);
  const [cepResult,setCepResult] = useState<viaCepResponse | null>();

  function handleInputChange(e:any){
    let valor = e.target.value;

    setCep(valor);
    setShowResult(false);
  }

  async  function buscarCep(){
    const cepRaw = cep.replace(/\D/g, "");
    if(cepRaw.length != 8){
      alert('cep incompleto')
      setCepResult(null);
      setShowResult(false);
    }
    const res = await getCep(cepRaw);

    if(res.success){
      setCepResult(res.data);
      setShowResult(true);
    }else{
      setCepResult(null);
      setShowResult(false);
    }
  }

  return (
    <>
     <h1>Consulta CEP</h1>
     <div className="containerCepSearch">
          <input maxLength={10} type="text" value={cep} onChange={handleInputChange} />
          <button onClick={async () => {
            await buscarCep();
          }}>Buscar</button>
     </div>

     {showResult && cepResult && (
      <div className="containerResult">
        <p>CEP:{cepResult.cep}</p>
        <p>Bairro:{cepResult.bairro}</p>
        <p>Cidade:{cepResult.localidade}</p>
        <p>UF:{cepResult.uf}</p>
        <p>Logradouro:{cepResult.logradouro }</p>
        <p>Estado: {cepResult.estado}</p>
        <p>Bairro: {cepResult.bairro}</p>
        <p>Codigo IBGE: {cepResult.ibge}</p>
        <p>DDD:{cepResult.ddd}</p>
        <p>Complemento: {cepResult.complemento}</p>
        <p>Unidade: {cepResult.unidade}</p>
      </div>
     )}
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue,setInputValue] = useState(0);
  const [resultText,setresultText] = useState("");

  function handleVerificarEstoque(){
    if(inputValue <= 0){
      setresultText("ESTOQUE ESGOTADO");
      return;
    }else if( inputValue > 0 && inputValue <= 50)
    {
      setresultText("ESTOQUE BAIXO")
      return;
    }else if( inputValue  > 50){
      setresultText("ESTOQUE CHEIO")
      return;
    }
  }

  function handleChangeInput(e:any){
    setInputValue(e.target.value);
  }

  return (
    <>
      <div className="container w-screen h-screen bg-blue-200 flex flex-col gap-2 items-center justify-center">
          <h1 className='text-3xl font-bold'>Status do Estoque</h1>
          <div className="boxLabel bg-white p-4 rounded flex gap-2 font-bold items-center justify-center">
            <label htmlFor="Estoque" className='text-xl'>Estoque:</label>

            <input type="number" name="Estoque" id="Estoque" value={inputValue} max={400} onChange={handleChangeInput} className='border-1 border-black p-2 rounded'/>
            <button onClick={handleVerificarEstoque} className='text-xl bg-red-500 p-2 text-white rounded cursor-pointer'>Verificar</button>
          </div>
          <div className="result text-xl">
            {resultText}
          </div>
      </div>
    </>
  )
}

export default App

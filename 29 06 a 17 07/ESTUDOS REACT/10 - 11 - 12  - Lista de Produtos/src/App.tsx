import { useState } from "react"
import './App.css'

function App() {

  const [produtos,setProdutos] = useState(["Notebook","Mouse","Monitor","Impressora","Teclado"]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e:any){
    setInputValue(e.target.value);
  }

  function handleSaveProduto(){

    if(inputValue.length <= 3){
      alert('PRODUTO COM NOME PEQUENO');
      return;
    }

    if(produtos.find((p)=> p.toLocaleLowerCase() == inputValue.toLocaleLowerCase())){
      alert('PRODUTO JA EXISTE NA LISTA');
      return;
    }

    setProdutos((prev) => [...prev,inputValue]);
    setInputValue("");
   
  }

  function handleKeyDown(e:any){
    if(e.key == "Enter"){
      handleSaveProduto();
      return;
    }
  }

  function handleDeleteProduto(index:number){
    produtos.splice(index,1);
    setProdutos([...produtos])
  }

  return (
    <>
      <main>
        <h1>Lista de Produtos</h1>
        <p>Mapeando um array de STRINGS com .map() (JAVASCRIPT)</p>
        { produtos.length > 0 && 
          <>
            <div className="containerProdutos">
              {produtos.map((p,i)=>(
                <>
                <div className="produto">
                  <p>{p}</p>
                  <button onClick={() => {
                    handleDeleteProduto(i)
                  }}>Excluir</button>
                </div>
                </>

              ))}
            </div>
        </>}
        <div className="containerCriarProduto">
              <input type="text" onKeyDown={handleKeyDown} value={inputValue} onChange={handleInputChange}/>
              <button onClick={handleSaveProduto}>Salvar</button>
        </div>
      </main>
    </>
  )
};

export default App;


import { useEffect, useState } from 'react'
import './App.css'
import {type Produto } from './types/Produto'

function App() {

  const [form,setForm] = useState<Produto>({nome:"",categoria:"",quantidade:1, valor:0})
  const [produtos,setProdutos] = useState<Produto[]>([]);

  function handleInputChange(e:any){
    setForm((prev)=>(
      {...prev,
      [e.target.name]: e.target.value}
    ));
  }

  function salvarProduto(e:any){
    console.log('a')
    e.preventDefault();
    setProdutos((prev)=> ([
      ...prev,
      form
    ]))
  }

  useEffect(() => {
    console.log(produtos)
  },[produtos])



  return (
    <>
      <div className="produtoForm">
        <form onSubmit={salvarProduto}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" name='nome' value={form?.nome}  onChange={handleInputChange}/>
          <label htmlFor="">Categoria</label>
          <input type="text" name='categoria' value={form.categoria}  onChange={handleInputChange}/>
          <label htmlFor="">Quantidade:</label>
          <input type="number"  name='quantidade' value={form.quantidade} min={1} onChange={handleInputChange}/>
          <label htmlFor="">Valor:</label>
          <input type="number" value={form.valor} name='valor'  onChange={handleInputChange}/>
          <button >Salvar</button>
        </form>
      </div>

        {produtos.map((p) => (
          <>
            <p>{p.nome}</p>
            <p>{p.categoria}</p>
            <p>{p.quantidade}</p>
            <p>{p.valor}</p>
          </>
        ))}
    
        </>
  )
}

export default App;

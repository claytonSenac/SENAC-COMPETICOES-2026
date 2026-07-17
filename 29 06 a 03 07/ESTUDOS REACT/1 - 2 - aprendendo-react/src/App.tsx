import BoasVindasComponent from './components/BoasVindas/BoasVindas'
import { CardPessoaComponent } from './components/CardPessoa/CardPessoa'
import './App.css'

function App() {

  return (
    <> 
    <div className="container">

    <BoasVindasComponent  
      Cidade='Bahia'
      Curso='Pedagogia'
      NomeAluno='Pedrinho Show'
      />
      
      <hr />
      
    <div className="containerCards">
      <CardPessoaComponent 
        cidade='Timoteo'
        idade={25}
        nome='Vinicin'
        profissao='Ti'
      />
      <CardPessoaComponent 
        cidade='Timoteo'
        idade={18}
        nome='Flavio'
        profissao='Padeiro'
      />     
      <CardPessoaComponent 
        cidade='Timoteo'
        idade={35}
        nome='Jessica'
        profissao='Costureira'
      />  
      <CardPessoaComponent 
        cidade='Timoteo'
        idade={15}
        nome='Creuza'
        profissao='Ginastica'
      />     
      <CardPessoaComponent 
        cidade='Timoteo'
        idade={20}
        nome='Julinda'
      />  
    </div>

    </div>
  </>
  )
}

export default App


import { useEffect, useState } from 'react'
import './App.css'
import { logged, logout } from './Auth/auth'


function App() {
  const [data,setData] = useState("")
  const [showAlert,setShowAlert] = useState(false);
  useEffect(() => {
    if(logged()){
      setData('AUTENTICADO')
    }else{
      setData("NAO AUTENTICADO!");
      setShowAlert(true)
        
      setTimeout(() => {
          window.location.href= "/login"
      },5000)

    }
  },[])

  function handleLogout(){
    logout()
  }

  return (
    <>
      <main className="container">
        <h1>PAGINA APP</h1>
        <h2>{data}</h2>
        {showAlert && 
        <>
          <h2>VOCE SERA REDIRECIONADO EM 5 SEGUNDOS</h2>
        </>}
        <button onClick={handleLogout}>DESLOGAR</button>
      </main>
    </>
  )
}

export default App

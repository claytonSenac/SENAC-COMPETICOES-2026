
import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor,setBgColor]= useState("blue");

  function setColor(hex:string){
    setBgColor(hex)
  }

  return (
    <>
     <div className="container" style={{backgroundColor: bgColor}}>
      <button onClick={() => {
        setColor('blue')
      }}>Azul</button>

      <button onClick={() => {
        setColor('green')
      }}>Verde</button>
      
      <button onClick={() => {
        setColor('red')
      }}>Vermelho</button> 
     </div>
    </>
  )
}

export default App

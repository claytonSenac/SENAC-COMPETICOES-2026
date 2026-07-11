import { useEffect, useState } from 'react';
import './css/index.css';
import { PlusSquare, DashSquare } from 'react-bootstrap-icons';



export default function ContadorDeCliques(){
    const [count,setCount] = useState(0);
    const [modo,setModo] = useState('Normal');

    useEffect(() => {
      setModo('Normal');
      setCount(0)
    },[])

    useEffect(() => {
      if(modo == "Normal"){
        setCount(0);
        return;
      }

      if(modo == "Dobro"){
        setCount(1);
      }
    },[modo])

    function updateCount(tipo:string){

        if(count > 99999){
            alert('CABAÇO PASSOU DO MAXIMO')
        }

        if(tipo == "Reset"){
            if(modo == "Normal"){
                setCount(0);
                return;
            }

            if(modo == "Dobro"){
                setCount(1);
            }
            return;
        }

        switch(modo){
            case "Normal":
                if(tipo == 'Add'){
                    setCount(count => count + 1);
                }else{
                    if(count == 0){
                        setCount(0)
                    }else{
                        setCount(count => count - 1);
                    }
                }
            return;
            case "Dobro":
                if(tipo == 'Add'){
                    setCount(count => count * 2 );
                }else{
                    if(count == 0){
                        setCount(0)
                    }else{
                        setCount(count => count / 2);
                    }
                }
            return;
            default:
                return;
        }
    }

    return(
        <>
            <div className="contadorDeCliques">
                <h2>Contador de Cliques</h2>
                <section className="numberBox">
                    <p className='count'>{count}</p>
                </section>
                <section className="buttonsBox">
                    <DashSquare className='buttons removeButton' onClick={ () => {
                        updateCount('Remove')
                    }} />
                  
                    <PlusSquare className='buttons addButton' onClick={() => {
                        updateCount('Add')
                    }}/>
                </section>
                <section className="resetBox">
                    <button className="resetNumber" onClick={() => {
                      updateCount("Reset")
                    }}>
                        Reset
                    </button>
                </section>
                <section className="modes">
                    <button className={modo == "Normal" ? "activeMode modeButton" : "modeButton"} onClick={() => {
                      setModo("Normal")
                    }} >
                        Normal
                    </button>
                    <button className={modo == "Dobro" ? "activeMode modeButton" : "modeButton"} onClick={() => {
                      setModo("Dobro")
                    }} >
                        Dobro
                    </button>
                </section>
            </div>
        </>
    )
}
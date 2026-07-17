import {   useState } from "react"
import './contador.css'

export function Contador(){
    const [cronometro,setCronometro] = useState(0);
    const [paused,setPaused] = useState(true);
    const [timer,setTimer] = useState(0);

    function iniciarCronometro(){
        setPaused(false);
        let interval = setInterval(() => {
            setCronometro((prev)=> prev + 1)
        },10);

        setTimer(interval);
    }

    function pausarCronometro(){
        clearInterval(timer);
        setPaused(true);
    }

    function redefinirCronometro(){
        setCronometro(0);
        clearInterval(timer);
        setPaused(true);
    }

    function formatarTempo(ms:any) {
        console.log(ms)
        const minutos = Math.floor(ms / 60000);
        const segundos = Math.floor((ms % 60000) / 100);
       const centesimos = Math.floor((ms % 100));


        return `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}:${String(centesimos).padStart(2, "0")}`;
    }

    return (
        <>
        <div className="container">

            <h2>Cronometro</h2>
           <div className="boxNumber">
                {formatarTempo(cronometro)}
            </div>
            <div className="actions">
                <button className="start-pause" onClick={paused ? iniciarCronometro : pausarCronometro}>
                    <i className={paused ? "bi bi-play-circle-fill" : "bi bi-pause-circle-fill"}></i>
                </button>
                <button className={cronometro > 0 ? "pauseStop active" : "pauseStop"} >
                    <i className="bi bi-stop-circle-fill" onClick={redefinirCronometro}></i>
                </button>
            </div>
        </div>
        </>
    )
}
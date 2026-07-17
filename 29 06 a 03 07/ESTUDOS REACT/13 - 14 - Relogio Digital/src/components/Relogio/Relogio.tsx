import { useEffect, useState } from 'react';
import './relogio.css'

export function Relogio(){

    const [relogio,setRelogio] = useState<{hora:string,minuto:string,segundo:string}>();

    useEffect(() => {
        function loadRelogio(){
            setInterval(() => {
                let data = new Date();
                let hora = data.getHours();
                let minuto = data.getMinutes();
                let segundo = data.getSeconds();

                let horas = {
                    hora: hora > 10 ?  hora.toString() : `0${hora}`,
                    minuto: minuto > 10 ?  minuto.toString() : `0${minuto}`,
                    segundo: segundo > 10 ?  segundo.toString() : `0${segundo}`,
                }

                setRelogio(horas)
            },1000)
        }
        loadRelogio()
    },[]);
    return (
        <>
            <div className="containerRelogio">
                { relogio != null && 
                <>
                    <div className="relogio">
                        <div className='relogioField'>
                            <p className="label">Horas</p>
                            <p className="value">{ relogio.hora }</p>
                        </div>
                        <div className='relogioField'>
                            <p className="label">Minutos</p>
                            <p className="value">{ relogio.minuto }</p>
                        </div>
                        <div className='relogioField'>
                            <p className="label">Segundos</p>
                            <p className="value">{ relogio.segundo }</p>
                        </div>
                    </div>
                    
                    
                    
                </>}
            </div>
        </>
    )
}
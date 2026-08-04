import style from './sobre.module.css';
import { useNavigate } from 'react-router-dom';

export function Sobre(){
    const nav = useNavigate();

    function irParaDashboard(){


        nav("/",{replace:true})
    }
    return(
        <>
        <main className={style.mainSobre}>

            <h1>Sobre:</h1>
            <div className={style.containerObjetivo}>
                <h2>Objetivo:</h2>
                <p>Uma aplicação para gerenciamento de usuarios com os metodos (CRUD) para manipualção dos dados</p>
            </div>
            <div className="contanierApi">
                <h2>API Utilizada:</h2>
                <p>Para o projeto foi utilizada a api 
                    <a  className={style.link} href="https://jsonplaceholder.typicode.com/" target="_blank">JSON PLACE HOLDER</a>
                </p>
            </div>
            <div className={style.tecnologiasEmpregadas}>
                <h2>Tecnologias empregadas:</h2>
                <p>Foram Utilizadas as seguintes Tecnologias:</p>
                <ul>
                    <li>REACT</li>
                    <li>REACT-ROUTER-DOM</li>
                    <li>REACT-IMASK</li>
                    <li>REACT-TOASTIFY</li>
                </ul>
            </div>
            <div className={style.dev}>
                <h2>Nome:</h2> 
                <p>Clayton Henrique</p>
            </div>
            <button onClick={irParaDashboard}>VOLTAR</button>
        </main>
        </>
    )
}
import {  useLocation, useNavigate } from "react-router-dom";
import './style.css'
export default function Header(){
    const navigate = useNavigate();

    function irPara(rota:string){
        navigate(rota,{replace:true})
    }

    function myRoute(){
        const rota = useLocation().pathname.replace('/','');
        return rota;
    }

    const rota = myRoute();

    return <>
        <header>
            <nav>
                <li className={rota === 'Home' ? "linkNav active": "linkNav"} onClick={() => {
                  irPara("/Home")
                }}>Home</li>

                <li className={rota === 'Produtos' ? "linkNav active": "linkNav"} onClick={() => {
                  irPara("/Produtos")
                }}>Produtos</li>

                <li className={rota === 'Contato' ? "linkNav active": "linkNav"} onClick={() => {
                  irPara("/Contato")
                }}>Contato</li>

                <li className={rota === 'Sobre' ? "linkNav active": "linkNav"} onClick={() => {
                  irPara("/Sobre")
                }}>Sobre</li>
                <li className={rota === 'VaiDaErro' ? "linkNav active": "linkNav"} onClick={() => {
                  irPara("/VaiDaErro")
                }}>VaiDaErro</li>
            </nav>
        </header>
    </>
}
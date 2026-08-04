import s from './style.module.css';
import {  useNavigate } from 'react-router-dom';

export default function Header(){
    const nav = useNavigate();


    return (
        <>
            <header className={s.header}>
                <div className={s.logo}>
                    <h2>Quero Receita</h2>
                </div>
                <ul className={s.navBar}>
                    <li 
                        className={s.navItem}
                        onClick={()=>{
                            nav('/',{replace:true})
                        }}
                    >Home</li>
                    <li 
                        className={s.navItem}
                        onClick={()=>{
                            nav('/favoritos',{replace:true})
                        }}
                    >Favoritos</li>
                    <li 
                        className={s.navItem}
                        onClick={()=>{
                            nav('/Sobre',{replace:true})
                        }}
                    >Sobre</li>
                </ul>
            </header>
        </>
    )
}
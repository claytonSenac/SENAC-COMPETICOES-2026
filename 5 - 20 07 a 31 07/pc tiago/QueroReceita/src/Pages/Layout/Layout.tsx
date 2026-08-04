import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header";
import s from './layout.module.css';
import { ToastContainer } from "react-toastify";

export function Layout(){
    return (
        <>
            <Header />
            <main className={s.mainLayout}>
                <Outlet />
            </main>
            <ToastContainer />
        </>
    )
}
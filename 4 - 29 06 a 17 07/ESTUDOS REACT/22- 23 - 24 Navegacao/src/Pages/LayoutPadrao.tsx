import { Outlet } from "react-router-dom"
import Header from "../Components/Header"

export default function LayoutPadrao(){
    return <>
        <Header />
        
        <h1>LAYOUT PADRAO</h1>

        <Outlet />
    </>
}
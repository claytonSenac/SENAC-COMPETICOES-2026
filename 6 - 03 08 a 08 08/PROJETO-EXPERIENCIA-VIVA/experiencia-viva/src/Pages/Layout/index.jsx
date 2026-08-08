import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout(){
    const [open,setOpen] = useState(false);
    return (
    <>
        <div 
        className={`min-h-screen grid ${open ? 'grid-cols-[250px_auto]' : 'grid-cols-[80px_auto]'} gap-4 transition-all duration-300`}>
            <div className="bg-primary flex flex-col items-center p-4 gap-4">
                <div className="flex flex-col gap-4 text-white text-2xl font-semibold justify-center items-center">
                    <h1 className={open ? "" : "hidden"}>Experiencia Viva</h1>
                    <button className="cursor-pointer transition-all duration-300 bg-secondary w-12 rounded hover:bg-accent"
                    onClick={() => {
                      setOpen(!open)
                    }} >X</button>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <LinkItem  text={"Home"} open={open} icon={'bi-info-circle'}/>                 
                    <LinkItem  text={"Sobre"} open={open} icon={'bi-info-circle'}/>
                    <LinkItem  text={"Categoria"} open={open} icon={'bi-info-circle'}/>
                </div>
            </div>
            <Outlet />

        </div>
    </>
    )
}


function LinkItem({text,linkTo,open,icon}){
    return(
        <li className="list-none text-white text-2xl hover:text-accent cursor-pointer font-semibold flex items-center gap-4">
            <i class={"bi"+icon ? icon : null}></i>
            <p className={open ? "" : "hidden"}>{text}</p>
        </li>
    )
}
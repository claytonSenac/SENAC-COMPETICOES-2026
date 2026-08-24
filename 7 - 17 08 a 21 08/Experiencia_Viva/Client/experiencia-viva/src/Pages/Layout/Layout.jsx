import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
export default function LayoutPage(){

    const [open,setOpen] = useState(false);

    return (
        <>
            <div className="w-screen h-screen flex flex-col">
                <div 
                className={` w-full h-full grid ${open ? "grid-cols-[240px_auto]" :"grid-cols-[70px_auto]"}`}
                >
                    <aside className="w-full bg-blue-400 p-4 text-white flex flex-col items-center gap-4">
                        <div className="flex gap-4">
                            {open && (
                                <h2 className="text-2xl">Experiencia Viva</h2>
                            )}

                            <button className="text-2xl font-bold cursor-pointer" onClick={() => {
                            setOpen(!open);
                            }}>X</button>
                        </div>
                        <nav className="flex flex-col gap-4">
                            <SidebarItem linkTo={"/"} nome={"Dashboard"} icon={"bi-house-door"} open={open} />
                            <SidebarItem linkTo={"atividade"} nome={"Atividades"} icon={"bi-calendar-event"} open={open} />
                            <SidebarItem linkTo={"participante"} nome={"Participantes"} icon={"bi-person-arms-up"} open={open} />
                        </nav>
                    </aside>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

function SidebarItem({nome, linkTo, icon, open}){
    const nav = useNavigate();

    return (
        <li className="list-none flex gap-4 cursor-pointer font-semibold text-xl hover:text-blue-600"
        onClick={() => {
          nav(linkTo ?? "dashboard")
        }} >
            <i className={"bi " + icon}></i>
            {open && (nome)}
        </li>
    )
}
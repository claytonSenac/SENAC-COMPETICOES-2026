import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Layout(){
    const [open,setOpen] = useState(false);
    return(
        <>
            <div className="w-full h-full ">
                
                <div className={`w-full h-full grid  ${open ? "grid-cols-[240px_auto]":"grid-cols-[70px_auto]"}`}>

                    <aside className="bg-blue-500 top-0 w-full h-screen sticky overflow-y-auto">
                        <div className="w-full flex   gap-4 items-center p-4">
                            {open && (<h2 className="text-xl text-white font-semibold">Experiencia viva</h2>)}
                            <button className="text-white text-3xl cursor-pointer" onClick={() => {
                                setOpen(!open)
                            }}>
                                {open ? ( <i className="bi bi-arrow-right-square-fill"></i>) : (<i className="bi bi-list"></i>) }
                            </button>
                        </div>
                        <div className="w-full flex flex-col gap-4 items-center  justify-center p-4">
                            <NavItem text={"Home"} icon={"bi-house"} linkTo={"/"} open={open} />
                            <NavItem text={"Atividades"} icon={"bi-calendar"} linkTo={"/atividade"} open={open} />
                            <NavItem text={"Participantes"} icon={"bi-person-arms-up"} linkTo={"/participante"} open={open} />
                        </div>
                    </aside>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

function NavItem({open, icon,text,linkTo}){
    const nav = useNavigate();

    return(
        <li className="text-white font-semibold flex gap-2 items-center justify-center w-full cursor-pointer hover:text-purple-500" onClick={() => {
          nav(linkTo ?? "/")
        }}>
            
            <i className={`bi ${icon} text-2xl flex font not-italic gap-2 w-full`}> {open && (<p className="text-xl">{text}</p>)}</i>
        </li>
    )

}
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Layout(){
    const [open,setOpen] = useState(false);
    return(
        <>
            <div className="w-full h-screen">
                
                <div className={`w-full h-full grid  ${open ? "grid-cols-[240px_auto]":"grid-cols-[80px_auto]"}`}>

                    <aside className="bg-blue-500 w-full h-full">
                        <div className="w-full flex flex-col gap-4 items-center p-4">
                            {open && (<h2 className="text-xl text-white font-semibold">Experiencia viva</h2>)}
                            <button className="text-white text-2xl cursor-pointer" onClick={() => {
                            setOpen(!open)
                            }}>X</button>
                        </div>
                        <div className="w-full flex flex-col gap-4 items-center p-4">
                            <NavItem text={"Home"} icon={"bi-house"} linkTo={"/"} open={open} />
                            <NavItem text={"Atividades"} icon={"bi-person-arms-up"} linkTo={"/atividade"} open={open} />
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
        <li className="text-white font-semibold flex gap-2 items-center justify-center w-full cursor-pointer" onClick={() => {
          nav(linkTo ?? "/")
        }}>
            <i className={`bi ${icon} text-2xl`}></i>
            {open && (<p>{text}</p>)}
        </li>
    )

}
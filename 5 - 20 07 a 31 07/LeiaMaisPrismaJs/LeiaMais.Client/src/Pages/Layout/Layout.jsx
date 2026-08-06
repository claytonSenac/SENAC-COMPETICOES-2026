import { useState } from "react";
import { Outlet } from "react-router-dom";
:: 
const Layout = () => {
  const [open,setOpen] = useState(false);
  return (
    <div className={
      `min-h-dvh grid grid-rows-[auto_1fr_auto] transition-all duration-300 ${open ? "grid-cols-[240px_auto]": "grid-cols-[80px_auto]"}`
      }>
      <aside className="h-dvh bg-primary flex flex-col items-center p-8 gap-8  ">
        <div className="flex gap-2">
          <h1 className={`text-2xl font-bold text-white ${!open ? "hidden" : "block" }`}>Leia Mais</h1>
          <button className="text-white font-bold text-2xl cursor-pointer" onClick={ () => {
            setOpen(!open)
          }}>X</button>
        </div>

        <nav className="flex gap-6 flex-col items-center font-semibold text-white">
          <a href="/" className="hover:text-accent transition duration-300 text-2xl">
            {open ? <i className="bi bi-book  not-italic">Livros</i>  : <i className="bi bi-book "></i> }
          </a>
          <a href="/generos" className="hover:text-black transition duration-300  text-2xl">
              {open ? <i className="bi bi-tags not-italic">Gêneros</i> : <i className="bi bi-tags"></i> }
          </a>
          <a href="#" className="hover:text-black transition duration-300  text-2xl">
              {open ? <i className="bi bi-file-person not-italic">Autores</i> : <i className="bi bi-file-person"></i> }
          </a>
          <a href="#" className="hover:text-black transition duration-300  text-2xl">
              {open ? <i className="bi bi-building not-italic">Editora</i> : <i className="bi bi-building"></i> }
          </a>
        </nav>
      </aside>

      <main>
        <Outlet />
      </main>

      {/* <footer className="h-14 bg-primary flex items-center justify-center text-white">
        <p>Todos os direitos reservados</p>
      </footer> */}
    </div>
  );
};

export default Layout;
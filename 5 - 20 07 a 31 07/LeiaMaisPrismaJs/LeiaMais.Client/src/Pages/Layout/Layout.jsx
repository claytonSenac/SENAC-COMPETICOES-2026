import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <header className="h-16 bg-primary flex items-center justify-between px-8">
        <h1 className="text-xl font-bold text-white">Leia Mais</h1>

        <nav className="flex gap-6 font-semibold text-white">
          <a href="/" className="hover:text-black transition duration-300">Livros</a>
          <a href="/generos" className="hover:text-black transition duration-300">Gêneros</a>
          <a href="#" className="hover:text-black transition duration-300">Autores</a>
          <a href="#" className="hover:text-black transition duration-300">Editoras</a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="h-14 bg-primary flex items-center justify-center text-white">
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Layout;
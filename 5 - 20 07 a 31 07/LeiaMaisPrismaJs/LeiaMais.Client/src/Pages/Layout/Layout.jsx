import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="h-16 bg-primary flex items-center justify-between px-8">
        <h1 className="text-xl font-bold text-white">Leia Mais</h1>

        <nav className="flex gap-6 font-semibold text-white">
          <a href="#">Livros</a>
          <a href="#">Autores</a>
          <a href="#">Editoras</a>
          <a href="#">Gêneros</a>
        </nav>
      </header>

      <main className="flex-1 bg-background">
        <Outlet />
      </main>

      <footer className="h-14 bg-primary flex items-center justify-center text-white">
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Layout;
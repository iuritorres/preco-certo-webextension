import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="h-3/4 flex justify-center items-center flex-col space-y-4 text-center">
      <div className="relative">
        <span className="text-[180px] font-extrabold opacity-5">404</span>
        <h1 className="text-2xl w-full absolute top-[54%] -translate-y-1/2 left-1/2 -translate-x-1/2">
          Página não encontrada!
        </h1>
      </div>

      <NavLink
        to="/"
        className="p-3 rounded-md bg-[#36383f] hover:brightness-125 transition-discrete duration-150"
      >
        Voltar para o início
      </NavLink>
    </main>
  );
};

export default NotFound;

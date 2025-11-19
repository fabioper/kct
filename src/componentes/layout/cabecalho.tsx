import { Link } from "react-router";
import { useProvedorDeAutenticacao } from "../../provedores/autenticacao/hook.tsx";

export function Cabecalho() {
  const auth = useProvedorDeAutenticacao();

  return (
    <header>
      <div className="container flex items-center justify-between py-2">
        <Link to="/">
          <h1 className="font-bold">KCT Client</h1>
        </Link>

        {!auth.logado ? (
          <button
            className="bg-blue-900 text-white p-2 rounded cursor-pointer hover:bg-blue-900/90"
            onClick={auth.login}
          >
            Entrar
          </button>
        ) : (
          <button
            className="bg-red-900 text-white p-2 rounded cursor-pointer hover:bg-red-900/90"
            onClick={auth.logout}
          >
            Sair
          </button>
        )}
      </div>
    </header>
  );
}

import { useEffect } from "react";
import { useProvedorDeAutenticacao } from "../../provedores/autenticacao/hook.tsx";
import { Outlet, useNavigate } from "react-router";

export function RotaProtegida() {
  const { logado } = useProvedorDeAutenticacao();

  const navigate = useNavigate();

  useEffect(() => {
    if (!logado) {
      navigate("/aplicativos");
    }
  }, [logado, navigate]);

  if (!logado) {
    return null;
  }

  return <Outlet />;
}

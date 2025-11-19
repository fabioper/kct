import { useContext } from "react";
import { AutenticacaoContexto } from "./contexto.ts";

export function useProvedorDeAutenticacao() {
  const contexto = useContext(AutenticacaoContexto);

  if (!contexto) {
    throw new Error(
      "useAutenticacao deve ser utilizado dentro de um ProvedorDeAutenticacao",
    );
  }

  return contexto;
}

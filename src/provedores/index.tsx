import { type ReactNode } from "react";
import { ProvedorDeAutenticacao } from "./autenticacao";

export function Provedores({ children }: { children: ReactNode }) {
  return <ProvedorDeAutenticacao>{children}</ProvedorDeAutenticacao>;
}

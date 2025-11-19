import { createContext } from "react";

export interface Usuario {
  id: string;
  email: string;
  nome: string;
  bairro: string;
  estado: string;
}

export type AutenticaoContextoProps = {
  usuario: Usuario | undefined;
  logado: boolean;
  login: () => Promise<void> | void;
  logout: () => Promise<void> | void;
  token: string | undefined;
};

export const AutenticacaoContexto =
  createContext<AutenticaoContextoProps | null>(null);

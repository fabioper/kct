import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  AutenticacaoContexto,
  type AutenticaoContextoProps,
  type Usuario,
} from "./contexto.ts";
import { keycloak, keycloakInitOptions } from "../../servicos/keycloak.ts";
import { obterInformacoesExtrasDoUsuario } from "./obterInformacoesExtrasDoUsuario.tsx";

export function ProvedorDeAutenticacao({ children }: PropsWithChildren) {
  const [inicializado, setInicializado] = useState(false);
  const [usuario, setUsuario] = useState<Usuario>();

  const login = useCallback(() => keycloak.login(), []);

  const logout = useCallback(() => keycloak.logout(), []);

  const aoAutenticar = useCallback(async function () {
    const usuarioNoProvedor = await keycloak.loadUserProfile();
    const informacoesExtras = await obterInformacoesExtrasDoUsuario();

    setUsuario({
      id: usuarioNoProvedor.id || "",
      email: usuarioNoProvedor.email || "",
      nome: usuarioNoProvedor.username || "",
      ...informacoesExtras,
    });

    setInicializado(true);
  }, []);

  const aoExpirarToken = useCallback(() => {}, []);

  const aoDeslogar = useCallback(async () => {}, []);

  useEffect(() => {
    if (inicializado) return;

    keycloak.onAuthSuccess = aoAutenticar;

    keycloak.onTokenExpired = aoExpirarToken;

    keycloak.onAuthLogout = aoDeslogar;

    if (!keycloak.didInitialize) {
      keycloak.init(keycloakInitOptions).then((autenticado) => {
        if (!autenticado) {
          setInicializado(true);
        }
      });
    }
  }, [aoAutenticar, aoDeslogar, aoExpirarToken, inicializado]);

  const memo = useMemo(
    (): AutenticaoContextoProps => ({
      usuario,
      login,
      logout,
      get token() {
        return keycloak.token;
      },
      get logado() {
        return keycloak.authenticated;
      },
    }),
    [login, logout, usuario],
  );

  if (!inicializado) {
    return null;
  }

  return (
    <AutenticacaoContexto.Provider value={memo}>
      {children}
    </AutenticacaoContexto.Provider>
  );
}

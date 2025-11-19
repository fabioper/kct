import { useProvedorDeAutenticacao } from "../provedores/autenticacao/hook.tsx";

export default function Inicio() {
  const { usuario, token } = useProvedorDeAutenticacao();

  return (
    <main>
      <div className="container">
        <p>
          <strong>Id:</strong> {usuario?.id}
        </p>
        <p>
          <strong>Nome:</strong> {usuario?.nome}
        </p>
        <p>
          <strong>Email:</strong> {usuario?.email}
        </p>
        <p>
          <strong>Bairro:</strong> {usuario?.bairro}
        </p>
        <p>
          <strong>Estado:</strong> {usuario?.estado}
        </p>

        <p>
          <strong>Token:</strong> <code>{token}</code>
        </p>
      </div>
    </main>
  );
}

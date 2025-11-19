import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./servicos/keycloak.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provedores } from "./provedores";
import { Cabecalho } from "./componentes/layout/cabecalho.tsx";
import Inicio from "./paginas/inicio.tsx";
import Aplicativos from "./paginas/aplicativos.tsx";
import { RotaProtegida } from "./componentes/layout/rota-protegida.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provedores>
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route element={<RotaProtegida />}>
            <Route index element={<Inicio />} />
          </Route>

          <Route path="/aplicativos" element={<Aplicativos />} />
        </Routes>
      </BrowserRouter>
    </Provedores>
  </StrictMode>,
);

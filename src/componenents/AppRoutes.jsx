import { Route, Routes } from "react-router";
import App from "../App";
import { Modelagem } from "../pages/Modelagem";
import { Pedidos } from "../pages/Pedidos";
import { Produtos } from "../pages/Produtos";
import { Clientes } from "../pages/Clientes";
import { Login } from "@mui/icons-material";

import CadastroDepartamentos from "../pages/Cadastro/CadastroDepartamentos";
import CadastroEquipes from "../pages/Cadastro/CadastroEquipes";
import CadastroEmpresa from "../pages/Cadastro/CadastroEmpresa";
import CadastroSocios from "../pages/Cadastro/CadastroSocios";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
      
        <Route path="/"          element={<App />} />
        <Route path="/modelagem" element={<Modelagem />} />
        <Route path="/pedidos"   element={<Pedidos />} />
        <Route path="/produtos"  element={<Produtos />} />
        <Route path="/clientes"  element={<Clientes />} />
        <Route path="/login"     element={<Login />} />

        <Route path="/informacoes/empresa" element={<CadastroEmpresa />} />
        <Route path="/informacoes/socios"  element={<CadastroSocios />} />
        <Route path="/informacoes/departamentos" element={<CadastroDepartamentos />} />
        <Route path="/informacoes/equipe"  element={<CadastroEquipes />} />
      
      </Routes>
    </>
  );
};

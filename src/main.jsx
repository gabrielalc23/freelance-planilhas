import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sidebar from './componenents/Sidebar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Painel } from './pages/Painel.jsx'
import { Pedidos } from './pages/Pedidos.jsx'
import { Produtos } from './pages/Produtos.jsx'
import { Clientes } from './pages/Clientes.jsx'
import { AppNavbar } from './componenents/AppNavbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Sidebar />
    <AppNavbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/painel" element={<Painel />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/clientes" element={<Clientes />} />
    </Routes>
  </BrowserRouter>
);

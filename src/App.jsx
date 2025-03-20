import { Table } from "react-bootstrap";
import "./App.css";
import Sidebar from "./componenents/Sidebar.jsx";

function App() {
  return (
    <div className="container">
      <Table bordered hover className="rounded">
        <thead >
          <tr>
            <th 
             colSpan={2} StrictMode
              className="bg-dark text-white">
                Dados sobre empresa
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>Luz Planilhas</td>
          </tr>
          <tr>
            <td>Razão Social</td>
            <td>LUZ LAB DE IDEAS LTDA</td>
          </tr>
          <tr>
            <td>Endereço</td>
            <td>Rua da matriz</td>
          </tr>
          <tr>
            <td>Complemento</td>
            <td>93</td>
          </tr>
          <tr>
            <td>Cidade - Estado</td>
            <td>Rio de janeiro - RJ</td>
          </tr>
          <tr>
            <td>Telefone com DDD</td>
            <td>21994432-3256</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>Email</td>
          </tr>
          <tr>
            <td>Observações</td>
            <td>OBS</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;

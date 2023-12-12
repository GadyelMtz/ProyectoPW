import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistroEgresado from "./paginas/C_Egresados";
import Encuesta from "./paginas/Encuesta";
import RUD_Egresados from "./paginas/RUD_Egresados";
import DetalleEgresado from "./paginas/DetalleEgresado";
import EditarEgresado from "./paginas/EditarEgresado";
import Login from "./paginas/Login";
import Principal from "./paginas/Principal";
import MenuAdministrador from "./paginas/MenuAdministrador";
import MenuEgresado from "./paginas/MenuEgresado";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/login" element={<Login />} />

      <Route path="/login/menu-administrador" element={<MenuAdministrador />}/>
      <Route path="/login/menu-administrador/registrar-egresados" element={<RegistroEgresado />} />
      <Route path="/login/menu-administrador/consultar-egresados" element={<RUD_Egresados />} />
      <Route path="/login/menu-administrador/consultar-egresados/:noControl" element={<DetalleEgresado />}/>
      <Route path="/login/menu-administrador/editar-egresado/:noControl" element={<EditarEgresado />} />
      <Route path="/login/menu-administrador/eliminar-egresado/:noControl" element={<RUD_Egresados />} />
      
      <Route path="/login/menu/:noControl" element={<MenuEgresado />}/>
      <Route path="/login/menu/:noControl/encuesta" element={<Encuesta />}/>
    </Routes>
  </Router>
  );
};

export default App;

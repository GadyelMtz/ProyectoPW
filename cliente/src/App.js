import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistroEgresado from "./paginas/C_Egresados";
import Encuesta from "./paginas/Encuesta";
import RUD_Egresados from "./paginas/RUD_Egresados";
import DetalleEgresado from "./paginas/DetalleEgresado";
import EditarEgresado from "./paginas/EditarEgresado";
import Login from "./paginas/Login";
import Principal from "./paginas/Principal";
import Menu from "./paginas/Menu";


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/registrar-egresados" element={<RegistroEgresado />} />
      <Route path="/consultar-egresados" element={<RUD_Egresados />} />
      <Route path="/consultar-egresados/:noControl" element={<DetalleEgresado />}/>
      <Route path="/editar-egresado/:noControl" element={<EditarEgresado />} />
      <Route path="/eliminar-egresado/:noControl" element={<RUD_Egresados />} />
      <Route path="/login" element={<Login />} />
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/menu/:noControl/encuesta" element={<Encuesta />}/>
    </Routes>
  </Router>
  );
};

export default App;

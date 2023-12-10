// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistroEgresado from './paginas/C_Egresados';
import RUD_Egresados from './paginas/RUD_Egresados';
import DetalleEgresado from './paginas/DetalleEgresado';
import EditarEgresado from './paginas/EditarEgresado';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/registrar-egresados">Registrar Egresados</Link>
          </li>
          <li>
            <Link to="/consultar-egresados">Consultar/Eliminar/Actualizar Egresados</Link>
          </li>
        </ul>


        <Routes>
          <Route path="/registrar-egresados" element={<RegistroEgresado />} />
          <Route path="/consultar-egresados" element={<RUD_Egresados />} />
          <Route path="/consultar-egresados/:noControl" element={<DetalleEgresado/>} />
          <Route path="/editar-egresado/:noControl" element={<EditarEgresado/>} />
          <Route path="/eliminar-egresado/:noControl" element={<RUD_Egresados/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;

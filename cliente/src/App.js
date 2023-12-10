import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistroEgresado from './paginas/C_Egresados';
import RUD_Egresados from './paginas/RUD_Egresados';
const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/registrar-egresados">Registrar Egresados</Link>
          </li>
          <li>
            <Link to="/consultar-egresados">Eliminar/Actualizar Egresados</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/registrar-egresados" element={<RegistroEgresado />} />
          <Route path="/consultar-egresados" element={<RUD_Egresados />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;

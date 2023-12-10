// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistroEgresado from './paginas/C_Egresados';
import RUD_Egresados from './paginas/RUD_Egresados';
import DetalleEgresado from './paginas/DetalleEgresado';
import EditarEgresado from './paginas/EditarEgresado';

const App = () => {
  return (  
    <div className='App'>
    <nav class="banner">
      <div id="tituloBanner">Portal de egresados</div>
      <list id="menu">
        <li>
          
        </li>
      </list>
    </nav>

    <div id="contenedor">
      <img src="img/tec.png" id="imagenTec" />
    </div>

    <div id="mensajeBienvenida">
      <h1>¡Bienvenido, egresado del ITTepic!</h1>
      En este espacio dedicado exclusivamente a ti, podrás explorar una variedad<br></br>
      de recursos diseñados para acompañarte en tu trayectoria después de<br></br>
      graduarte. Descubre oportunidades profesionales, mantente conectado con la<br></br>
      comunidad de egresados, y accede a valiosa información que impulsará tu<br></br>
      éxito en el mundo laboral.<br></br>
      <h2>¡Estamos emocionados de seguir siendo parte<br></br>
      de tu historia después del ITTepic!</h2>
    </div>

    <footer>
      <div id="direccion">
        <b>Dirección postal</b><br></br>
        Instituto Tecnológico de Tepic<br></br>
        Avenida Tecnológico #2595<br></br>
        Colonia Lagos del Country<br></br>
        Tepic, Nayarit. México. C.P. 63175.<br></br>
    
    </div>

      <div id="logoFooterITTepic">
        <img src="img/logoITTepic.png" id="imgLogoITTepic" />
      </div>

      <div id="logoFooterTecNM">
        <img src="img/logoTecNM.png" id="imgLogoTecNM" />
      </div>
    </footer>

    <div>
          <Routes>
            <Route path="/registrar-egresados" element={<RegistroEgresado />} />
            <Route path="/consultar-egresados" element={<RUD_Egresados />} />
            <Route path="/consultar-egresados/:noControl" element={<DetalleEgresado />} />
            <Route path="/editar-egresado/:noControl" element={<EditarEgresado />} />
            <Route path="/eliminar-egresado/:noControl" element={<RUD_Egresados />} />
          </Routes>
        </div>
    </div>
    
  );
};

export default App;

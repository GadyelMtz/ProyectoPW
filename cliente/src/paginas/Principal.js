// Principal.js
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Principal.css';
import Tec from "../img/tec.png";
import logoITTepic from "../img/logoITTepic.png";
import logoTecNM from "../img/logoTecNM.png";

const Principal = () => {
  return (
    <Fragment>
      <div className="contenedorDePrincipal">
        <nav class="banner">
          <div id="tituloBanner">Portal de egresados</div>
          <list id="menu">
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
          </list>
        </nav>

        <div id="contenedor">
          <img src={Tec} id="imagenTec" />
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
            <img src={logoITTepic} id="imgLogoITTepic" />
          </div>

          <div id="logoFooterTecNM">
            <img src={logoTecNM} id="imgLogoTecNM" />
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Principal;

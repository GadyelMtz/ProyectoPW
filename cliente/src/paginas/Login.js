import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import '../css/login.css'

const Login = () => {
  return (
    <Fragment>
      <div className="contenedorDeLogin">
      <nav className="banner">
        <div id="tituloBanner">Portal de egresados</div>
        <list id="menu">
          <li>
          <Link to="/ ">Regresar</Link>
          </li>
        </list>
      </nav>

      <div class="login-container">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form
          id="login-form"
          action="tu_archivo_de_procesamiento.php"
          method="post"
        >
          <h3>Inicio de Sesión</h3>

          <label htmlFor="username">No. Control</label>
          <input type="text" placeholder="Ingresa No. Control" id="username" />

          <label htmlFor="password">Nip</label>
          <input type="password" placeholder="Ingresa nip" id="password" />

          <Link to="/registrar-egresados">Ingresar</Link>

          <div className="social">
            <h4>¿Necesitas ayuda? Contactános</h4>
            <div className="go">
              <i className="fab fa-google"></i> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook"></i> Facebook
            </div>
          </div>
        </form>
      </div>

      <footer>
        <div id="direccion">
          <b>Dirección postal</b>
          <br />
          Instituto Tecnológico de Tepic
          <br />
          Avenida Tecnológico #2595
          <br />
          Colonia Lagos del Country
          <br />
          Tepic, Nayarit. México. C.P. 63175.
          <br />
        </div>

        <div id="logoFooterITTepic">
          <img src="img/logoITTepic.png" id="imgLogoITTepic" alt="Logo ITTepic" />
        </div>

        <div id="logoFooterTecNM">
          <img src="img/logoTecNM.png" id="imgLogoTecNM" alt="Logo TecNM" />
        </div>
      </footer>
      </div>
    </Fragment>
  );
};

export default Login;

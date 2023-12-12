import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [privilegio, setPrivilegio] = useState(null);
  const [noControl, setNoControl] = useState("");
  const [nip, setNip] = useState("");

  const buildUri = () => {
    const uri = `http://localhost:5000/login/${noControl}-${nip}`;
    console.log("URI construida:", uri);
    return uri;
  };

  const handleLogin = async () => {
    try {
      // Verificar si los campos están vacíos
      if (!noControl && !nip) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      if (!nip && noControl) {
        alert("Para ingresar como administrador ingrese al menos el nip");
        return;
      }

      const response = await fetch(buildUri());
      console.log(response);

      const data = await response.json();
      setPrivilegio(data.privilegio);
      console.log(data.privilegio);

      if (data.privilegio === "Administrador") {
        navigate("/login/menu-administrador");
      } else if (data.privilegio === "Egresado") {
        navigate(`/${noControl}/menu`);
      } else {
        console.error(
          `Error al realizar el inicio de sesión: ${response.status}`
        );
        alert(
          "Error al realizar el inicio de sesión. Verifica tus credenciales."
        );
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <Fragment>
      <div className="contenedorDeLogin">
        <nav className="banner">
          <div id="tituloBanner">Portal de egresados</div>
          <list id="menu">
            <li>
              <Link to="/">Regresar</Link>
            </li>
          </list>
        </nav>

        <div class="login-container">
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <form id="login-form">
            <h3>Inicio de Sesión</h3>

            <label htmlFor="username">No. Control</label>
            <input
              type="text"
              placeholder="Ingresa No. Control"
              id="username"
              value={noControl}
              onChange={(e) => setNoControl(e.target.value)}
            />

            <label htmlFor="password">Nip</label>
            <input
              type="password"
              placeholder="Ingresa tu nip"
              id="password"
              value={nip}
              onChange={(e) => setNip(e.target.value)}
            />

            <button
              type="button"
              class="btn btn-primary btn-sm"
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>

            <div className="social">
              <h4>¿Necesitas ayuda? Contactános</h4>
              <div className="go">
                <i class="bi bi-google"></i> Google
              </div>
              <div className="fb">
                <i class="bi bi-facebook"></i> Facebook
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
            <img
              src="img/logoITTepic.png"
              id="imgLogoITTepic"
              alt="Logo ITTepic"
            />
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

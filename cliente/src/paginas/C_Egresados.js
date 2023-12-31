import React, { Fragment, useState } from "react";
import { format, parseISO } from "date-fns";
import "../css/C_Egresados.css";
import { Link } from "react-router-dom";

const RegistroEgresado = () => {
  const [nocontrol, setnocontrol] = useState("");
  const [nombres, setnombres] = useState("");
  const [apellidopaterno, setapellidopaterno] = useState("");
  const [apellidomaterno, setapellidomaterno] = useState("");
  const [fechanacimiento, setfechanacimiento] = useState(null);
  const [sexo, setsexo] = useState("");
  const [estadocivil, setestadocivil] = useState("");

  const [cp, setcp] = useState("");
  const [isValidCP, setValidCP] = useState(true);
  const [locationData, setLocationData] = useState({
    estado: "",
    municipio: "",
  });

  const [municipio, setmunicipio] = useState("");
  const [estado, setestado] = useState("");
  const [telefono, settelefono] = useState("");
  const [titulado, settitulado] = useState("");
  const [fechaegreso, setfechaegreso] = useState(null);
  const [carrera, setcarrera] = useState("");
  const [especialidad, setespecialidad] = useState("");
  const [domicilio, setdomicilio] = useState("");

  const handleCPChange = (e) => {
    setcp(e.target.value);
    // Validar si el valor es un número entero
    const isValidInteger = /^\d+$/.test(e.target.value);
    setValidCP(isValidInteger);
  };

  const handleCPBlur = async () => {
    if (isValidCP) {
      try {
        const response = await fetch(
          `https://api.copomex.com/query/info_cp/${cp}?type=simplified&token=pruebas`
        );

        if (response.ok) {
          const data = await response.json();
          setLocationData({
            estado: data.response.estado,
            municipio: data.response.municipio,
          });
        } else {
          console.error("Error al obtener datos de la API");
        }
      } catch (error) {
        console.error("Error en la solicitud a la API", error);
      }
    }
  };

  const registrarEgresado = async (e) => {
    e.preventDefault();
    // Validar fechas
    if (!fechanacimiento || !fechaegreso) {
      console.error("Fechas inválidas");
      return;
    }

    try {
      const cuerpoDelRegistro = {
        nocontrol,
        nombres,
        apellidopaterno,
        apellidomaterno,
        fechanacimiento: fechanacimiento.toISOString(),
        sexo,
        estadocivil,
        cp,
        municipio: locationData.municipio, // Agregar el valor de municipio
        estado: locationData.estado, // Agregar el valor de estado
        telefono,
        titulado,
        fechaegreso: fechaegreso.toISOString(),
        carrera,
        especialidad,
        domicilio,
      };

      const respuesta = await fetch(
        "http://localhost:5000/login/menu-administrador/registrar-egresados",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cuerpoDelRegistro),
        }
      );

      if (!respuesta.ok) {
        console.log("Hubo un error en la petición");
      } else {
        console.log("Egresado registrado correctamente");
        window.location = "/login/menu-administrador/registrar-egresados";
        alert("Egresado registrado");
      }
    } catch (error) {
      console.error("Hubo un error en la conexión:", error);
    }
  };

  return (
    <Fragment>
      <div class="contenedorDeMenu">
        <nav class="navbar navbar-expand-lg navbar-dark ">
          <div class="container-fluid">
            <a href="" class="navbar-brand text-info fw-semibold fs-4">
              Portal de egresados / Administrador
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#menuLateral"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <section
              class="offcanvas offcanvas-start"
              id="menuLateral"
              tabindex="-1"
            >
              <div class="offcanvas-header" data-bs-theme="dark">
                <h5 class="offcanvas-title text-info">PDE</h5>
                <button
                  class="btn-close"
                  type="button"
                  aria-label="btn-close"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>

              <div class="offcanvas-body d-flex flex-column justify-content-between px-0">
                <ul class="navbar-nav fs-5 justify-content-evenly">
                  <li class="nav-item p-3 py-md-1">
                    <Link to="/login/menu-administrador" class="nav-link">
                      Inicio
                    </Link>
                  </li>
                  <li class="nav-item p-3 py-md-1">
                    <Link
                      to="/login/menu-administrador/consultar-egresados"
                      class="nav-link"
                    >
                      Ver egresados
                    </Link>
                  </li>
                  <li class="nav-item p-3 py-md-1">
                    <Link
                      to="/login/menu-administrador/registrar-egresados"
                      class="nav-link"
                    >
                      Registrar egresado
                    </Link>
                  </li>
                  <li class="nav-item p-3 py-md-1">
                    <Link to="/" class="nav-link">
                      Cerrar sesión
                    </Link>
                  </li>
                </ul>

                <div class="d-lg-none align-self-center py-3">
                  <a href="">
                    <i class="bi bi-facebook px-2 text-info fs-2"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-twitter-x px-2 text-info fs-2"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-whatsapp px-2 text-info fs-2"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-github px-2 text-info fs-2"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </nav>
      </div>

      <div className="contenedorCEgresados">
        <div className="container">
          <h2 className="text-center mt-4 text-azul fs-3">
            {" "}
            Registro de egresados
          </h2>
          <form className="mt-5" onSubmit={registrarEgresado}>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="apellidopaterno" className="form-label">
                  Apellido Paterno
                </label>
                <input
                  id="apellidopaterno"
                  type="text"
                  className="form-control"
                  value={apellidopaterno}
                  onChange={(e) => setapellidopaterno(e.target.value)}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="apellidomaterno" className="form-label">
                  Apellido Materno
                </label>
                <input
                  id="apellidomaterno"
                  type="text"
                  className="form-control"
                  value={apellidomaterno}
                  onChange={(e) => setapellidomaterno(e.target.value)}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="nombres" className="form-label">
                  Nombres
                </label>
                <input
                  id="nombres"
                  type="text"
                  className="form-control"
                  value={nombres}
                  onChange={(e) => setnombres(e.target.value)}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="nocontrol" className="form-label">
                  Número de Control
                </label>
                <input
                  id="nocontrol"
                  type="text"
                  className="form-control"
                  value={nocontrol}
                  onChange={(e) => setnocontrol(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="fechanacimiento" className="form-label">
                  Fecha de Nacimiento
                </label>
                <input
                  className="form-control"
                  type="date"
                  onChange={(e) => setfechanacimiento(parseISO(e.target.value))}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Sexo</label>

                <div className="row">
                  <div className="form-check col-md-3 mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="Mujer"
                      name="flexRadioDefault3"
                      id="flexRadioDefault3"
                      onChange={(e) => setsexo(e.target.value)}
                    />
                    <label class="form-check-label">Mujer</label>
                  </div>

                  <div className="form-check col-md-3 mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="Hombre"
                      name="flexRadioDefault3"
                      id="flexRadioDefault3"
                      onChange={(e) => setsexo(e.target.value)}
                    />
                    <label class="form-check-label">Hombre</label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Estado civil</label>

                <div className="row">
                  <div className="form-check col-md-4 mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="Soltero"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onChange={(e) => setestadocivil(e.target.value)}
                    />
                    <label class="form-check-label">Soltero</label>
                  </div>

                  <div className="form-check col-md-4 mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="Casado"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onChange={(e) => setestadocivil(e.target.value)}
                    />
                    <label class="form-check-label">Casado</label>
                  </div>

                  <div className="form-check col-md-4 mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="Otro"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onChange={(e) => setestadocivil(e.target.value)}
                    />
                    <label class="form-check-label">Otro</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="domicilio" className="form-label">
                  Domicilio
                </label>
                <input
                  id="domicilio"
                  type="Text"
                  className="form-control"
                  value={domicilio}
                  onChange={(e) => setdomicilio(e.target.value)}
                />
              </div>

              <div className={`col-md-3 mb-3 ${isValidCP ? "" : "has-error"}`}>
                <label htmlFor="cp" className="form-label">
                  Codigo postal
                </label>
                <input
                  id="cp"
                  type="text"
                  className={`form-control ${isValidCP ? "" : "is-invalid"}`}
                  value={cp}
                  onChange={handleCPChange}
                  onFocus={() => console.log("Input de Código Postal en foco")}
                  onBlur={handleCPBlur}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="municipio" className="form-label">
                  Municipio
                </label>
                <input
                  id="municipio"
                  type="text"
                  className="form-control"
                  value={locationData.municipio}
                  readOnly
                />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="estado" className="form-label">
                  Estado
                </label>
                <input
                  id="estado"
                  type="text"
                  className="form-control"
                  value={locationData.estado}
                  readOnly
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="telefono" className="form-label">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  type="Text"
                  className="form-control"
                  value={telefono}
                  onChange={(e) => settelefono(e.target.value)}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="fechaegreso" className="form-label">
                  Fecha de egreso
                </label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setfechaegreso(parseISO(e.target.value))}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="titulado" className="form-label">
                  Titulado:
                </label>

                <div className="row">
                  <div className="form-check col-md-3 mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="Si"
                      name="flexRadioDefault2"
                      id="flexRadioDefault2"
                      onChange={(e) => settitulado(e.target.value)}
                    />
                    <label class="form-check-label">Sí</label>
                  </div>

                  <div className="form-check col-md-3 mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="No"
                      name="flexRadioDefault2"
                      id="flexRadioDefault2"
                      onChange={(e) => settitulado(e.target.value)}
                    />
                    <label class="form-check-label">No</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="carrera" className="form-label">
                  Carrera
                </label>
                <select
                  id="carrera"
                  name="carrera"
                  value={carrera}
                  onChange={(e) => setcarrera(e.target.value)}
                  className="form-control"
                >
                  <option value="">- Seleccione -</option>
                  <option value="Ingenieria Industrial">
                    Ingeniería Industrial
                  </option>
                  <option value="Licenciatura en administración">
                    Licenciatura en administración
                  </option>
                  <option value="Ingenieria en gestión empresarial">
                    Ingenieria en gestión empresarial
                  </option>
                  <option value="Ingenieria en sistemas computacionales">
                    Ingeniería en Sistemas Computacionales
                  </option>
                  <option value="Ingenieria bioquimica">
                    Ingeniería bioquimica
                  </option>
                  <option value="Ingenieria bioquimica">
                    Ingeniería bioquimica
                  </option>
                  <option value="Ingenieria eléctrica">
                    Ingeniería eléctrica
                  </option>
                  <option value="Ingenieria mecatrónica">
                    Ingeniería mecatrónica
                  </option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="especialidad" className="form-label">
                  Especialidad
                </label>
                <input
                  id="especialidad"
                  type="Text"
                  className="form-control"
                  value={especialidad}
                  onChange={(e) => setespecialidad(e.target.value)}
                />
              </div>
            </div>

            <div className="text-center">
              <button className="btn btn-success btn-lg">Insertar</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default RegistroEgresado;

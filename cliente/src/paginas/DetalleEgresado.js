import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/DetalleEgresado.css";
import { Link } from "react-router-dom";
const DetalleEgresado = () => {
  const { noControl } = useParams();
  const [egresado, setEgresado] = useState(null);

  useEffect(() => {
    // Aquí realiza la lógica para obtener detalles del egresado usando el noControl
    // Puedes hacer una nueva solicitud a tu servidor para obtener la información del egresado

    // Ejemplo:
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/login/menu-administrador/consultar-egresados/${noControl}`
        );
        const jsonData = await response.json();
        setEgresado(jsonData);

        // Muestra el egresado en la consola como cadena de texto JSON
        console.log("Egresado:", JSON.stringify(jsonData, null, 2));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [noControl]);

  if (!egresado) {
    return <div>Cargando...</div>;
  }

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
                    <a href="" class="nav-link">
                      Inicio
                    </a>
                  </li>
                  <li class="nav-item p-3 py-md-1">
                    <Link to="/login/menu-administrador/consultar-egresados" class="nav-link">
                      Ver egresados
                    </Link>
                  </li>
                  <li class="nav-item p-3 py-md-1">
                    <Link to="/login/menu-administrador/registrar-egresados" class="nav-link">
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
      {" "}
      <div className="container">

        <h1 class="mb-4 text-azul fs-3">Detalles del egresado {noControl}</h1>
        <div className="contenedorDE">
          <form>

            <div class="row">

              <div class="col-md-4">
                <div class="form-group">
                  <label for="campo1">Nombres:</label>
                  <p id="campo1" class="form-control-static">{egresado.nombres}</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label for="campo2">Apellido paterno:</label>
                  <p id="campo2" class="form-control-static">{egresado.apellidopaterno}</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label for="campo3">Apellido materno:</label>
                  <p id="campo3" class="form-control-static">{egresado.apellidomaterno}</p>
                </div>
              </div>

            </div>

            <div class="row">

              <div class="col-md-4">
                <div class="form-group">
                  <label for="campo4">Fecha de nacimiento:</label>
                  <p id="campo4" class="form-control-static">{egresado.fechanacimiento}</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label for="campo5">Sexo:</label>
                  <p id="campo5" class="form-control-static">{egresado.sexo}</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="campo6">Estado civil:</label>
                  <p id="campo6">{egresado.estadocivil}</p>

                </div>
              </div>


            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="campo7">Ciudad:</label>
                  <p id="campo7">{egresado.ciudad}</p>

                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="campo8">Municipio:</label>
                  <p id="campo8">{egresado.municipio}</p>

                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="campo9">Estado:</label>
                  <p id="campo9">{egresado.estado}</p>

                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="campo10">Domicilio:</label>
                  <p id="campo9">{egresado.domicilio}</p>

                </div>
              </div>

            </div>

            <label htmlFor="campo11">Telefono:</label>
            <p id="campo10">{egresado.telefono}</p>

            <div className="row">

              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="campo12">¿Titulado?:</label>
                  <p id="campo11">{egresado.titulado}</p>

                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="campo13">Fecha de egreso:</label>
                  <p id="campo12">{egresado.fechaegreso}</p>

                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="campo14">Carrera:</label>
                  <p id="campo13">{egresado.carrera}</p>

                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="campo15">Especialidad:</label>
                  <p id="campo14">{egresado.especialidad}</p>

                </div>
              </div>

            </div>
          </form>

        </div>


      </div>
    </Fragment>
  );
};

export default DetalleEgresado;

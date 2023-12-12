import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/RUD_egresado.css'


const RUD_Egresados = () => {
  const [egresados, setEgresados] = useState([]);

  const getEgresados = async () => {
    try {
      const respuesta = await fetch("http://localhost:5000/login/menu-administrador/consultar-egresados");
      const jsonData = await respuesta.json();
      setEgresados(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const eliminarEgresado = async (nocontrol) => {
    try {
      const confirmacion = window.confirm("¿Estás seguro de eliminar este egresado?");
      if (!confirmacion) {
        return; // Cancelar la eliminación si el usuario elige cancelar
      }

      await fetch(`http://localhost:5000/login/menu-administrador/eliminar-egresado/${nocontrol}`, {
        method: "DELETE",
      });

      // Actualizar la lista de egresados después de la eliminación
      getEgresados();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getEgresados();
  }, []);

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
                    <Link to="/login/menu-administrador/" class="nav-link">
                      Inicio
                    </Link>
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

      <h1 className="text-center text-azul mt-4 fs-3">Base de datos seguimiento egresados</h1>
      <table className="table mt-5 text-center table-striped">
        <thead>
          <tr>
            <th>Numero de control</th>
            <th>Consultar</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {egresados.map((egresado) => (
            <tr key={egresado.id}>
              <td>{egresado.nocontrol}</td>
              <td>
                <Link
                  to={{
                    pathname: `/login/menu-administrador/consultar-egresados/${egresado.nocontrol}`,
                    state: { egresado },
                  }}
                >
                  <button type="button" className="btn btn-info">
                    Consultar
                  </button>
                </Link>
              </td>
              <td>
                <Link
                  to={{
                    pathname: `/login/menu-administrador/editar-egresado/${egresado.nocontrol}`,
                    state: { egresado },
                  }}
                >
                  <button type="button" className="btn btn-warning">
                    Editar
                  </button>
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarEgresado(egresado.nocontrol)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default RUD_Egresados;

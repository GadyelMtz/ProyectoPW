import React, { Fragment } from "react";
import '../css/menu.css'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Fragment>
      <div class="contenedorDeMenu">
        <nav class="navbar navbar-expand-lg navbar-dark ">
          <div class="container-fluid">
            <a href="" class="navbar-brand text-info fw-semibold fs-4">
              Portal de egresados
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
                    <Link to="/consultar-egresados" class="nav-link">
                      Ver egresados
                    </Link>
                  </li>
                  <li class="nav-item p-3 py-md-1">
                    <Link to="/20400775/encuesta" class="nav-link">
                      Encuesta
                    </Link>
                  </li>
                  <li class="nav-item p-3 py-md-1">
                    <a href="" class="nav-link">
                      Bolsa de trabajo
                    </a>
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
    </Fragment>
  );
};

export default Menu;

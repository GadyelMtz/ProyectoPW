import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Consultoria1 from "../img/Consultoria1.png";
import Consultoria2 from "../img/Consultoria2.png";
import Desarrollo1 from "../img/Desarrollo1.png";
import Desarrollo2 from "../img/Desarrollo2.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";
import img9 from "../img/9.png";
import img10 from "../img/10.png";
import img11 from "../img/11.png";
import img12 from "../img/12.png";

import "../css/trabajo.css";
import logoITTepic from "../img/logoITTepic.png";
import logoTecNM from "../img/logoTecNM.png";

const TrabajoISC = () => {
  const navigate = useNavigate();
  const { noControl } = useParams();

  useEffect(() => {
    // Puedes realizar cualquier lógica adicional aquí si es necesario
  }, [noControl]);
  return (
    <Fragment>
      <div class="contenedorDeTrabajo">
        <div class="contenedorDeMenu">
          <nav class="navbar navbar-expand-lg navbar-dark ">
            <div class="container-fluid">
              <Link to="" class="navbar-brand text-info fw-semibold fs-4">
                Portal de egresados
              </Link>
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
                      <Link to={`/login/menu/${noControl}`} class="nav-link">
                        Inicio
                      </Link>
                    </li>
                    <li class="nav-item p-3 py-md-1">
                      <Link
                        to={`/login/menu/${noControl}/encuesta`}
                        class="nav-link"
                      >
                        Encuesta
                      </Link>
                    </li>
                    <li class="nav-item p-3 py-md-1">
                      <Link to="" class="nav-link">
                        Bolsa de trabajo
                      </Link>
                    </li>
                    <li class="nav-item p-3 py-md-1">
                      <Link to="/" class="nav-link">
                        Cerrar sesión
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </nav>
        </div>

        <div class="container">
          <h1>Bolsa de Trabajo para Ingeniería en Sistemas Computacionales</h1>
          <div id="carrusel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carrusel"
                data-bs-slide-to="0"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carrusel"
                data-bs-slide-to="1"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carrusel"
                data-bs-slide-to="2"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carrusel"
                data-bs-slide-to="3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Consultoria1} class="d-block w-100" alt="Imagen 1" />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    Requisitos: Experiencia en evaluación de vulnerabilidades,
                    implementación de medidas de seguridad, conocimientos en
                    criptografía, certificaciones en seguridad informática serán
                    valoradas.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={Consultoria2} class="d-block w-100" alt="Imagen 2" />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    Requisitos: Experiencia en diseño e implementación de redes,
                    configuración de equipos de red (routers, switches),
                    conocimientos en protocolos de enrutamiento y seguridad en
                    redes.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={Desarrollo1} class="d-block w-100" alt="Imagen 3" />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    Requisitos: Experiencia en desarrollo de aplicaciones web,
                    dominio de lenguajes como Java o Python, conocimientos en
                    bases de datos SQL y NoSQL.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={Desarrollo2} class="d-block w-100" alt="Imagen 4" />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    Requisitos: Experiencia en integración continua,
                    automatización de despliegues, manejo de herramientas como
                    Docker y Kubernetes, conocimientos en scripting y
                    administración de sistemas Linux.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carrusel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carrusel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>

        <div class="container">
          <h1>Bolsa de Trabajo para Ingeniería Civil</h1>
          <div id="carrusel2" class="carousel slide" data-bs-ride="carousel2">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carrusel2"
                data-bs-slide-to="0"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carrusel2"
                data-bs-slide-to="1"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carrusel2"
                data-bs-slide-to="2"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carrusel2"
                data-bs-slide-to="3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img5} class="d-block w-100" alt="Imagen 1" />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    Requisitos: Experiencia en diseño estructural, manejo de
                    software especializado (como ETABS o SAP2000), conocimientos
                    en normativas de construcción y análisis de resistencia de
                    materiales.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img6} class="d-block w-100" alt="Imagen 2" />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    Requisitos: Experiencia en gestión de proyectos de
                    construcción, habilidades de planificación, coordinación con
                    equipos multidisciplinarios, conocimientos en costos y
                    presupuestos.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img7} class="d-block w-100" alt="Imagen 3" />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    Requisitos: Experiencia en estudios geotécnicos, análisis de
                    suelos, diseño de cimentaciones, conocimientos en mecánica
                    de suelos y software especializado (por ejemplo, Plaxis).
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img8} class="d-block w-100" alt="Imagen 4" />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    Requisitos: Experiencia en diseño de sistemas hidráulicos,
                    manejo de software de modelado hidráulico, conocimientos en
                    gestión de aguas, drenajes y sistemas de irrigación.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carrusel2"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carrusel2"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>

        <div class="container">
          <h1>Bolsa de Trabajo para Ingeniería en Gestión Empresarial</h1>
          <div id="carrusel3" class="carousel slide" data-bs-ride="carousel3">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carrusel3"
                data-bs-slide-to="0"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carrusel3"
                data-bs-slide-to="1"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carrusel3"
                data-bs-slide-to="2"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carrusel3"
                data-bs-slide-to="3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img9} class="d-block w-100" alt="Imagen 1" />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    Requisitos: Experiencia en análisis de mercado, formulación
                    de estrategias empresariales, habilidades en investigación
                    de mercado y desarrollo de planes estratégicos.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img10} class="d-block w-100" alt="Imagen 2" />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    Requisitos: Experiencia en identificación y mejora de
                    procesos, implementación de metodologías de gestión de
                    calidad (Six Sigma, Lean), habilidades en análisis de
                    eficiencia operativa.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img11} class="d-block w-100" alt="Imagen 3" />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    Requisitos: Experiencia en gestión de proyectos,
                    conocimientos en herramientas de planificación (como
                    Microsoft Project), habilidades de liderazgo y coordinación
                    de equipos multidisciplinarios.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img12} class="d-block w-100" alt="Imagen 4" />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    Requisitos: Experiencia en análisis financiero, elaboración
                    de informes y presupuestos, habilidades en modelado
                    financiero y proyecciones, conocimientos en herramientas
                    financieras y contables.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carrusel3"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carrusel3"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>

        <footer>
          <div id="direccion">
            <b>Dirección postal</b>
            <br></br>
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

export default TrabajoISC;

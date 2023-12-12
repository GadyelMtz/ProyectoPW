import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/menuEgresado.css";
import Opcion1 from "../img/Opcion1.png";
import Opcion2 from "../img/Opcion2.png";
import Opcion3 from "../img/Opcion3.png";
import Opcion4 from "../img/Opcion4.png";

import { Link } from "react-router-dom";

const MenuEgresado = () => {
  const navigate = useNavigate();
  const { noControl } = useParams();

  useEffect(() => {
    // Puedes realizar cualquier lógica adicional aquí si es necesario
  }, [noControl]);

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
                    <Link
                      to={`/login/menu/${noControl}/encuesta`}
                      class="nav-link"
                    >
                      Encuesta
                    </Link>
                  </li>
                  <li class="nav-item p-3 py-md-1">
                    <Link to="" class="nav-link">
                      Enlace vacio
                    </Link>
                  </li>
                  <li class="nav-item p-3 py-md-1">
                    <Link to="/" class="nav-link">
                      Cerrar sesión
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="contenedorDeInfo">
                <h1>Formas de Titulación</h1>

                <div class="background-image">
                  <div class="titulacion">
                    <div class="titulacion-item">
                      <img src={Opcion1} alt="Opción 1" />
                      <div class="titulacion-info">
                        <h2>Titulación por informe técnico de residencias</h2>
                        <p>
                          La titulación por informe técnico de residencias es un
                          proceso académico donde los estudiantes documentan y
                          analizan su experiencia práctica en un entorno
                          profesional específico, como empresas o instituciones.
                          Este informe detallado resalta las habilidades
                          adquiridas, los desafíos enfrentados y las soluciones
                          propuestas durante el periodo de residencia, siendo
                          una herramienta crucial para evaluar el aprendizaje
                          práctico del estudiante.
                        </p>
                      </div>
                    </div>

                    <div class="titulacion-item">
                      <img src={Opcion2} alt="Opción 2" />
                      <div class="titulacion-info">
                        <h2>Titulación por Tesis</h2>
                        <p>
                          La titulación por tesis es un método común en la
                          educación superior donde los estudiantes investigan un
                          tema específico en profundidad, realizan un estudio
                          exhaustivo, recopilan datos, analizan información
                          relevante y presentan sus hallazgos en un documento
                          formal. Esta tesis suele contribuir al conocimiento
                          existente en el campo y demuestra la capacidad del
                          estudiante para realizar investigación independiente y
                          avanzada.
                        </p>
                      </div>
                    </div>

                    <div class="titulacion-item">
                      <img src={Opcion3} alt="Opción 3" />
                      <div class="titulacion-info">
                        <h2>Titulación por Proyecto de investigación</h2>
                        <p>
                          La titulación por proyecto de investigación implica la
                          creación y ejecución de un proyecto que aborda una
                          pregunta, problema o tema específico dentro de un área
                          académica. Los estudiantes desarrollan habilidades de
                          investigación al diseñar un plan, recopilar datos,
                          analizar resultados y presentar conclusiones. Este
                          enfoque práctico les permite aplicar conocimientos
                          teóricos a situaciones reales, contribuyendo al campo
                          de estudio y obteniendo su título mediante la
                          realización exitosa del proyecto.
                        </p>
                      </div>
                    </div>

                    <div class="titulacion-item">
                      <img src={Opcion4} alt="Opción 4" />
                      <div class="titulacion-info">
                        <h2>Titulación por Examen ceneval</h2>
                        <p>
                          La titulación por examen CENEVAL es un proceso de
                          evaluación estandarizado en México que permite a los
                          estudiantes obtener su título universitario sin la
                          necesidad de cursar todos los créditos o asignaturas
                          de un plan de estudios. El Examen General para el
                          Egreso de la Licenciatura (EGEL) del CENEVAL evalúa
                          los conocimientos, habilidades y competencias
                          adquiridas durante la carrera. Los estudiantes que
                          demuestran un dominio satisfactorio del contenido
                          pueden obtener su título universitario a través de
                          este examen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default MenuEgresado;

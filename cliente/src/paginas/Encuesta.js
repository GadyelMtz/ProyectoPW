import React, { Fragment, useState } from "react";
import "../css/encuesta.css";
import { Link } from "react-router-dom";
const Encuesta = () => {
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
                                        <Link to="/login/menu/encuesta/:noControl" class="nav-link">
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
            <div className="contenedorDeEncuesta">
                <h1 className="text-center mt-4 text-azul fs-3">Encuesta de Seguimiento del Egresado</h1>

                <form action=" " method="POST">
                    {/* <!-- Datos de la encuesta --> */}
                    <label for="id_encuesta">ID Encuesta:</label>
                    <input type="text" id="id_encuesta" name="id_encuesta" /><br></br><br></br>

                    <label for="id_egresado">No. Control - Egresado:</label>
                    <input type="text" id="id_egresado" name="id_egresado" /><br></br><br></br>

                    <label for="fecha_encuesta">Fecha de Encuesta:</label>
                    <input type="date" id="fecha_encuesta" name="fecha_encuesta" /><br></br><br></br>

                    {/* <!-- Sección: Pertinencia y Disponibilidad de Medios --> */}
                    <h3>Pertinencia y Disponibilidad de Medios</h3>
                    <p>Califique la calidad de la educación profesional proporcionada por el personal docente, así
                        como el plan de estudios de la carrera que cursó y las condiciones del plantel en cuanto a infraestructura.
                    </p>

                    <div class="row">
                        <label for="calidad_docente">Calidad de los docentes:</label>
                        <div class="col-3">
                            <input type="radio" id="calidad_docente_MuyBuena" name="calidad_docente" value="muy buena" />
                            <label for="calidad_docente_MuyBuena">Muy Buena</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="calidad_docente_Buena" name="calidad_docente" value="buena" />
                            <label for="calidad_docente_Buena">Buena</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="calidad_docente_Regular" name="calidad_docente" value="regular" />
                            <label for="calidad_docente_Regular">Regular</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="calidad_docente_Mala" name="calidad_docente" value="mala" />
                            <label for="calidad_docente_Mala">Mala</label><br></br>

                        </div>
                    </div>


                    <label for="calidad_plan_estudios">Calidad Plan de Estudios:</label>

                    <div class="row">
                        <div class="col-3">
                            <input type="radio" id="calidad_plan_estudios_MuyBuena" name="calidad_plan_estudios" value="muy buena" />
                            <label for="calidad_plan_estudios_MuyBuena">Muy Buena</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="calidad_plan_estudios_Buena" name="calidad_plan_estudios" value="buena" />
                            <label for="calidad_plan_estudios_Buena">Buena</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="calidad_plan_estudios_Regular" name="calidad_plan_estudios" value="regular" />
                            <label for="calidad_plan_estudios_Regular">Regular</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="calidad_plan_estudios_Mala" name="calidad_plan_estudios" value="mala" />
                            <label for="calidad_plan_estudios_Mala">Mala</label><br></br>
                        </div>
                    </div>



                    <label for="condiciones_infraestructura">Satisfacción con las condiciones de estudio (infraestructura):</label>
                    <div class="row">
                        <div class="col-3">
                            <input type="radio" id="condiciones_infraestructura_MuyBuena" name="condiciones_infraestructura"
                                value="muy buena" />
                            <label for="condiciones_infraestructura_MuyBuena">Muy Buena</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="condiciones_infraestructura_Buena" name="condiciones_infraestructura"
                                value="buena" />
                            <label for="condiciones_infraestructura_Buena">Buena</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="condiciones_infraestructura_Regular" name="condiciones_infraestructura"
                                value="regular" />
                            <label for="condiciones_infraestructura_Regular">Regular</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="condiciones_infraestructura_Mala" name="condiciones_infraestructura"
                                value="mala" />
                            <label for="condiciones_infraestructura_Mala">Mala</label><br></br>

                        </div>
                    </div>

                    {/* <!-- <input type="radio" id="condiciones_infraestructura_MuyBuena" name="condiciones_infraestructura"
        value="muy buena">
    <label for="condiciones_infraestructura_MuyBuena">Muy Buena</label>
    <input type="radio" id="condiciones_infraestructura_Buena" name="condiciones_infraestructura" value="buena">
    <label for="condiciones_infraestructura_Buena">Buena</label>
    <input type="radio" id="condiciones_infraestructura_Regular" name="condiciones_infraestructura" value="regular">
    <label for="condiciones_infraestructura_Regular">Regular</label>
    <input type="radio" id="condiciones_infraestructura_Mala" name="condiciones_infraestructura" value="mala">
    <label for="condiciones_infraestructura_Mala">Mala</label><br><br> --> */}


                    {/* <!-- Sección: Ubicación Laboral --> */}
                    <h3>Ubicación Laboral</h3>
                    <p>Indique a cuál de los siguientes puntos corresponde su situación actual</p>

                    <label for="situacion_actual">Actividad a la que se dedica actualmente:</label>
                    <select id="situacion_actual" name="situacion_actual">
                        <option value="trabajando">Trabajando</option>
                        <option value="estudiando">Estudiando</option>
                        <option value="estudia y trabaja">Estudia y Trabaja</option>
                        <option value="desempleado">Desempleado</option>
                        {/* <!-- Agrega más opciones según sea necesario --> */}
                    </select><br></br><br></br>

                    <h5>En caso de estudiar:</h5>
                    <label for="estudio">Indicar si es:</label>
                    <select id="estudio" name="estudio">
                        <option value="especialidad">Especialidad</option>
                        <option value="maestría">Maestría</option>
                        <option value="doctorado">Doctorado</option>
                        <option value="idiomas">Idiomas</option>
                        {/* <!-- Agrega más opciones según sea necesario --> */}
                    </select><br></br><br></br>

                    <h5>En caso de trabajar:</h5>
                    <label for="empresa">Empresa:</label>
                    <input type="text" id="empresa" name="empresa" placeholder="Indique la empresa en la que trabaja" /><br></br><br></br>

                    <label for="tiempo_empleo">Tiempo transcurrido para obtener el primer empleo:</label>
                    <select id="tiempo_empleo" name="tiempo_empleo">
                        <option value="antes de egresar">Antes de Egresar</option>
                        <option value="menos de seis meses">Menos de seis meses</option>
                        <option value="entre seis meses y un año">Entre seis meses y un año</option>
                        <option value="más de un año">Más de un año</option>
                        {/* <!-- Agrega más opciones según sea necesario --> */}
                    </select><br></br><br></br>

                    <label for="jerarquia_laboral">Nivel jerárquico en el trabajo:</label>
                    <select id="jerarquia_laboral" name="jerarquia_laboral">
                        <option value="técnico">Técnico</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="jefe de área">Jefe de área</option>
                        <option value="funcionario">Funcionario</option>
                        <option value="directivo">Directivo</option>
                        <option value="empresario">Empresario</option>
                        {/* <!-- Agrega más opciones según sea necesario --> */}
                    </select><br></br><br></br>

                    <label for="condicion_trabajo">Condición de trabajo:</label>
                    <select id="condicion_trabajo" name="condicion_trabajo">
                        <option value="base">Base</option>
                        <option value="eventual">Eventual</option>
                        <option value="contrato">Contrato</option>
                        {/* <!-- Agrega más opciones según sea necesario --> */}
                    </select><br></br><br></br>

                    <label for="sector_trabajo">Sector:</label>
                    <select id="sector_trabajo" name="sector_trabajo">
                        <option value="agroindustria">Agroindustria (primario)</option>
                        <option value="pesquero">Pesquero (primario)</option>
                        <option value="minero">Minero (primario)</option>
                        <option value="industrial">Industrial (secundario)</option>
                        <option value="construcción">Construcción (secundario)</option>
                        <option value="petrolero">Petrolero (secundario)</option>
                        <option value="educativo">Educativo (terciario)</option>
                        <option value="turismo">Turismo (terciario)</option>
                        <option value="comercio">Comercio (terciario)</option>
                        <option value="servicios financieros">Servicios financieros (terciario)</option>
                        {/* <!-- Agrega más opciones según sea necesario --> */}
                    </select><br></br><br></br>

                    {/* <!-- Agrega más campos según sea necesario para esta sección -->

    <!-- Sección: Desempeño Profesional --> */}
                    <h3>Desempeño Profesional</h3>

                    <label for="eficiencia_laboral">Eficiencia Laboral:</label>
                    <div class="row">
                        <div class="col-3">
                            <input type="radio" id="eficiencia_laboral_MuyBuena" name="eficiencia_laboral" value="muy buena" />
                            <label for="eficiencia_laboral_MuyBuena">Muy Buena</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="eficiencia_laboral_Buena" name="eficiencia_laboral" value="buena" />
                            <label for="eficiencia_laboral_Buena">Buena</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="eficiencia_laboral_Regular" name="eficiencia_laboral" value="regular" />
                            <label for="eficiencia_laboral_Regular">Regular</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="eficiencia_laboral_Mala" name="eficiencia_laboral" value="mala" />
                            <label for="eficiencia_laboral_Mala">Mala</label><br></br>

                        </div>
                    </div>

                    {/* <!-- <input type="radio" id="eficiencia_laboral_MuyEficiente" name="eficiencia_laboral" value="muy eficiente">
    <label for="eficiencia_laboral_MuyEficiente">Muy eficiente</label>
    <input type="radio" id="eficiencia_laboral_Eficiente" name="eficiencia_laboral" value="eficiente">
    <label for="eficiencia_laboral_Eficiente">Eficiente</label>
    <input type="radio" id="eficiencia_laboral_PocoEficiente" name="eficiencia_laboral" value="poco eficiente">
    <label for="eficiencia_laboral_PocoEficiente">Poco eficiente</label>
    <input type="radio" id="eficiencia_laboral_Deficiente" name="eficiencia_laboral" value="deficiente">
    <label for="eficiencia_laboral_Deficiente">Deficiente</label><br><br> --> */}

                    <label for="formación_academica">Cómo califica su formación académica con respecto a su desempeño
                        laboral:</label>
                    <div class="row">
                        <div class="col-3">
                            <input type="radio" id="formación_academica_MuyBuena" name="formación_academica" value="muy buena" />
                            <label for="formación_academica_MuyBuena">Muy Buena</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="formación_academica_Buena" name="formación_academica" value="buena" />
                            <label for="formación_academica_Buena">Buena</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="formación_academica_Regular" name="formación_academica" value="regular" />
                            <label for="formación_academica_Regular">Regular</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="formación_academica_Mala" name="formación_academica" value="mala" />
                            <label for="formación_academica_Mala">Mala</label><br></br>

                        </div>
                    </div>
                    {/* <!-- <input type="radio" id="formación_academica_MuyBuena" name="formación_academica" value="muy buena">
    <label for="formación_academica_MuyBuena">Muy Buena</label>
    <input type="radio" id="formación_academica_Buena" name="formación_academica" value="buena">
    <label for="formación_academica_Buena">Buena</label>
    <input type="radio" id="formación_academica_Regular" name="formación_academica" value="regular">
    <label for="formación_academica_Regular">Regular</label>
    <input type="radio" id="formación_academica_Mala" name="formación_academica" value="mala">
    <label for="formación_academica_Mala">Mala</label><br><br> --> */}

                    <label for="utilidad_residencias">Utilidad de las residencias profesionales o prácticas profesionales para su
                        desarrollo laboral y profesional:</label>
                    <div class="row">
                        <div class="col-3">
                            <input type="radio" id="utilidad_residencias_MuyBuena" name="utilidad_residencias" value="muy buena" />
                            <label for="utilidad_residencias_MuyBuena">Muy Buena</label>
                        </div>

                        <div class="col-3">
                            <input type="radio" id="utilidad_residencias_Buena" name="utilidad_residencias" value="buena" />
                            <label for="utilidad_residencias_Buena">Buena</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="utilidad_residencias_Regular" name="utilidad_residencias" value="regular" />
                            <label for="utilidad_residencias_Regular">Regular</label>

                        </div>

                        <div class="col-3">
                            <input type="radio" id="utilidad_residencias_Mala" name="utilidad_residencias" value="mala" />
                            <label for="utilidad_residencias_Mala">Mala</label><br></br>

                        </div>
                    </div>

                    {/* <!-- <input type="radio" id="utilidad_residencias_MuyBuena" name="utilidad_residencias" value="muy buena">
    <label for="utilidad_residencias_MuyBuena">Muy Buena</label>
    <input type="radio" id="utilidad_residencias_Buena" name="utilidad_residencias" value="buena">
    <label for="utilidad_residencias_Buena">Buena</label>
    <input type="radio" id="utilidad_residencias_Regular" name="utilidad_residencias" value="regular">
    <label for="utilidad_residencias_Regular">Regular</label>
    <input type="radio" id="utilidad_residencias_Mala" name="utilidad_residencias" value="mala">
    <label for="utilidad_residencias_Mala">Mala</label><br><br> --> */}

                    <h3>Expectativas de Desarrollo</h3>

                    <label for="cursos_actualizacion">Cursos de Actualización:</label>
                    <div class="row">
                        <div class="col-6">
                            <input type="radio" id="cursos_si" name="cursos_actualizacion" value="si" />
                            <label for="cursos_si">Sí</label>

                        </div>

                        <div class="col-6">
                            <input type="radio" id="cursos_no" name="cursos_actualizacion" value="no" />
                            <label for="cursos_no">No</label><br></br>

                        </div>
                    </div>

                    <label for="posgrado">Posgrado:</label>
                    <div class="row">
                        <div class="col-6">
                            <input type="radio" id="posgrado_si" name="cursos_actualizacion" value="si" />
                            <label for="posgrado_si">Sí</label>

                        </div>

                        <div class="col-6">
                            <input type="radio" id="posgrado_no" name="cursos_actualizacion" value="no" />
                            <label for="posgrado_no">No</label><br></br>

                        </div>
                    </div>

                    <div class="text-center">
                        <input type="submit" value="Enviar Encuesta" />
                    </div>
                </form>
            </div>
        </Fragment>
    );
};
export default Encuesta;

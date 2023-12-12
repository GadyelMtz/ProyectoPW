import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Encuesta = () => {
  return (
  <Fragment>
    <div className="contenedorDeEncuesta">
    <div class="container mt-3">
        <h1>Encuesta de Seguimiento del Egresado</h1>

        <form action=" " method="POST">
            <div clas="row">
                <div class="col-md-6 mb-3">
                    <label for="id_encuesta">ID Encuesta:</label>
                    <input type="text" id="id_encuesta" name="id_encuesta"/>
                </div>
            
                <div class="col-md-6 mb-3">
                    <label for="fecha_encuesta">Fecha de Encuesta:</label>
                    <input type="date" id="fecha_encuesta" name="fecha_encuesta"/><br></br><br></br>
                </div>
            </div>
            
            <div class="row">
                <label for="id_egresado">No. Control - Egresado:</label>
                <div class="col-12">
                    <input type="text" id="id_egresado" name="id_egresado"/>
                </div>
            </div>

            <h3>Pertinencia y Disponibilidad de Medios</h3>
            <p>Califique la calidad de la educación profesional proporcionada por el personal docente, así
                como el plan de estudios de la carrera que cursó y las condiciones del plantel en cuanto a infraestructura.
            </p>
        
            <label for="calidad_docente">Calidad de los docentes:</label>
            <input type="number" id="calidad_docente" name="calidad_docente" min="1" max="10"/><br></br><br></br>
        
            <label for="calidad_plan_estudios">Calidad Plan de Estudios:</label>
            <input type="number" id="calidad_plan_estudios" name="calidad_plan_estudios" min="1" max="10"/><br></br><br></br>
        
            <label for="condiciones_infraestructura">Satisfacción con las condiciones de estudio (infraestructura):</label>
            <input type="number" id="condiciones_infraestructura" name="condiciones_infraestructura" min="1"
                max="10"/><br></br><br></br>
    
            <h3>Ubicación Laboral</h3>
            <h4>Indique a cuál de los siguientes puntos corresponde su situación actual</h4>
        
            <label for="situacion_actual">Actividad a la que se dedica actualmente:</label>
            <select id="situacion_actual" name="situacion_actual">
                <option value="trabajando">Trabajando</option>
                <option value="estudiando">Estudiando</option>
                <option value="estudia y trabaja">Estudia y Trabaja</option>
                <option value="desempleado">Desempleado</option>
            </select><br></br><br></br>
        
            <h5>En caso de estudiar:</h5>
            <label for="estudio">Indicar si es:</label>
            <select id="estudio" name="estudio">
                <option value="especialidad">Especialidad</option>
                <option value="maestría">Maestría</option>
                <option value="doctorado">Doctorado</option>
                <option value="idiomas">Idiomas</option>
            </select><br></br><br></br>
        
            <h5>En caso de trabajar:</h5>
            <label for="empresa">Empresa:</label>
            <input type="text" id="empresa" name="empresa"/><br></br><br></br>
        
            <label for="tiempo_empleo">Tiempo transcurrido para obtener el primer empleo:</label>
            <select id="tiempo_empleo" name="tiempo_empleo">
                <option value="antes de egresar">Antes de Egresar</option>
                <option value="menos de seis meses">Menos de seis meses</option>
                <option value="entre seis meses y un año">Entre seis meses y un año</option>
                <option value="más de un año">Más de un año</option>
            </select><br></br><br></br>
        
            <label for="jerarquia_laboral">Nivel jerárquico en el trabajo:</label>
            <select id="jerarquia_laboral" name="jerarquia_laboral">
                <option value="técnico">Técnico</option>
                <option value="Supervisor">Supervisor</option>
                <option value="jefe de área">Jefe de área</option>
                <option value="funcionario">Funcionario</option>
                <option value="directivo">Directivo</option>
                <option value="empresario">Empresario</option>
            </select><br></br><br></br>
        
            <label for="condicion_trabajo">Condición de trabajo:</label>
            <select id="condicion_trabajo" name="condicion_trabajo">
                <option value="base">Base</option>
                <option value="eventual">Eventual</option>
                <option value="contrato">Contrato</option>
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
            </select><br></br><br></br>
        
            <h3>Desempeño Profesional</h3>
        
            <label for="eficiencia_laboral">Eficiencia Laboral:</label>
            <input type="number" id="eficiencia_laboral" name="eficiencia_laboral" min="1" max="10"/><br></br><br></br>
        
            <label for="formación_academica">Cómo califica su formación académica con respecto a su desempeño
                laboral:</label>
            <input type="number" id="formación_academica" name="formación_academica" min="1" max="10"/><br></br><br></br>
        
            <label for="utilidad_residencias">Utilidad de las residencias profesionales o prácticas profesionales para su
                desarrollo laboral y profesional:</label>
            <input type="number" id="utilidad_residencias" name="utilidad_residencias" min="1" max="10"/><br></br><br></br>

            <h3>Expectativas de Desarrollo</h3>
        
            <label for="cursos_actualizacion">Cursos de Actualización:</label>
            <input type="radio" id="cursos_si" name="cursos_actualizacion" value="si"/>
            <label for="cursos_si">Sí</label>
            <input type="radio" id="cursos_no" name="cursos_actualizacion" value="no"/>
            <label for="cursos_no">No</label><br></br><br></br>
        
            <label for="posgrado">Posgrado:</label>
            <input type="radio" id="posgrado_si" name="posgrado" value="si"/>
            <label for="posgrado_si">Sí</label>
            <input type="radio" id="posgrado_no" name="posgrado" value="no"/>
            <label for="posgrado_no">No</label><br></br><br></br>
            <input type="submit" value="Enviar Encuesta"/>
        </form>
    </div>
    </div>
  </Fragment>
  );
};
export default Encuesta;

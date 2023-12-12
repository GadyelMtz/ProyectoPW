import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importar el hook useParams
import "../css/encuesta.css";
import { useNavigate, Link } from "react-router-dom";
const Encuesta = () => {
  const [formData, setFormData] = useState({
    nocontrol: "", // Este valor se asigna en useEffect con el número de control

    // Sección: Pertinencia y Disponibilidad de Medios
    pregunta1: "",
    pregunta2: "",
    pregunta3: "",

    // Sección: Ubicación Laboral
    pregunta4: "",
    pregunta5: "",
    pregunta6: "",
    pregunta7: "",
    pregunta8: "",
    pregunta9: "",
    pregunta10: "",

    // Sección: Desempeño Profesional
    pregunta11: "",
    pregunta12: "",
    pregunta13: "",

    // Sección: Expectativas de Desarrollo
    pregunta14: "",
    pregunta15: "",
  });

  // Usar el hook useParams para obtener el número de control de la URL
  const { noControl } = useParams();
  const [encuestaRealizada, setEncuestaRealizada] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Actualizar el estado del formulario con el número de control
    setFormData({
      ...formData,
      nocontrol: noControl,
      id_egresado: noControl,
    });
  }); // Agregar noControl como dependencia para que se actualice cuando cambie

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    const requiredFields = [
      "pregunta1",
      "pregunta2",
      "pregunta3",
      "pregunta4",
      "pregunta5",
      "pregunta6",
      "pregunta7",
      "pregunta8",
      "pregunta9",
      "pregunta10",
      "pregunta11",
      "pregunta12",
      "pregunta13",
      "pregunta14",
      "pregunta15",
    ];

    const invalidSelectFields = ["pregunta4", "pregunta5"];

    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Por favor, completa el campo ${field}`);
        return;
      }
    }

    for (const field of invalidSelectFields) {
      if (formData[field] === "- Seleccione -") {
        alert(`Por favor, selecciona una opción válida en ${field}`);
        return;
      }
    }

    try {
      console.log("Datos que se enviarán:", formData); // Agrega esta línea
      console.log(
        `Enviando solicitud POST a: http://localhost:5000/login/menu/${formData.id_egresado}/encuesta`
      );
      const response = await fetch(
        `http://localhost:5000/login/menu/${formData.id_egresado}/encuesta`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Puedes hacer algo con la respuesta del servidor si es necesario
        setEncuestaRealizada(true);

        // Mostrar alerta
        alert(
          "¡La encuesta ha sido realizada!"
        );

        // Redirigir a la siguiente URL después de 2 segundos
        setTimeout(() => {
          navigate(`/login/menu/${formData.nocontrol}`);
        }, 500);
      } else {
        console.error("Error al enviar la encuesta");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <div className="contenedorDeEncuesta">
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
                      <Link to={`/login/menu/${noControl}/trabajo`} class="nav-link">
                        Bolsa de trabajo
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
        <h1>Encuesta de Seguimiento del Egresado</h1>
        <form onSubmit={handleSubmit}>
          <div className="contenedorDeEncuesta">
            <h1 className="text-center mt-4 text-azul fs-3">
              Encuesta de Seguimiento del Egresado
            </h1>
            <label for="id_egresado">No. Control - Egresado:</label>
            <input
              type="text"
              id="id_egresado"
              name="id_egresado"
              className="form-control"
              value={formData.id_egresado}
              onChange={handleChange}
              readOnly
            />
            {/* <!-- Sección: Pertinencia y Disponibilidad de Medios --> */}
            <h3>Pertinencia y Disponibilidad de Medios</h3>
            <p>
              Califique la calidad de la educación profesional proporcionada por
              el personal docente, así como el plan de estudios de la carrera
              que cursó y las condiciones del plantel en cuanto a
              infraestructura.
            </p>

            <div class="row">
              <label for="pregunta1">Calidad de los docentes:</label>
              <div class="col-3">
                <input
                  type="radio"
                  id="calidad_docente_MuyBuena"
                  name="pregunta1"
                  value="Muy buena"
                  onChange={handleChange}
                />
                <label for="calidad_docente_MuyBuena">Muy Buena</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="calidad_docente_Buena"
                  name="pregunta1"
                  value="Buena"
                  onChange={handleChange}
                />
                <label for="calidad_docente_Buena">Buena</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="calidad_docente_Regular"
                  name="pregunta1"
                  value="Regular"
                  onChange={handleChange}
                />
                <label for="calidad_docente_Regular">Regular</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="calidad_docente_Mala"
                  name="pregunta1"
                  value="Mala"
                  onChange={handleChange}
                />
                <label for="calidad_docente_Mala">Mala</label>
                <br></br>
              </div>
            </div>

            <label for="pregunta2">Calidad Plan de Estudios:</label>

            <div class="row">
              <div class="col-3">
                <input
                  type="radio"
                  id="calidad_plan_estudios_MuyBuena"
                  name="pregunta2"
                  value="Muy buena"
                  onChange={handleChange}
                />
                <label for="calidad_plan_estudios_MuyBuena">Muy Buena</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="calidad_plan_estudios_Buena"
                  name="pregunta2"
                  value="Buena"
                  onChange={handleChange}
                />
                <label for="calidad_plan_estudios_Buena">Buena</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="calidad_plan_estudios_Regular"
                  name="pregunta2"
                  value="Regular"
                  onChange={handleChange}
                />
                <label for="calidad_plan_estudios_Regular">Regular</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="calidad_plan_estudios_Mala"
                  name="pregunta2"
                  value="Mala"
                  onChange={handleChange}
                />
                <label for="calidad_plan_estudios_Mala">Mala</label>
                <br></br>
              </div>
            </div>

            <label for="condiciones_infraestructura">
              Satisfacción con las condiciones de estudio (infraestructura):
            </label>
            <div class="row">
              <div class="col-3">
                <input
                  type="radio"
                  id="condiciones_infraestructura_MuyBuena"
                  name="pregunta3"
                  value="Muy buena"
                  onChange={handleChange}
                />
                <label for="condiciones_infraestructura_MuyBuena">
                  Muy Buena
                </label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="condiciones_infraestructura_Buena"
                  name="pregunta3"
                  value="Buena"
                  onChange={handleChange}
                />
                <label for="condiciones_infraestructura_Buena">Buena</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="condiciones_infraestructura_Regular"
                  name="pregunta3"
                  value="Regular"
                  onChange={handleChange}
                />
                <label for="condiciones_infraestructura_Regular">Regular</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="condiciones_infraestructura_Mala"
                  name="pregunta3"
                  value="Mala"
                  onChange={handleChange}
                />
                <label for="condiciones_infraestructura_Mala">Mala</label>
                <br></br>
              </div>
            </div>

            {/* <!-- Sección: Ubicación Laboral --> */}
            <h3>Ubicación Laboral</h3>
            <p>
              Indique a cuál de los siguientes puntos corresponde su situación
              actual
            </p>

            <label for="pregunta4">
              Actividad a la que se dedica actualmente:
            </label>
            <select
              id="pregunta4"
              name="pregunta4"
              onChange={handleChange}
              value={formData.pregunta4 || ""}
            >
              <option>- Seleccione -</option>
              <option value="Trabajando">Trabajando</option>
              <option value="Estudiando">Estudiando</option>
              <option value="Estudia y trabaja">Estudia y Trabaja</option>
              <option value="Desempleado">Desempleado</option>
              {/* <!-- Agrega más opciones según sea necesario --> */}
            </select>
            <br></br>
            <br></br>

            <h5>En caso de estudiar:</h5>
            <label for="estudio">Indicar si es:</label>
            <select id="pregunta5" name="pregunta5" onChange={handleChange}>
              <option>- Seleccione -</option>
              <option value="Especialidad">Especialidad</option>
              <option value="Maestría">Maestría</option>
              <option value="Doctorado">Doctorado</option>
              <option value="Idiomas">Idiomas</option>
              {/* <!-- Agrega más opciones según sea necesario --> */}
            </select>
            <br></br>
            <br></br>

            <h5>En caso de trabajar:</h5>
            <label for="empresa">Empresa:</label>
            <input
              type="text"
              id="pregunta6"
              name="pregunta6"
              placeholder="Indique la empresa en la que trabaja"
              onChange={handleChange}
            />
            <br></br>
            <br></br>

            <label for="tiempo_empleo">
              Tiempo transcurrido para obtener el primer empleo:
            </label>
            <select id="pregunta7" name="pregunta7" onChange={handleChange}>
              <option>- Seleccione -</option>
              <option value="Antes de egresar">Antes de Egresar</option>
              <option value="Menos de seis meses">Menos de seis meses</option>
              <option value="Entre seis meses y un año">
                Entre seis meses y un año
              </option>
              <option value="Más de un año">Más de un año</option>
              {/* <!-- Agrega más opciones según sea necesario --> */}
            </select>
            <br></br>
            <br></br>

            <label for="jerarquia_laboral">
              Nivel jerárquico en el trabajo:
            </label>
            <select id="pregunta8" name="pregunta8" onChange={handleChange}>
              <option>- Seleccione -</option>

              <option value="Técnico">Técnico</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Jefe de área">Jefe de área</option>
              <option value="Funcionario">Funcionario</option>
              <option value="Directivo">Directivo</option>
              <option value="Empresario">Empresario</option>
              {/* <!-- Agrega más opciones según sea necesario --> */}
            </select>
            <br></br>
            <br></br>

            <label for="condicion_trabajo">Condición de trabajo:</label>
            <select id="pregunta9" name="pregunta9" onChange={handleChange}>
              <option>- Seleccione -</option>

              <option value="Base">Base</option>
              <option value="Eventual">Eventual</option>
              <option value="Contrato">Contrato</option>
              {/* <!-- Agrega más opciones según sea necesario --> */}
            </select>
            <br></br>
            <br></br>

            <label for="sector_trabajo">Sector:</label>
            <select id="pregunta10" name="pregunta10" onChange={handleChange}>
              <option>- Seleccione -</option>
              <option value="Agroindustria">Agroindustria (primario)</option>
              <option value="Pesquero">Pesquero (primario)</option>
              <option value="Minero">Minero (primario)</option>
              <option value="Industrial">Industrial (secundario)</option>
              <option value="Construcción">Construcción (secundario)</option>
              <option value="Petrolero">Petrolero (secundario)</option>
              <option value="Educativo">Educativo (terciario)</option>
              <option value="Turismo">Turismo (terciario)</option>
              <option value="Comercio">Comercio (terciario)</option>
              <option value="Servicios financieros">
                Servicios financieros (terciario)
              </option>
              {/* <!-- Agrega más opciones según sea necesario --> */}
            </select>
            <br></br>
            <br></br>

            {/* <!-- Agrega más campos según sea necesario para esta sección -->

    <!-- Sección: Desempeño Profesional --> */}
            <h3>Desempeño Profesional</h3>

            <label for="eficiencia_laboral">Eficiencia Laboral:</label>
            <div class="row">
              <div class="col-3">
                <input
                  type="radio"
                  id="pregunta11"
                  name="pregunta11"
                  value="Muy buena"
                  onChange={handleChange}
                />
                <label for="eficiencia_laboral_MuyBuena">Muy Buena</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="pregunta11"
                  name="pregunta11"
                  value="Buena"
                  onChange={handleChange}
                />
                <label for="eficiencia_laboral_Buena">Buena</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="pregunta11"
                  name="pregunta11"
                  value="Regular"
                  onChange={handleChange}
                />
                <label for="eficiencia_laboral_Regular">Regular</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="pregunta11"
                  name="pregunta11"
                  value="Mala"
                  onChange={handleChange}
                />
                <label for="eficiencia_laboral_Mala">Mala</label>
                <br></br>
              </div>
            </div>

            <label for="formación_academica">
              Cómo califica su formación académica con respecto a su desempeño
              laboral:
            </label>
            <div class="row">
              <div class="col-3">
                <input
                  type="radio"
                  id="pregunta12"
                  name="pregunta12"
                  value="Muy buena"
                  onChange={handleChange}
                />
                <label for="pregunta12">Muy Buena</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="pregunta12"
                  name="pregunta12"
                  value="Buena"
                  onChange={handleChange}
                />
                <label for="formación_academica_Buena">Buena</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="pregunta12"
                  name="pregunta12"
                  value="Regular"
                  onChange={handleChange}
                />
                <label for="formación_academica_Regular">Regular</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="pregunta12"
                  name="pregunta12"
                  value="Mala"
                  onChange={handleChange}
                />
                <label for="formación_academica_Mala">Mala</label>
                <br></br>
              </div>
            </div>

            <label for="utilidad_residencias">
              Utilidad de las residencias profesionales o prácticas
              profesionales para su desarrollo laboral y profesional:
            </label>
            <div class="row">
              <div class="col-3">
                <input
                  type="radio"
                  id="pregunta13"
                  name="pregunta13"
                  value="Muy buena"
                  onChange={handleChange}
                />
                <label for="utilidad_residencias_MuyBuena">Muy Buena</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="pregunta13"
                  name="pregunta13"
                  value="Buena"
                  onChange={handleChange}
                />
                <label for="utilidad_residencias_Buena">Buena</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="pregunta13"
                  name="pregunta13"
                  value="Regular"
                  onChange={handleChange}
                />
                <label for="utilidad_residencias_Regular">Regular</label>
              </div>

              <div class="col-3">
                <input
                  type="radio"
                  id="pregunta13"
                  name="pregunta13"
                  value="Mala"
                  onChange={handleChange}
                />
                <label for="utilidad_residencias_Mala">Mala</label>
                <br></br>
              </div>
            </div>

            <h3>Expectativas de Desarrollo</h3>

            <label for="cursos_actualizacion">Cursos de Actualización:</label>
            <div class="row">
              <div class="col-6">
                <input
                  type="radio"
                  id="pregunta14"
                  name="pregunta14"
                  value="Si"
                  onChange={handleChange}
                />
                <label for="cursos_si">Sí</label>
              </div>

              <div class="col-6">
                <input
                  type="radio"
                  id="pregunta14"
                  name="pregunta14"
                  value="No"
                  onChange={handleChange}
                />
                <label for="cursos_no">No</label>
                <br></br>
              </div>
            </div>

            <label for="posgrado">Posgrado:</label>
            <div class="row">
              <div class="col-6">
                <input
                  type="radio"
                  id="pregunta15"
                  name="pregunta15"
                  value="Si"
                  onChange={handleChange}
                />
                <label for="posgrado_si">Sí</label>
              </div>

              <div class="col-6">
                <input
                  type="radio"
                  id="pregunta15"
                  name="pregunta15"
                  value="No"
                  onChange={handleChange}
                />
                <label for="posgrado_no">No</label>
                <br></br>
              </div>
            </div>

            <div class="text-center">
              <input type="submit" value="Enviar Encuesta" />
            </div>
          </div>
        </form>
        {encuestaRealizada && (
          <div>
            <p>
              Puedes volver a la página de inicio haciendo clic{" "}
              <Link
                to={`/login/menu/${formData.nocontrol}`}
                className="nav-link"
              >
                aquí
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default Encuesta;

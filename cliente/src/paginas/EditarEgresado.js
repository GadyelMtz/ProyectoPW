import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import "../css/EditarEgresado.css";
import { Link } from "react-router-dom";


const EditarEgresado = () => {
  const { noControl } = useParams();
  const [egresado, setEgresado] = useState(null);
  const [actualizacionExitosa, setActualizacionExitosa] = useState(false);
  const [nuevosDatos, setNuevosDatos] = useState({
    nombres: "",
    apellidopaterno: "",
    apellidomaterno: "",
    fechanacimiento: "",
    sexo: "",
    estadocivil: "",
    cp: "",
    municipio: "",
    estado: "",
    telefono: "",
    titulado: "",
    fechaegreso: "",
    carrera: "",
    especialidad: "",
    domicilio: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/login/menu-administrador/consultar-egresados/${noControl}`
        );
        const jsonData = await response.json();

        setEgresado(jsonData);

        setNuevosDatos({
          ...jsonData,
          fechanacimiento: jsonData.fechanacimiento
            ? format(new Date(jsonData.fechanacimiento), "yyyy-MM-dd")
            : "",
          fechaegreso: jsonData.fechaegreso
            ? format(new Date(jsonData.fechaegreso), "yyyy-MM-dd")
            : "",
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [noControl]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevosDatos((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const editarEgresado = async (e) => {
    e.preventDefault();

    try {
      const fechaNacimientoFormateada = format(
        new Date(nuevosDatos.fechanacimiento),
        "yyyy-MM-dd"
      );

      const fechaEgresoFormateada = format(
        new Date(nuevosDatos.fechaegreso),
        "yyyy-MM-dd"
      );

      console.log("Datos a enviar:", {
        ...nuevosDatos,
        fechanacimiento: fechaNacimientoFormateada,
        fechaegreso: fechaEgresoFormateada,
      });

      await fetch(
        `http://localhost:5000/login/menu-administrador/editar-egresado/${noControl}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...nuevosDatos,
            fechanacimiento: fechaNacimientoFormateada,
            fechaegreso: fechaEgresoFormateada,
          }),
        }
      );

      setEgresado(nuevosDatos);
    } catch (error) {
      console.log(error.message);
    }

    // Mostrar mensaje de éxito
    alert("Los datos se han actualizado correctamente.");
  };

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

      <div className="contenedorEditarEgresado">
        <div className="container">
          <h2 className="text-center mt-4 text-azul fs-3">Editar datos del egresado {noControl}</h2>
          <form className="mt-5" onSubmit={editarEgresado}>

            <div className="row">

              <div className="col-md-4 mb-3">
                <label htmlFor="nombres" className="form-label">
                  Nombre(s)
                </label>
                <input
                  id="nombres"
                  type="text"
                  className="form-control"
                  name="nombres"
                  value={nuevosDatos.nombres}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="apellidopaterno" className="form-label">
                  Apellido paterno
                </label>
                <input
                  id="apellidopaterno"
                  type="text"
                  className="form-control"
                  name="apellidopaterno"
                  value={nuevosDatos.apellidopaterno}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="apellidomaterno" className="form-label">
                  Apellido materno
                </label>
                <input
                  id="apellidomaterno"
                  type="text"
                  className="form-control"
                  name="apellidomaterno"
                  value={nuevosDatos.apellidomaterno}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">

              <div className="col-md-4 mb-3">
                <label htmlFor="fechanacimiento" className="form-label">
                  Fecha de nacimiento
                </label>
                <input
                  id="fechanacimiento"
                  type="date"
                  className="form-control"
                  name="fechanacimiento"
                  value={
                    nuevosDatos.fechanacimiento
                      ? new Date(nuevosDatos.fechanacimiento)
                        .toISOString()
                        .split("T")[0]
                      : ""
                  }
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="sexo" className="form-label">
                  Sexo
                </label>

                <div className="row">

                  <div className="form-check col-md-3 mb-3">
                    <input
                      type="radio"
                      name="sexo"
                      value="Hombre"
                      checked={nuevosDatos.sexo === "Hombre"}
                      onChange={handleInputChange}
                    />
                    <label>
                      Hombre
                    </label>
                  </div>

                  <div className="form-check col-md-3 mb-3">
                    <label>
                      <input
                        type="radio"
                        name="sexo"
                        value="Mujer"
                        checked={nuevosDatos.sexo === "Mujer"}
                        onChange={handleInputChange}
                      />
                      Mujer
                    </label>
                  </div>

                </div>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="estadocivil" className="form-label">
                  Estado civil
                </label>

                <div className="row">
                  <div className="form-check col-md-4 mb-3">
                    <label>
                      <input
                        type="radio"
                        name="estadocivil"
                        value="Casado"
                        checked={nuevosDatos.estadocivil === "Casado"}
                        onChange={handleInputChange}
                      />
                      Casado
                    </label>
                  </div>
                  <div className="form-check col-md-4 mb-3">
                    <label>
                      <input
                        type="radio"
                        name="estadocivil"
                        value="Soltero"
                        checked={nuevosDatos.estadocivil === "Soltero"}
                        onChange={handleInputChange}
                      />
                      Soltero
                    </label>

                  </div>
                  <div className="form-check col-md-4 mb-3">
                    <label>
                      <input
                        type="radio"
                        name="estadocivil"
                        value="Otro"
                        checked={nuevosDatos.estadocivil === "Otro"}
                        onChange={handleInputChange}
                      />
                      Otro
                    </label>

                  </div>
                </div>
              </div>
            </div>

            <div className="row">

              <div className="form-check col-md-3 mb-3">

                <label htmlFor="domicilio" className="form-label">
                  Domicilio
                </label>
                <input
                  id="domicilio"
                  type="text"
                  className="form-control"
                  name="domicilio"
                  value={nuevosDatos.domicilio}
                  onChange={handleInputChange}
                />

              </div>
              <div className="form-check col-md-3 mb-3">
                <label htmlFor="cp" className="form-label">
                  Codigo postal
                </label>
                <input
                  id="cp"
                  type="text"
                  className="form-control"
                  name="cp"
                  value={nuevosDatos.cp}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-check col-md-3 mb-3">
                <label htmlFor="municipio" className="form-label">
                  Municipio
                </label>
                <input
                  id="municipio"
                  type="text"
                  className="form-control"
                  name="municipio"
                  value={nuevosDatos.municipio}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-check col-md-3 mb-3">
                <label htmlFor="estado" className="form-label">
                  Estado
                </label>
                <input
                  id="estado"
                  type="text"
                  className="form-control"
                  name="estado"
                  value={nuevosDatos.estado}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-check col-md-4 mb-3">
                <label htmlFor="telefono" className="form-label">
                  Telefono
                </label>
                <input
                  id="telefeono"
                  type="text"
                  className="form-control"
                  name="telefono"
                  value={nuevosDatos.telefono}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-check col-md-4 mb-3">
                <label htmlFor="fechaegreso" className="form-label">
                  Fecha de egreso
                </label>
                <input
                  id="fechaegreso"
                  type="date"
                  className="form-control"
                  name="fechaegreso"
                  value={
                    nuevosDatos.fechaegreso
                      ? new Date(nuevosDatos.fechaegreso)
                        .toISOString()
                        .split("T")[0]
                      : ""
                  }
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="titulado" className="form-label">
                  ¿Titulado?
                </label>

                <div className="row">
                  <div className="form-check col-md-3 mb-3">
                    <label>
                      <input
                        type="radio"
                        name="titulado"
                        value="Si"
                        checked={nuevosDatos.titulado === "Si"}
                        onChange={handleInputChange}
                      />
                      Si
                    </label>
                  </div>

                  <div className="form-check col-md-3 mb-3">
                    <label>
                      <input
                        type="radio"
                        name="titulado"
                        value="No"
                        checked={nuevosDatos.titulado === "No"}
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label htmlFor="carrera" className="form-label">
                  Carrera
                </label>
                <input
                  id="carrera"
                  type="text"
                  className="form-control"
                  name="carrera"
                  value={nuevosDatos.carrera}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="especialidad" className="form-label">
                  Especialidad
                </label>
                <input
                  id="especialidad"
                  type="text"
                  className="form-control"
                  name="especialidad"
                  value={nuevosDatos.especialidad}
                  onChange={handleInputChange}
                />
              </div>

            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-warning" data-dismiss="modal">
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>


    </Fragment>
  );
};

export default EditarEgresado;

import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const EditarEgresado = () => {
  const { noControl } = useParams();
  const [egresado, setEgresado] = useState(null);
  const [nuevosDatos, setNuevosDatos] = useState({
    nombres: "",
    apellidopaterno: "",
    apellidomaterno: "",
    fechanacimiento: "",
    sexo: "",
    estadocivil: "",
    ciudad: "",
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
          `http://localhost:5000/consultar-egresados/${noControl}`
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

      await fetch(`http://localhost:5000/editar-egresado/${noControl}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...nuevosDatos,
          fechanacimiento: fechaNacimientoFormateada,
          fechaegreso: fechaEgresoFormateada,
        }),
      });

      setEgresado(nuevosDatos);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!egresado) {
    return <div>Cargando...</div>;
  }

  return (
    <Fragment>
      <h2>Editar datos del egresado {noControl}</h2>
      <form className="mt-5" onSubmit={editarEgresado}>
        <div className="mb-3">
          <label htmlFor="nombres" className="form-label">
            Nombres
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

        <div className="mb-3">
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

        <div className="mb-3">
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

        <div className="mb-3">
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

        <div className="mb-3">
          <label htmlFor="sexo" className="form-label">
            Sexo
          </label>
          <div>
            <label>
              <input
                type="radio"
                name="sexo"
                value="Hombre"
                checked={nuevosDatos.sexo === "Hombre"}
                onChange={handleInputChange}
              />
              Hombre
            </label>
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

        <div className="mb-3">
          <label htmlFor="estadocivil" className="form-label">
            Estado civil
          </label>
          <div>
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
            <label>
              <input
                type="radio"
                name="estadocivil"
                value="Otro"
                checked={nuevosDatos.sexo === "Otro"}
                onChange={handleInputChange}
              />
              Otro
            </label>
          </div>
        </div>


        <div className="mb-3">
          <label htmlFor="ciudad" className="form-label">
            Ciudad
          </label>
          <input
            id="ciudad"
            type="text"
            className="form-control"
            name="ciudad"
            value={nuevosDatos.ciudad}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
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

        <div className="mb-3">
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

        <div className="mb-3">
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

        <div className="mb-3">
          <label htmlFor="titulado" className="form-label">
            ¿Titulado?
          </label>
          <div>
            <label>
              <input
                type="radio"
                name="titulado"
                value="Si"
                checked={nuevosDatos.sexo === "Si"}
                onChange={handleInputChange}
              />
              Si
            </label>
            <label>
              <input
                type="radio"
                name="titulado"
                value="No"
                checked={nuevosDatos.sexo === "No"}
                onChange={handleInputChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="mb-3">
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
      
        <div className="mb-3">
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


        <div className="mb-3">
          <label htmlFor="especialidad" className="form-label">
            Carrera
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

        <div className="mb-3">
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

        <button type="submit" className="btn btn-warning" data-dismiss="modal">
          Editar
        </button>
      </form>
    </Fragment>
  );
};

export default EditarEgresado;

import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
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

        setNuevosDatos({jsonData});

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
      await fetch(`http://localhost:5000/editar-egresado/${noControl}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
         body: JSON.stringify({nuevosDatos}),
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
            value={nuevosDatos.nombres}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="apellidopaterno" className="form-label">
            Apellido Paterno
          </label>
          <input
            id="apellidopaterno"
            type="text"
            className="form-control"
            value={egresado.apellidopaterno}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="apellidomaterno" className="form-label">
            Apellido Materno
          </label>
          <input
            id="apellidomaterno"
            type="text"
            className="form-control"
            value={egresado.apellidomaterno}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
  <label htmlFor="fechanacimiento" className="form-label">
    Fecha de Nacimiento
  </label>
  <input
    type="text"
    id="fechanacimiento"
    className="form-control"
    value={nuevosDatos.fechanacimiento}
    onChange={(e) => handleInputChange(e)}
  />
</div>

        <div className="mb-3">
          <label className="form-label">Sexo</label>
          <div>
            <label>
              <input
                type="radio"
                name="sexo"
                value="Mujer"
                onChange={handleInputChange}
              />
              Mujer
            </label>
            <label>
              <input
                type="radio"
                name="sexo"
                value="Hombre"
                onChange={handleInputChange}
              />
              Hombre
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Estado civil</label>
          <div>
            <label>
              <input
                type="radio"
                value="Soltero"
                onChange={handleInputChange}
              />
              Soltero
            </label>
            <label>
              <input type="radio" value="Casado" onChange={handleInputChange} />
              Casado
            </label>
            <label>
              Otro
              <input type="radio" value="otro" onChange={handleInputChange} />
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="ciudad" className="form-label">
            Ciudad
          </label>
          <input
            id="ciudad"
            type="Text"
            className="form-control"
            value={egresado.ciudad}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="municipio" className="form-label">
            Municipio
          </label>
          <input
            id="municipio"
            type="Text"
            className="form-control"
            value={egresado.municipio}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="estado" className="form-label">
            Estado
          </label>
          <input
            id="estado"
            type="Text"
            className="form-control"
            value={egresado.estado}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="domicilio" className="form-label">
            Domicilio
          </label>
          <input
            id="domicilio"
            type="Text"
            className="form-control"
            value={egresado.domicilio}
            onChange={handleInputChange}
          />
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Telefono
            </label>
            <input
              id="telefono"
              type="Text"
              className="form-control"
              value={egresado.telefono}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="titulado" className="form-label">
              Titulado:
            </label>
            <div>
              <input type="radio" value="Si" onChange={handleInputChange} />
              Sí
              <label>
                <input type="radio" value="No" onChange={handleInputChange} />
                No
              </label>
            </div>
          </div>

          <div className="mb-3">
  <label htmlFor="fechaegreso" className="form-label">
    Fecha de Egreso
  </label>
  <input
    type="text"  // Cambiado de "date" a "text"
    id="fechaegreso"
    className="form-control"
    value={nuevosDatos.fechaegreso}
    onChange={(e) => handleInputChange(e)}
  />
</div>
          <div className="mb-3">
            <label htmlFor="carrera" className="form-label">
              Carrera
            </label>
            <input
              id="carrera"
              type="Text"
              className="form-control"
              value={egresado.carrera}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="municipio" className="form-label">
              Especialidad
            </label>
            <input
              id="especialidad"
              type="Text"
              className="form-control"
              value={egresado.especialidad}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Editar</button>
        </div>
      </form>
    </Fragment>
  );
};

export default EditarEgresado;

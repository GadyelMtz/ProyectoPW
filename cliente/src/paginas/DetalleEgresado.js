import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleEgresado = () => {
  const { noControl } = useParams();
  const [egresado, setEgresado] = useState(null);

  useEffect(() => {
    // Aquí realiza la lógica para obtener detalles del egresado usando el noControl
    // Puedes hacer una nueva solicitud a tu servidor para obtener la información del egresado

    // Ejemplo:
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/login/menu-administrador/consultar-egresados/${noControl}`
        );
        const jsonData = await response.json();
        setEgresado(jsonData);

        // Muestra el egresado en la consola como cadena de texto JSON
        console.log("Egresado:", JSON.stringify(jsonData, null, 2));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [noControl]);

  if (!egresado) {
    return <div>Cargando...</div>;
  }

  return (
    <Fragment>
      {" "}
      <div>
        <h2>Detalles del egresado {noControl}</h2>
        <label htmlFor="campo1">Nombres:</label>
        <p id="campo1">{egresado.nombres}</p>
        <label htmlFor="campo2">Apellido paterno:</label>
        <p id="campo2">{egresado.apellidopaterno}</p>
        <label htmlFor="campo3">Apellido materno:</label>
        <p id="campo3">{egresado.apellidomaterno}</p>
        <label htmlFor="campo4">Fecha de nacimiento:</label>
        <p id="campo4">{egresado.fechanacimiento}</p>
        <label htmlFor="campo5">Sexo:</label>
        <p id="campo5">{egresado.sexo}</p>
        <label htmlFor="campo6">Estado civil:</label>
        <p id="campo6">{egresado.estadocivil}</p>
        <label htmlFor="campo7">Ciudad:</label>
        <p id="campo7">{egresado.ciudad}</p>
        <label htmlFor="campo8">Municipio:</label>
        <p id="campo8">{egresado.municipio}</p>
        <label htmlFor="campo9">Estado:</label>
        <p id="campo9">{egresado.estado}</p>
        <label htmlFor="campo10">Domicilio:</label>
        <p id="campo9">{egresado.domicilio}</p>
        <label htmlFor="campo11">Telefono:</label>
        <p id="campo10">{egresado.telefono}</p>
        <label htmlFor="campo12">¿Titulado?:</label>
        <p id="campo11">{egresado.titulado}</p>
        <label htmlFor="campo13">Fecha de egreso:</label>
        <p id="campo12">{egresado.fechaegreso}</p>
        <label htmlFor="campo14">Carrera:</label>
        <p id="campo13">{egresado.carrera}</p>
        <label htmlFor="campo15">Especialidad:</label>
        <p id="campo14">{egresado.especialidad}</p>
      </div>
    </Fragment>
  );
};

export default DetalleEgresado;

import React, { Fragment, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const EditarEgresado = ({ match }) => {
    const { nocontrol } = match.params;
  
    const [egresado, setEgresado] = useState({
      nocontrol: "",
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
      const obtenerDatosEgresado = async () => {
        try {
          const response = await fetch(`http://localhost:5000/consultar-egresados/${nocontrol}`);
          const jsonData = await response.json();
          setEgresado(jsonData);
        } catch (error) {
          console.error("Error al obtener datos del egresado:", error);
        }
      };
  
      obtenerDatosEgresado();
    }, [nocontrol]);
  
    const {
      nombres,
      apellidopaterno,
      apellidomaterno,
      fechanacimiento,
      sexo,
      estadocivil,
      ciudad,
      municipio,
      estado,
      telefono,
      titulado,
      fechaegreso,
      carrera,
      especialidad,
      domicilio,
    } = egresado;
  
    const actualizarEgresado = async (e) => {
      e.preventDefault();
      try {
        const cuerpoDeActualizacion = {
          nocontrol,
          nombres,
          apellidopaterno,
          apellidomaterno,
          fechanacimiento,
          sexo,
          estadocivil,
          ciudad,
          municipio,
          estado,
          telefono,
          titulado,
          fechaegreso,
          carrera,
          especialidad,
          domicilio,
        };
  
        const respuesta = await fetch(`http://localhost:5000/editar-egresados/${nocontrol}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cuerpoDeActualizacion),
        });
  
        if (respuesta.ok) {
          console.log("Egresado actualizado correctamente");
          window.location = "/";
        } else {
          console.error("Hubo un error al actualizar el egresado");
        }
      } catch (error) {
        console.error("Error al actualizar el egresado:", error);
      }
    };
  
    return (
      <Fragment>
        <h1 className="text-center mt-5">Editar Egresado</h1>
        <form className="mt-5" onSubmit={actualizarEgresado}>
          <div className="mb-3">
            <label htmlFor="nocontrol" className="form-label">
              Número de Control
            </label>
            <input
              id="nocontrol"
              type="text"
              className="form-control"
              value={nocontrol}
              onChange={(e) => setEgresado({ ...egresado, nocontrol: e.target.value })}
              readOnly
            />
          </div>
          <button className="btn btn-success">Actualizar</button>
        </form>
      </Fragment>
    );
  };
  
  export default EditarEgresado;
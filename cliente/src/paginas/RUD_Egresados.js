import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/RUD_egresado.css'

const RUD_Egresados = () => {
  const [egresados, setEgresados] = useState([]);

  const getEgresados = async () => {
    try {
      const respuesta = await fetch("http://localhost:5000/consultar-egresados");
      const jsonData = await respuesta.json();
      setEgresados(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const eliminarEgresado = async (nocontrol) => {
    try {
      const confirmacion = window.confirm("¿Estás seguro de eliminar este egresado?");
      if (!confirmacion) {
        return; // Cancelar la eliminación si el usuario elige cancelar
      }

      await fetch(`http://localhost:5000/eliminar-egresado/${nocontrol}`, {
        method: "DELETE",
      });

      // Actualizar la lista de egresados después de la eliminación
      getEgresados();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getEgresados();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Numero de control</th>
            <th>Consultar</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {egresados.map((egresado) => (
            <tr key={egresado.id}>
              <td>{egresado.nocontrol}</td>
              <td>
                <Link
                  to={{
                    pathname: `/consultar-egresados/${egresado.nocontrol}`,
                    state: { egresado },
                  }}
                >
                  <button type="button" className="btn btn-info">
                    Consultar
                  </button>
                </Link>
              </td>
              <td>
                <Link
                  to={{
                    pathname: `/editar-egresado/${egresado.nocontrol}`,
                    state: { egresado },
                  }}
                >
                  <button type="button" className="btn btn-warning">
                    Editar
                  </button>
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarEgresado(egresado.nocontrol)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default RUD_Egresados;

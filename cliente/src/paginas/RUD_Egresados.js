import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RUD_Egresados = () => {
  const [egresados, setEgresados] = useState([]);

  const getEgresados = async () => {
    try {
      const respuesta = await fetch(
        "http://localhost:5000/consultar-egresados"
      );
      const jsonData = await respuesta.json();
      setEgresados(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getEgresados();
  }, []);

  return (
    <Fragment>
      {" "}
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
                    pathname: `/editar-egresados/${egresado.nocontrol}`,
                    state: { egresado },
                  }}
                >
                <button type="button" className="btn btn-warning">
                  Editar
                </button>
                </Link>
              </td>
              <td>
                <button type="button" className="btn btn-danger">
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

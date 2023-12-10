import React, { Fragment, useEffect, useState } from "react";

const RUD_Egresados = () => {
  const [egresados, setEgresados] = useState([]);

  const getEgresados = async() =>{
  try{
    const respuesta = await fetch("http://localhost:5000/consultar-egresados");
    const jsonData = await respuesta.json();
    setEgresados(jsonData);
  }
  catch(error){
    console.log(error.message);
  }
  };

  useEffect(() => {
    getEgresados();
  }, []);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>noControl</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {}
          {egresados.map((egresado) => (
            <tr key={egresado.id}>
              <td>{egresado.nocontrol}</td>
              <td>
                
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  //onClick={() => deletepais(paises.idpais)}
                >
                  Eliminar
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );


};







export default RUD_Egresados;

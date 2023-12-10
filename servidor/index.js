const express = require("express");
const app = express(); // API principal

const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());

app.post("/registrar-egresados", async (req, res) => {
  try {
    const {
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
    } = req.body;

    const nuevoEgresado = await pool.query(
        'INSERT INTO egresado (nocontrol, nombres, apellidoPaterno, apellidomaterno, fechanacimiento, sexo, estadocivil, ciudad, municipio, estado, telefono, titulado, fechaegreso, carrera, especialidad, domicilio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)',
        [nocontrol, nombres, apellidopaterno, apellidomaterno, fechanacimiento, sexo, estadocivil, ciudad, municipio, estado, telefono, titulado, fechaegreso, carrera, especialidad, domicilio]
      );
    res.json(nuevoEgresado[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/consultar-egresados",async(req, res)=>{
  try{
      const getpais = await pool.query("select * from egresado");
      res.json(getpais.rows)
  }catch(error){
      console.log(error.message);
  }
});

app.listen(5000, () => {
    console.log("Server iniciado en el puerto 5000");
  });

module.exports = pool;

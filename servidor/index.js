const express = require("express");
const app = express(); // API principal
const { format } = require('date-fns'); 

const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());



app.post('/registrar-egresados', async (req, res) => {
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

    // Formatear la fecha utilizando date-fns
    const fechaFormateadaEgreso = format(new Date(fechaegreso), 'yyyy-MM-dd');
    const fechaFormateadaNacimiento = format(new Date(fechanacimiento), 'yyyy-MM-dd');

    const nuevoEgresado = await pool.query(
      'INSERT INTO egresado (nocontrol, nombres, apellidoPaterno, apellidomaterno, fechanacimiento, sexo, estadocivil, ciudad, municipio, estado, telefono, titulado, fechaegreso, carrera, especialidad, domicilio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)',
      [
        nocontrol,
        nombres,
        apellidopaterno,
        apellidomaterno,
        fechaFormateadaNacimiento,
        sexo,
        estadocivil,
        ciudad,
        municipio,
        estado,
        telefono,
        titulado,
        fechaFormateadaEgreso, // Usa la fecha formateada aquí
        carrera,
        especialidad,
        domicilio,
      ]
    );
    res.json(nuevoEgresado[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/consultar-egresados", async (req, res) => {
  try {
    const getpais = await pool.query("select * from egresado");
    res.json(getpais.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/consultar-egresados/:nocontrol", async (req, res) => {
  try {
    const { nocontrol } = req.params; //URI
    console.log("Número de control recibido:", nocontrol);

    const egresado = await pool.query("select * from egresado where nocontrol = $1", [
      nocontrol,
    ]);

    if (egresado.rows.length === 0) {
      console.log("No se encontró ningún egresado con el número de control especificado.");
      res.status(404).json({ error: "Egresado no encontrado" });
    } else {
      console.log("Datos del egresado encontrado:", egresado.rows[0]);
      res.json(egresado.rows[0]);
    }
  } catch (error) {
    console.error("Error al consultar datos del egresado:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.put("/editar-egresado/:nocontrol", async (req, res) => {
  try {
    const { nocontrol } = req.params;
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
    } = req.body;

    const updateEgresado = await pool.query(
      "UPDATE egresado SET nombres = $1, apellidopaterno = $2, apellidomaterno = $3, fechanacimiento = TO_DATE($4, 'YYYY-MM-DD'), sexo = $5, estadocivil = $6, ciudad = $7, municipio = $8, estado = $9, telefono = $10, titulado = $11, fechaegreso = TO_DATE($12, 'YYYY-MM-DD'), carrera = $13, especialidad = $14, domicilio = $15 WHERE nocontrol = $16",
      [
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
        nocontrol, // Ajuste aquí: es el $16
      ]
    );    
    res.json("Se ha realizado la actualización");
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Error en el servidor");
  }
});

app.delete("/eliminar-egresado/:id", async(req, res)=>{
  try{
      const {id} = req.params;
      const deleteEgresado = await pool.query("delete from egresado where nocontrol =$1", [id]);
      res.json("El egresado ha sido eliminado");
  } catch (error){
      console.log(error.message);
  }

});

app.listen(5000, () => {
  console.log("Server iniciado en el puerto 5000");
});

module.exports = pool;

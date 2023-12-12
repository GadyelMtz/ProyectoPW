const express = require("express");
const app = express(); // API principal
const { format } = require('date-fns'); 

const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());




app.post('/login/menu-administrador/registrar-egresados', async (req, res) => {
  const client = await pool.connect(); // Obtén una instancia del cliente de la pool

  try {
    await client.query("BEGIN"); // Inicia la transacción

    const {
      nocontrol,
      nombres,
      apellidopaterno,
      apellidomaterno,
      fechanacimiento,
      sexo,
      estadocivil,
      cp,
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

    // Inserta en la tabla egresado
    const nuevoEgresado = await client.query(
      'INSERT INTO egresado (nocontrol, nombres, apellidoPaterno, apellidomaterno, fechanacimiento, sexo, estadocivil, cp, municipio, estado, telefono, titulado, fechaegreso, carrera, especialidad, domicilio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING nocontrol',
      [
        nocontrol,
        nombres,
        apellidopaterno,
        apellidomaterno,
        fechaFormateadaNacimiento,
        sexo,
        estadocivil,
        cp,
        municipio,
        estado,
        telefono,
        titulado,
        fechaFormateadaEgreso,
        carrera,
        especialidad,
        domicilio,
      ]
    );

    // Generar un NIP aleatorio
    const nipAleatorio = Math.floor(100000 + Math.random() * 900000);

    // Insertar en la tabla usuario
    await client.query(
      'INSERT INTO usuario (nip, privilegio, nocontrol_egresado) VALUES ($1, $2, $3)',
      [nipAleatorio, 'Egresado', nuevoEgresado.rows[0].nocontrol]
    );

    await client.query("COMMIT"); // Confirma la transacción
    res.json({ mensaje: "Egresado registrado correctamente", nip: nipAleatorio });
  } catch (error) {
    await client.query("ROLLBACK"); // Deshace la transacción en caso de error
    console.log(error.message);
    res.status(500).json("Error en el servidor");
  } finally {
    client.release(); // Libera el cliente de la pool
  }
});


app.get("/login/menu-administrador/consultar-egresados", async (req, res) => {
  try {
    const getegresado = await pool.query("select * from egresado");
    res.json(getegresado.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/login/menu-administrador/consultar-egresados/:nocontrol", async (req, res) => {
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

app.put("/login/menu-administrador/editar-egresado/:nocontrol", async (req, res) => {
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

app.delete("/login/menu-administrador/eliminar-egresado/:id", async (req, res) => {
  const client = await pool.connect(); // Obtén una instancia del cliente de la pool

  try {
    await client.query("BEGIN"); // Inicia la transacción

    const { id } = req.params;

    // Busca el idusuario relacionado con el nocontrol del egresado que deseas eliminar
    const usuarioResult = await client.query("SELECT idusuario FROM usuario WHERE nocontrol_egresado = $1", [id]);
    const tu_idusuario = usuarioResult.rows[0] ? usuarioResult.rows[0].idusuario : null;

    // Elimina la encuesta solo si existe
    if (tu_idusuario) {
      await client.query("DELETE FROM encuesta WHERE nocontrol = $1", [id]);
    }

    // Elimina el registro de usuario
    await client.query("DELETE FROM usuario WHERE idusuario = $1", [tu_idusuario]);

    // Elimina el registro de egresado
    await client.query("DELETE FROM egresado WHERE nocontrol = $1", [id]);

    await client.query("COMMIT"); // Confirma la transacción
    res.json("El egresado ha sido eliminado");
  } catch (error) {
    await client.query("ROLLBACK"); // Deshace la transacción en caso de error
    console.log(error.message);
    res.status(500).json("Error en el servidor");
  } finally {
    client.release(); // Libera el cliente de la pool
  }
});




// Iniciar sesion como administrador
app.get("/login/-:nip", async (req, res) => {
  try {
    const { nip } = req.params;
    const administrador = await pool.query("SELECT idusuario FROM usuario WHERE nip = $1 AND privilegio = 'Administrador'", [nip]);

    if (administrador.rows.length === 0) {
      console.log("No se encontró ningún administrador con el nip especificado.");
      res.status(404).json({ error: "Administrador no encontrado" });
    } else {
      // Incluye el campo 'privilegio' en la respuesta JSON
      res.json({ authenticated: true, privilegio: "Administrador" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error en el servidor");
  }
});

app.get("/login/:nocontrol-:nip", async (req, res) => {
  try {
    const { nocontrol, nip} = req.params;
    const egresado = await pool.query("SELECT idusuario FROM usuario WHERE nocontrol_egresado = $1 AND nip = $2", [nocontrol, nip]);

    if (egresado.rows.length === 0) {
      console.log("No se encontró ningún usuario con las credenciales especificadas.");
      res.status(404).json({ error: "Usuario no encontrado" });
    } else {
      // Incluye el campo 'privilegio' en la respuesta JSON
      res.json({ authenticated: true, privilegio: "Egresado" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error en el servidor");
  }
});



app.listen(5000, () => {
  console.log("Server iniciado en el puerto 5000");
});

module.exports = pool;

const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "santos01",
    host: "localhost",
    port: 5432,
    database: "Seguimiento_egresados"
});
module.exports=pool;
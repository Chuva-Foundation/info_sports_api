const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password:"Password1234",
  host:"localhost",
  port: 5432,
  database: "infosports_db"
});

module.exports = pool;
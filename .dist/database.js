const database = require("pg");

const database = new database({
  user: "postgres",
  password: "Password1234",
  host: "localhost",
  port: 5432,
  database: "info_sports_db"
});


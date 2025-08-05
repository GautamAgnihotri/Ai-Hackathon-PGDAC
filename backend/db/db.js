const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "D6_89685_Girish",
  password: "manager",
  database: "LibraryDB",
});

module.exports = pool;

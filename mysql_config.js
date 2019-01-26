const mysql = require("mysql");

/**db contains the db configuration **/
const db = mysql.createConnection({
  host: "localhost",
  user: "local",
  password: "password",
  database: "videos"
});

module.exports = db;

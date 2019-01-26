const server = require("./server/server");
const config = require("./config/config");
const Database = require("./db-utils/DatabaseService");

/**Application Bootstrap **/

/**Establishing connection with DB **/

console.log("Initializing Video API Service...");
console.log("Establishing connection to Database");

process.on("uncaughtException", err => {
  console.error("Unhandled Exception", err);
});

process.on("unhandledRejection", err => {
  console.error("Unhandled Rejection", err);
});

Database.openConnection(config.mysqlConfig).then(db => {
  console.log("Connected to MySql Database successfully");
  const dbInfo = {
    host: db.connection.config.host,
    port: db.connection.config.port,
    database_name: db.connection.config.database,
    db_user: db.connection.config.user
  };
  console.table(dbInfo);
});

server
  .start({
    port: config.port,
    db_config: config.mysqlConfig
  })
  .then(app => {
    console.log(`App started successfully on port ${config.port}`);
    app.on("close", () => {
      console.log("Server has shut down.");
    });
  });

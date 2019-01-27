const mysql = require("mysql");
const customQueries = require("./db_data_initializer");

class DatabaseService {
  constructor(connection) {
    this.connection = connection;
  }

  bootstrapSampleData() {
    return new Promise((resolve, reject) => {
      this.connection.query(customQueries.deleteTableOnStart);
      this.connection.query(customQueries.createSchema);
      this.connection.query(
        customQueries.insertRowsQuery,
        [customQueries.initialDump],
        (err, results) => {
          if (err)
            return reject(
              new Error(
                `An error has occurred while initializing sample data on the database: \n ${err}`
              )
            );
          resolve(results);
        }
      );
    });
  }
}

const openConnection = config => {
  return new Promise((resolve, reject) => {
    if (!config.host) throw new Error("A host must be specified.");
    if (!config.user) throw new Error("A user must be specified.");
    if (!config.password) throw new Error("A password must be specified.");
    if (!config.port) throw new Error("A port must be specified.");
    resolve(new DatabaseService(mysql.createConnection(config)));
  });
};

module.exports = {
  openConnection: openConnection
};

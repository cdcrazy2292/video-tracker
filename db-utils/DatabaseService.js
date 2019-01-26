const mysql = require("mysql");

class DatabaseService {
  constructor(connection) {
    this.connection = connection;
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

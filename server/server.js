const express = require("express");
const morgan = require("morgan");

/**Function that creates an express server **/

module.exports.start = options => {
  return new Promise((resolve, reject) => {
    // Handling Errors
    if (!options.db_connection)
      throw new Error(`Server can't connect to DB. Check Database connection.`);
    if (!options.port)
      throw new Error(
        `Server can't start without PORT. Please check that a Port is available.`
      );

    const app = express();
    app.use(morgan("dev"));
    options.db_connection.bootstrapSampleData().then(results => {
      console.log(`Initial data has been bootstrapped:`);
      console.log(results.message);
    });
    const server = app.listen(options.port, () => {
      resolve(server);
    });
  });
};

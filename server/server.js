const express = require("express");
const morgan = require("morgan");

/**Funtion that creates an express server **/

module.exports.start = options => {
  return new Promise((resolve, reject) => {
    // Handling Errors
    if (!options.db_config)
      throw new Error(`Server can't connect to DB. Check Database connection.`);
    if (!options.port)
      throw new Error(
        `Server can't start without PORT. Please check that a Port is available.`
      );

    const app = express();
    app.use(morgan("dev"));

    const server = app.listen(options.port, () => {
      resolve(server);
    });
  });
};

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { videoRouter, reuseDBConnection } = require("../api/videoRouter");

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
    /**Middlewares**/
    app.use(morgan("dev"));
    app.use(bodyParser.json());

    options.db_connection.bootstrapSampleData().then(results => {
      console.log(`Initial data has been bootstrapped:`);
      console.log(results.message);
    });

    /******************************
     * Using Router for API Calls *
     ******************************/

    app.get("/", (req, res) => {
      res.send("Video Service API");
    });
    reuseDBConnection(options.db_connection);
    app.use("/api", videoRouter);

    /**Starting the server**/
    const server = app.listen(options.port, () => {
      resolve(server);
    });
  });
};

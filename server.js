const express = require("express");
const morgan = require("morgan");
const db = require("./mysql_config");
const customQueries = require("./db_data_initializer");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(morgan("dev"));

const runBootstrapQueries = () => {
  console.log(`Running SQL Queries to Bootstrap DB...`);
  db.query(customQueries.deleteTableOnStart);
  db.query(customQueries.createSchema);
  db.query(
    customQueries.insertRowsQuery,
    [customQueries.initialDump],
    (err, result) => {
      if (err) throw err;
      console.log("Affected Rows", result.affectedRows);
      console.log(result.message);
      console.log(result);
    }
  );
};

app.get("/", (req, res) => {
  res.send("API Engine has started.");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
  console.log(`Connecting to Database...`);
  db.connect();
  /**Initializing some data so that API calls can show some information right off the bat**/
  runBootstrapQueries();
  db.end();
});

module.exports = app;

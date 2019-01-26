const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API Engine has started.");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

module.exports = app;

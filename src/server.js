const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use("/api", routes);

app.use(function (err, _req, res, _next) {
  errorHandler.handleError(err, res);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

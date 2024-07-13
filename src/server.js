const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const PORT = 4000;
const app = express();

app.use(express.json());

const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use("/api", routes);

app.use(function (err, _req, res, _next) {
  errorHandler.handleError(err, res);
});

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});

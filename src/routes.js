const express = require("express");

const toolsController = require("./controllers/tools.controller");

const router = express.Router();

router.use("/tools", toolsController);

module.exports = router;

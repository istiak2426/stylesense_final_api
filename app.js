require('express-async-errors');
const express = require('express');

const app = express();


require("./middlewares/index")(app)
require("./middlewares/routes")(app)



module.exports = app;
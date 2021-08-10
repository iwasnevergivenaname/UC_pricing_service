const express = require("express")
require("dotenv").config()
const estimationRoutes = require("./routes/estimate")
const app = express()


app.use("/estimate", estimationRoutes)

module.exports = app
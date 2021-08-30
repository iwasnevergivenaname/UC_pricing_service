require("dotenv").config()
const express = require("express")

const estimationRoutes = require("./routes/estimate")

const app = express()

app.use(express.json())
app.use("/estimation", estimationRoutes)

module.exports = app
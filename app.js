require("dotenv").config()
const express = require("express")
const cors = require("cors")

const estimationRoutes = require("./routes/estimate")

const app = express()

app.use(express.json())
app.use("/estimate", estimationRoutes)

module.exports = app
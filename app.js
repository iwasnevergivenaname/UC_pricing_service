const express = require('express')
const app = express()

app.post("/", (req, res) => {
  const body = req.body

})

app.get("/", (req, res) => {
  res.send("health check")
  }
)

module.exports = app
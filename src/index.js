const path = require("path")
require("dotenv").config({path: path.join(__dirname, "../", ".env")})

const app = require("./app")

app.listen(process.env.PORT, () => {
  console.log(`${process.env.APP_NAME} running on ${process.env.PORT}`)
})
const express = require("express")
const {BadRequestError} = require("../expressError")
const router = new express.Router()

router.post("/", (req, res) => {
  const body = req.body
  if (!body) {
    throw new BadRequestError("pickup and dropoff locations needed")
  }

})

router.get("/", (req, res) => {
    res.sendStatus(200).message("health check")
  }
)

module.exports = router
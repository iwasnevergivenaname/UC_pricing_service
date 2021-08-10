const express = require("express")
const {BadRequestError} = require("../expressError")
const getOilPrice = require("../helpers/oilPrice")
const router = new express.Router()

router.post("/", async (req, res) => {
  const body = req.body
  if (!body) {
    throw new BadRequestError("pickup and dropoff locations needed")
  }
  const curPrice = await getOilPrice()
  return res.json({curPrice})
})

router.get("/", (req, res) => {
    return res.sendStatus(200)
  }
)

module.exports = router
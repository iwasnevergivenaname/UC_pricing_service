const express = require("express")
const {BadRequestError} = require("../expressError")
const getOilPrice = require("../helpers/oilPrice")
const router = new express.Router()

const date = new Date()
const hour = date.getHours()

router.post("/", async (req, res) => {
  const body = req.body
  if (!body) {
    throw new BadRequestError("pickup and dropoff locations needed")
  }
  const curPrice = await getOilPrice()
  const p = curPrice.price

  if (hour === 7 || hour === 17) {
    curPrice.price = p * 2
  }
  return res.json({curPrice})
})

router.get("/", (req, res) => {
    return res.sendStatus(200)
  }
)

module.exports = router
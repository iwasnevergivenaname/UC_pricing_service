const express = require("express")
const getOilPrice = require("../external/oil.price")
const router = new express.Router()

const date = new Date()
const hour = date.getHours()

router.get("/health", (req, res) => {
  return res.sendStatus(200)
})

router.post("/", async (req, res) => {
  const body = req.body
  if (!body) {
    res.sendStatus(400)
  }
  const curPrice = await getOilPrice()
  const p = curPrice.price

  if (hour === 7 || hour === 17) {
    curPrice.price = p * 2
  }


  return res.json({
    estimate: curPrice.price
  })
})


module.exports = router
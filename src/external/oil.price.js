const axios = require("axios")
require('dotenv').config({ path: '../.env' })

const key = process.env.NODE_API_KEY
const oilPriceEndpoint = process.env.NODE_API_ENDPOINT

async function getOilPrice() {
  try {
    const priceRes = await axios.get(oilPriceEndpoint, {headers: {'Authorization': `Token ${key}`, 'Content-Type': 'application/json'}})
    delete priceRes.data.data.formatted
    return priceRes.data.data
  } catch (e) {
    console.log(e)
  }
}

// console.log(getOilPrice())
module.exports = getOilPrice
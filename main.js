const { fishMenu, chefsFish, mongerFishToSell } = require("./restaurant.js")
//import { fishMenu, chefsFish, mongerFishToSell } from "./restaurant.js"
const {chefConstraints} = require("./fishMonger.js")
const dailyPriceLimit = 7.00
const constraints = chefConstraints(mongerFishToSell, dailyPriceLimit)
const menu = fishMenu(chefsFish)
console.log(menu)

module.exports = { dailyPriceLimit }


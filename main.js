const { fishMenu } = require('./restaurant.js')
const { mongerInventory, chefConstraints } = require('./fishMonger.js')
const { todaysCatchData, boatInventory } = require('./fishingBoat.js')
const dailyPriceLimit = 8
const todaysCatch = boatInventory(todaysCatchData)
const mongerFishToSell = mongerInventory(todaysCatch)
const chefsFish = chefConstraints(mongerFishToSell, dailyPriceLimit)
// const constraints = chefConstraints(mongerFishToSell, dailyPriceLimit)


const menu = fishMenu(chefsFish)
console.log(menu)





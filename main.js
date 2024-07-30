const { fishMenu } = require('./restaurant.js')
const { mongerInventory, chefConstraints } = require('./fishMonger.js')
const { boatInventory } = require('./fishingBoat.js')
const dailyPriceLimit = 3.99
const todaysCatch = boatInventory()
const mongerFishToSell = mongerInventory(todaysCatch)
const chefsFish = chefConstraints(mongerFishToSell, dailyPriceLimit)
fishMenu(chefsFish)





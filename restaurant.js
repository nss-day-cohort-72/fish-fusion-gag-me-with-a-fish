const { mongerInventory, chefConstraints, mongerFishToSell } = require("./fishMonger")
const priceLimit = { dailyPriceLimit } = require("./main.js")
//Specifies max price per fish
//Pass price into fishMenu so that it can be passed along to the fishmonger function when the chef buys the fish
//If monger has fish at that price point, chef buys 50% of inventory for that fish
    //update fish monger logic to reflect this
//Chef creates 3 different meals per fish: soup, grilled dinner, sandwich

const chefsFish = chefConstraints(mongerFishToSell, priceLimit.dailyPriceLimit)

const fishMenu = (fishToCook, pricePerFish) => {
    console.log(fishToCook)
    for (const fish of fishToCook) {
        let species = fish.species
        console.log(`${species} Soup`)
        console.log(`${species} Sandwich`)
        console.log(`Grilled ${species}`)
    }
}
fishMenu(chefsFish)
module.exports = { fishMenu }
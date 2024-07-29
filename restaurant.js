const { mongerInventory, chefConstraints, todaysCatch } = require("./fishMonger.js")
const { dailyPriceLimit } = require("./main.js")
const mongerFishToSell = mongerInventory(todaysCatch)
console.log(mongerFishToSell)
const chefsFish = chefConstraints(mongerFishToSell, dailyPriceLimit)
// console.log(document)
// let heading = document.getElementById('species')
// let soup = document.getElementById('soup')
// let sandwich = document.getElementById('sandwich')
// let grilled = document.getElementById('grilled')
const fishMenu = (fishToCook) => {
    console.log(fishToCook)
    for (const fish of fishToCook) {
        let species = fish.species
        // heading.textContent = `${species} Soup`
        console.log(`${species} Soup`)
        console.log(`${species} Sandwich`)
        console.log(`Grilled ${species}`)
    }
}
// fishMenu(chefsFish)
module.exports = { fishMenu, chefsFish, mongerFishToSell }
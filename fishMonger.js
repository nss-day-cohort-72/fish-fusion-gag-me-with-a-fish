const { boatInventory, todaysCatchData } = require("./fishingBoat")
// This module needs to import the todays catch function
// Needs a function that generates its own inventory for restaurants to purchase
// Function 10 of each <= $7.50 if the quantity is < 10 NO BUY

const todaysCatch = boatInventory(todaysCatchData)

const mongerInventory = (catchOfTheDay) => {
    const fishArray = []
    for (const fish of catchOfTheDay) {
        // let species = fish.species
        let amount = fish.amount
        let price = fish.price
        if (amount >= 10 && price <= 7.50) {
            fishArray.push(fish)
        }
    }
    return fishArray
}

const mongerFishToSell = mongerInventory(todaysCatch)

const chefConstraints = (mongerInventory, maxPrice) => {
    const fishArray = []
    for (const fish of mongerInventory) {
        let price = fish.price
        if (price < maxPrice) {
            fish.amount = Math.floor(fish.amount / 2)
            console.log(fish.amount)
            fishArray.push(fish)
        }
    }
    return fishArray
}
module.exports = { mongerInventory, chefConstraints, mongerFishToSell }


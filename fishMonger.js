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

// const mongerFishToSell = mongerInventory(todaysCatch)

const chefConstraints = (mongerInventory, maxPrice) => {
    const fishArray = []
    for (const fish of mongerInventory) {
        let price = fish.price
        if (price < maxPrice) {
            fish.amount = Math.floor(fish.amount / 2)
            fishArray.push(fish)
        }
    }
    return fishArray
}

module.exports = {mongerInventory, chefConstraints}


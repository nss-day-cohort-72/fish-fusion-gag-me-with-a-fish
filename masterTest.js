const todaysCatchData = [
    { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
    { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
    { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
    { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
    { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
    { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
    { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
    { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
]
const boatInventory = (todaysCatch) => {
    return todaysCatch
}
console.log(boatInventory(todaysCatchData))


//////////////////////////////////////////////////////////////

const todaysCatch = boatInventory(todaysCatchData)

const mongerInventory = (catchOfTheDay) => {
    console.log(catchOfTheDay)
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
            console.log(fish.amount)
            fishArray.push(fish)
        }
    }
    return fishArray
}

////////////////////////////////////////////////////////////
const dailyPriceLimit = 3.99
const mongerFishToSell = mongerInventory(todaysCatch)
const chefsFish = chefConstraints(mongerFishToSell, dailyPriceLimit)
console.log(document)
let heading = document.getElementById('species')
let soup = document.getElementById('soup')
let sandwich = document.getElementById('sandwich')
let grilled = document.getElementById('grilled')
const fishMenu = (fishToCook) => {
    console.log(fishToCook)
    for (const fish of fishToCook) {
        let species = fish.species
        heading.textContent = `${species} Soup`
        console.log(`${species} Soup`)
        console.log(`${species} Sandwich`)
        console.log(`Grilled ${species}`)
    }
}
const constraints = chefConstraints(mongerFishToSell, dailyPriceLimit)
const menu = fishMenu(chefsFish)

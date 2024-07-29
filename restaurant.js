const fishMenu = (fishToCook) => {
    let counter = 0
    console.log(`<article class="menu">`)
    for (const fish of fishToCook) {
        let species = fish.species
        counter++
        if (counter != 4) {
            console.log(`<h2>${species}</h2>`)
            console.log(`  <section class="menu__item">${species} Soup</section>`)
            console.log(`  <section class="menu__item">${species} Sandwich</section>`)
            console.log(`  <section class="menu__item">Grilled ${species}</section>\n`)
        } else {
            console.log(`<h2>${species}</h2>`)
            console.log(`  <section class="menu__item">${species} Soup</section>`)
            console.log(`  <section class="menu__item">${species} Sandwich</section>`)
            console.log(`  <section class="menu__item">Grilled ${species}</section>`)
        }

    }
}

module.exports = { fishMenu }

/* <article class="menu">
    <h2>Halibut</h2>
    <section class="menu__item">Halibut Soup</section>
    <section class="menu__item">Halibut Sandwich</section>
    <section class="menu__item">Grilled Halibut</section>

    <h2>Mackerel</h2>
    <section class="menu__item">Mackerel Soup</section>
    <section class="menu__item">Mackerel Sandwich</section>
    <section class="menu__item">Grilled Mackerel</section>

    <h2>Salmon</h2>
    <section class="menu__item">Salmon Soup</section>
    <section class="menu__item">Salmon Sandwich</section>
    <section class="menu__item">Grilled Salmon</section>
</article> */

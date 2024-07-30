const fishMenu = (fishToCook) => {
    console.log(`<article class="menu">`)
    //species
    
    const speciesHeading = fishToCook.map((fish, i) => {
        let output =  ``;
        if (i !== 0) output += `
`;
        output += `    <h2>${fish.species}</h2>
        <section class="menu__item">${fish.species} Soup</section>
        <section class="menu__item">${fish.species} Sandwich</section>
        <section class="menu__item">Grilled ${fish.species}</section>`

        return output;
    })


    const html = speciesHeading.join('')
    console.log(html)
    // for (const fish of fishToCook) {
    //     console.log(fishToCook)
    //     let species = fish.species
    //     counter++
    //     if (counter != fishToCook.length) {
    //         console.log(`  <h2>${species}</h2>`)
    //         console.log(`  <section class="menu__item">${species} Soup</section>`)
    //         console.log(`  <section class="menu__item">${species} Sandwich</section>`)
    //         console.log(`  <section class="menu__item">Grilled ${species}</section>\n`)
    //     } else {
    //         console.log(`  <h2>${species}</h2>`)
    //         console.log(`  <section class="menu__item">${species} Soup</section>`)
    //         console.log(`  <section class="menu__item">${species} Sandwich</section>`)
    //         console.log(`  <section class="menu__item">Grilled ${species}</section>`)
    //     }
    // }

    // const speciesHeading = fishToCook.map(fish => `<h2>${fish.species}</h2> 
    //     <section class="menu__item">${fish.species} Soup</section>
    //     <section class="menu__item">${fish.species} Sandwich</section>
    //     <section class="menu__item">Grilled ${fish.species}</section>
    //     `)
    console.log(`</article">`)
}
module.exports = { fishMenu }

//EXAMPLE FORMAT BELOW
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

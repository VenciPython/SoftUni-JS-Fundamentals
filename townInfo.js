function solve (townName, population, area ){
    let isValidTownName = townName.length >= 3;
    let isValidPopulation = population >= 0;
    let isValidArea = area >= 0;

    if (!isValidTownName){
        console.log(`Town name must be at least 3 characters!`)
    }
    if (!isValidPopulation){
        console.log(`Population must be a positive number!`)
    }
    
    if (!isValidArea){
        console.log(`Area must be a positive number!`)
    }

    if (isValidTownName && isValidArea && isValidPopulation){
        console.log(`Town ${townName} has population of ${population} and area ${area} square km.`)
    }
}
solve('LA',1481353,512)
console.log('----------------')
solve('Sofia',1286383,492)

function calculatePyramidResources(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let step = 1;
    let height = 0;

    while (base > 0) {
        let area = base * base;
        let innerArea = (base - 2) * (base - 2);

        if (base - 2 <= 0) {
            totalGold = area * increment;
            height += increment;
            break;
        }

        totalStone += innerArea * increment;

        if (step % 5 === 0) {
            totalLapis += (area - innerArea) * increment;
        } else {
            totalMarble += (area - innerArea) * increment;
        }

        base -= 2;
        height += increment;
        step++;
    }

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

calculatePyramidResources(11, 1);

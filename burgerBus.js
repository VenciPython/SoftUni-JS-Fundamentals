function solve(data) {
    let numOfCityCount = 1;
    let numOfCities = Number(data.shift());
    let index = 0;
    let profitAllCities = 0;

    while (numOfCityCount <= numOfCities) {
        let cityName = data[index++];
        let ownerEarned = Number(data[index++]);
        let ownerExpenses = Number(data[index++]);

        if (numOfCityCount % 3 === 0 && numOfCityCount % 5 !== 0) {
            ownerExpenses += ownerExpenses * 0.5;
        }

        if (numOfCityCount % 5 === 0) {
            ownerEarned -= ownerEarned * 0.10;
        }

        let profit = ownerEarned - ownerExpenses;
        console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
        profitAllCities += profit;

        numOfCityCount++;
    }

    console.log(`Burger Bus total profit: ${profitAllCities.toFixed(2)} leva.`);
}

solve(['3', 'Sofia', '895.67', '213.50', 'Plovdiv', '2563.20', '890.26', 'Burgas', '2360.55', '600.00']);

function solve(goldMined) {
    const bitcoinPrice = 11949.16;
    const goldPricePerGram = 67.51;

    let totalMoney = 0;
    let myBitcoins = 0;
    let firstPurchasedBitcoin = "";
    let firstBitcoinDay = 0;

    for (let day = 0; day < goldMined.length; day++) {
        let dailyGold = goldMined[day];

        if ((day + 1) % 3 === 0) {
            dailyGold *= 0.7;
        }
        totalMoney += dailyGold * goldPricePerGram;
        while (totalMoney >= bitcoinPrice) {
            if (myBitcoins === 0) {
                firstBitcoinDay = day + 1;
                firstPurchasedBitcoin = `Day ${firstBitcoinDay}`;
            }
            myBitcoins++;
            totalMoney -= bitcoinPrice;
        }
    }
    console.log(`Money left: ${totalMoney.toFixed(2)} lv.`);
    console.log(`Bitcoin amount: ${myBitcoins}`);
    if (myBitcoins > 0) {
        console.log(`First day of buying first bitcoin: ${firstPurchasedBitcoin}`);
    }
}
solve([100, 200, 300]);

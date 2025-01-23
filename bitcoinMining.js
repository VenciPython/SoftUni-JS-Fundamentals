function solve(shiftGramMining) {
    let priceBitcoin = 11949.16; 
    let priceGoldGram = 67.51;  

    let myBitcoins = 0;           
    let totalMoney = 0;          
    let firstDay = 0;             

    for (let i = 0; i < shiftGramMining.length; i++) {
        let mining = shiftGramMining[i];

        if ((i + 1) % 3 === 0) {
            mining *= 0.70;
        }

        totalMoney += mining * priceGoldGram;

        while (totalMoney >= priceBitcoin) {
            totalMoney -= priceBitcoin;
            myBitcoins++;

            if (myBitcoins === 1) {
                firstDay = i + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${myBitcoins}`);
    if (myBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

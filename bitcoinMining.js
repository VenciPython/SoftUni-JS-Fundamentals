function bitcoinMining(goldPerDay) {
    const bitcoinPrice = 11949.16; // Цена на един биткойн в лева
    const goldPricePerGram = 67.51; // Цена на грам злато в лева

    let totalMoney = 0; // Общата сума от добитото злато
    let bitcoinsBought = 0; // Брой купени биткойни
    let firstBitcoinDay = 0; // Денят на първата покупка на биткойн

    for (let i = 0; i < goldPerDay.length; i++) {
        let dailyGold = goldPerDay[i];

        // Ако денят е трети (започва от 0, така че i + 1 е денят), 30% от златото се краде
        if ((i + 1) % 3 === 0) {
            dailyGold *= 0.7; // Остава само 70% от златото
        }

        // Добавяме стойността на добитото злато към общите пари
        totalMoney += dailyGold * goldPricePerGram;

        // Купуваме биткойни, ако имаме достатъчно пари
        while (totalMoney >= bitcoinPrice) {
            bitcoinsBought++; // Увеличаваме броя на купените биткойни
            totalMoney -= bitcoinPrice; // Намаляваме наличните пари с цената на биткойн

            if (bitcoinsBought === 1) {
                // Запазваме деня на първата покупка на биткойн
                firstBitcoinDay = i + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

// Пример за тестване
bitcoinMining([100, 200, 300]);
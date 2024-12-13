function solve(peopleGroup, typeOfGroup, dayOfWeek) {
    let price = 0;
    if (typeOfGroup === "Students") {
        switch (dayOfWeek) {
            case "Friday": price = peopleGroup * 8.45; break;
            case "Saturday": price = peopleGroup * 9.80; break;
            case "Sunday": price = peopleGroup * 10.46; break;
        }
        if (peopleGroup >= 30) {
            price *= 0.85;
        }

    } else if (typeOfGroup === "Business") {
        switch (dayOfWeek) {
            case "Friday": price = 10.90; break;
            case "Saturday": price = 15.60; break;
            case "Sunday": price = 16; break;
        }
        if (peopleGroup >= 100) {
            let priceDiscount = price * 10;
            price = (price * peopleGroup) - priceDiscount;
        } else {
            price *= peopleGroup;
        }
    } else {
        switch (dayOfWeek) {
            case "Friday": price = peopleGroup * 15; break;
            case "Saturday": price = peopleGroup * 20; break;
            case "Sunday": price = peopleGroup * 22.50; break;
        }
        if (peopleGroup >= 10 && peopleGroup <= 20) {
            price *= 0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
solve(40, "Regular", "Saturday")

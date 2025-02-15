function solve(distanceInMeters){

    let distanceInKilometers = distanceInMeters / 1000;
    let distanceInMiles = distanceInKilometers * 0.621371;
    console.log(`${distanceInMeters} meters is equal to ${distanceInKilometers} kilometers.`);
    console.log(`${distanceInKilometers} kilometers is equal to ${distanceInMiles.toFixed(2)} miles.`);
}
solve(1852)
solve(798)

function solve (num){
    let numAsString = String(num);
    let sum = 0;

    for (let i = 0; i< numAsString.length; i++){
        let numAsNum = Number(numAsString[i]);
        sum += numAsNum;
    }
    console.log(sum);
}
solve(245678)

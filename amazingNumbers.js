function solve(num) {
    let numAsString = String(num);
    let sum = 0;
    let isAmazing = false;

    for (let i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);
    }
    let sumAsString = String(sum);
    for (let i = 0; i<sumAsString.length; i++){
        if (Number(sumAsString[i]) === 9){
            isAmazing = true;
            break;
        }
    }
    
    let result = isAmazing ? `${num} Amazing? True` : `${num} Amazing? False` 
    console.log(result);

}
solve(1233)

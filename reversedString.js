function solve(inputString){
    let resultString = ' ';

    for (let i = inputString.length - 1; i >= 0; i--){
        let stringIndex = inputString[i];
        resultString += stringIndex;
    }
    console.log(resultString);
}
solve('star')

//and you can use input.split('').reverse().join('')

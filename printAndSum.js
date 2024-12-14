function solve(startNum, endNum) {
    let finalSum = 0;
    let forNum = " "
    for (let i = startNum; i <= endNum; i++) {
        forNum = forNum + (startNum + " ")
        finalSum += startNum;
        startNum += 1;
    }
    console.log(forNum);
    console.log(`Sum: ${finalSum}`);
}
solve(5, 10)

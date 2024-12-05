function solve(num) {
    let oddSum = 1;
    let maxSum = 0;
    for (let i = 1; i <= num; i++) {
        console.log(oddSum);
        maxSum += oddSum;
        oddSum += 2;
    }
    console.log(`Sum: ${maxSum}`);
}
solve(5);

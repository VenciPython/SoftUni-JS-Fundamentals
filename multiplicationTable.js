function solve(num) {
    let result = 0;
    for (let i = 1; i <= 10; i++) {
        result = num * i;
        console.log(`${num} X ${i} = ${result}`);
    }
}
solve(5)

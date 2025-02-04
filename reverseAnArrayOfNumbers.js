function solve(num, arr) {
    let arrNew = [];
    for (let i = 0; i < num; i++) {
        arrNew.push(arr[i]);
    }
    arrNew.reverse();
    console.log(arrNew.join(' '));
}
solve(3, [10, 20, 30, 40, 50])

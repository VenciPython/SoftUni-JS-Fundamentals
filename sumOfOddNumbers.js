function solve(n){
  let oddNum = 1;
  let allSum = 0;
  for (i = n; n >= 1; n-- ){
    console.log(oddNum);
    allSum += oddNum;
     oddNum += 2;
  }
  console.log(`Sum: ${allSum}`);
}
solve(5)

function solve(roundedNum, precisionNum) {
  if (precisionNum > 15) {
    precisionNum = 15;
  }
  roundedNum = roundedNum.toFixed(precisionNum);
  roundedNum = parseFloat(roundedNum);
  console.log(roundedNum)
}
solve(10.5,3);

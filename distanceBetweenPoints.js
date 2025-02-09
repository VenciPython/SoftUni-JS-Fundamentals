function solve(x1, y1, x2, y2){
    //formula sqrt{(x2 - x1)^2 + (y2 - y1)^2}
    let deltaX = x1 - x2;
    let deltaY= y1 - y2;
    console.log(Math.sqrt(deltaX * deltaX + deltaY * deltaY));

}

function solve(char1, char2, char3){
    console.log(`${char3}${char2}${char1}`);

    let asci1 = char1.charCodeAt();
    let asci2 = char2.charCodeAt();
    let asci3 = char3.charCodeAt();

    console.log(`${asci3} ${asci2} ${asci1}`)
}
solve('a', 'b', 'c')

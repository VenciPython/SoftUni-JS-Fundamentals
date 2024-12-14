function solve(input) {
    let username = input[0];
    let truePassword = username.split('').reverse().join('');
    let tries = 0;

    for (let i = 1; i < input.length; i++) {
        let password = input[i];
        if (password === truePassword) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            tries += 1;
            if (tries === 4) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log("Incorrect password. Try again.");
            }
        }
    }
}
solve(['Acer', 'login', 'go', 'let me in', 'recA']);

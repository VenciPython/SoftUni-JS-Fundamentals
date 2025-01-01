function solve(daysOfWeek) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (daysOfWeek <= 0 || daysOfWeek > days.length) {
        console.log('Invalid day!');
    } else {
        console.log(days[daysOfWeek - 1]);
    }
}
solve(1)
solve(3)
solve(10)
solve(-3)

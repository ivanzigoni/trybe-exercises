let numbers = [500, 9, 2, 19, 70, 8, 700, 4, 35, 27];
let lowest = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if ( numbers[i] < lowest ) {
        lowest = numbers[i]
    }
}
console.log(lowest)

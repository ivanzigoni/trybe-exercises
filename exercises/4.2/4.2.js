let numbers = [];
let num = 0;
for (let i = 0; i < 25; i += 1) {
    if (numbers.length < 25) {
        numbers.push(num += 1)
    }
}

console.log(numbers)

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i] / 2)
}
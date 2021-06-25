let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i]%2 >= 1) {
        impar.push(numbers[i])
    }
}

if (impar.length >= 1) {
    console.log("são:", impar.length, "números")
} else if (impar.length < 1) {
    console.log("nenhum valor ímpar encontrado")
}
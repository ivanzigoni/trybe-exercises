let firstNumber = Math.floor(Math.random() * (50 - 2 + 1)) + 2;
let secondNumber = Math.floor(Math.random() * (50 - 2 + 1)) + 2;
let thirdNumber = Math.floor(Math.random() * (50 - 2 + 1)) + 2;

if (firstNumber%2 >= 1 || secondNumber%2 >= 1 || thirdNumber%2 >= 1) {
  console.log('true')
} else {
  console.log('false')
}

console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
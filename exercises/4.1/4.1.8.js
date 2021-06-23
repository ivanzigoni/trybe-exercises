let firstNumber = Math.floor(Math.random() * (50 - 2 + 1)) + 2;
let secondNumber = Math.floor(Math.random() * (50 - 2 + 1)) + 2;
let thirdNumber = Math.floor(Math.random() * (50 - 2 + 1)) + 2;

if (firstNumber%2 === 0 || secondNumber%2 === 0 || thirdNumber === 0) {
  console.log('true')
} else {
  console.log('false')
}
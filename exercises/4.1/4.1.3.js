let firstNumber = 11;
let secondNumber = 12;
let thirdNumber = 13;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log("first number is the bigger number");
} else if (firstNumber === secondNumber && firstNumber === thirdNumber) {
    console.log('all numbers are equal');
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log('second number is the bigger number');
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
    console.log('third number is the bigger number');
}
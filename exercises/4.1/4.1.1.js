let firstNumberInput = 11;
let secondNumberInput = 10;
let sum;
let subt;
let mult;
let divi;
let mod;

if (firstNumberInput >= secondNumberInput){
    sum = firstNumberInput + secondNumberInput;
    subt = firstNumberInput - secondNumberInput;
    mult = firstNumberInput * secondNumberInput;
    divi = firstNumberInput / secondNumberInput;
    mod = firstNumberInput%secondNumberInput;
    console.log("sum = ", sum, ";", "subt = ", subt, ";", "mult = ", mult, ";", "divi =", divi, ";", "mod = ", mod, ";");
} else {
    console.log ("Invalid input")
}


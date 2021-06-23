let firstAngle = -100;
let secondAngle = 200;
let thirdAngle = 80;
let sumOfAngle = firstAngle + secondAngle + thirdAngle;

if (sumOfAngle === 180 && Math.sign(firstAngle) === 1 && Math.sign(secondAngle) === 1 & Math.sign(thirdAngle) === 1) {
    console.log('true');
} else {
    console.log('false');
}
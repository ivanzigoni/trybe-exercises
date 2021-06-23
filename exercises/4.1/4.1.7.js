let grades = 53;

if (grades >= 90 && grades <= 99) {
    console.log('A');
} else if (grades >= 80 && grades <= 89) {
    console.log('B');
} else if (grades >= 70 && grades <= 79) {
    console.log('C');
} else if (grades >= 60 && grades <= 69) {
    console.log('D');
} else if (grades >= 50 && grades <= 59) {
    console.log('E');
} else if (grades < 50 && grades >= 1) {
    console.log('F')
} else if (grades === 0 || grades >= 100) {
    console.log('invalid input')
}
const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(studentsArray, gradesArray) {
 return studentsArray.reduce((ac, e, i) => {
    const nameAverage = {};
    let averageGrade = 0;
    grades[i].forEach(el => averageGrade += el)
    nameAverage.name = e;
    nameAverage.average = averageGrade / grades[i].length;
    ac.push(nameAverage);
    return ac;
 }, []);
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(students, grades), expected);


console.log(39 / 5)
console.log ((9 / 5) + (8 / 5) + (10 / 5) + (7 / 5) + (5 / 5))
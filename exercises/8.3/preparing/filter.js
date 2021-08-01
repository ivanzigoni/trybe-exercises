// const numbers = [1, 4, 123, 4, 65, 87, 234, 76, 3, 4, 6, 879];

// const filtering = numbers.filter(e => {
//     return e;
// });

// console.log(filtering);

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];


const removeStudent = (array, student) => array.filter(e => e != student);


console.log(removeStudent(arrayMyStudents, 'Ricardo'));


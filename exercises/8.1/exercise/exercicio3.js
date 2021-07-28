const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const gradeCounter = (rightAns, studAns, counter) => {
    let grade = 0;
    for (let i = 0; i < rightAns.length; i += 1) {
        grade += counter(rightAns[i], studAns[i]);
    }
    return grade;
}

const counter = (currentRightAns, currentStudAns) => {
    if (currentRightAns === currentStudAns) {
        return 1;
    } else if (currentStudAns === 'N.A') {
        return 0;
    } else if (currentRightAns != currentStudAns) {
        return -0.5;
    }
}

console.log(gradeCounter(RIGHT_ANSWERS, STUDENT_ANSWERS, counter))








// const gradeCounter = (rightAns, studAns, counter) => {
//     let grade = 0;
//     for (let i = 0; i < rightAns.length; i += 1) {
//         if (rightAns[i] === studAns[i]) {
//             grade += 1;
//         } else if (studAns[i] === 'N.A') {
//             grade += 0;
//         } else if (rightAns[i] != studAns[i]) {
//             grade -= 0.5;
//         }
//     }
//     return grade;
// }
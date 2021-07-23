// Crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };


// function newFunction (obj, key, value) {
//     obj[key] = value;

// }

// newFunction(customer, 'happy', 'yes')
// console.log(customer);


// Criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". 

// const student2 = {
// 	Html: 'Bom',
// 	Css: 'Ótimo',
// 	JavaScript: 'Ruim',
// 	SoftSkills: 'Ótimo',
// 	Git: 'Bom', // chave adicionada
// };

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// function skills(student) {
// 	const skillsKeys = Object.keys(student);

// 	for (let i = 0; i < skillsKeys.length; i += 1) {
// 		console.log(`${skillsKeys[i]}, Nível: ${student[skillsKeys[i]]}`);

// 	}

// }

// skills(student1);

// skills(student2);

// value student2.Html;
// console.log(Object.keys(student2));


// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };

// const arrDeArr = Object.entries(países);

// for (i in arrDeArr) {
// 	console.log(`A capital do país ${arrDeArr[i][0]} é ${arrDeArr[i][1]}`)
// }

const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign({}, person, lastName);

// console.log(clone)
// console.log(lastName)

const teste = 'teste';

person.teste = 'eita'
console.log(Object.keys(person))

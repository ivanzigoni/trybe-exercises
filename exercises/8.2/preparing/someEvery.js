// const array = [1, 30, 39, 29, 10, 13];

// const every = array.every(element => element < 40);

// const some = array.some(element => element / 2 === 15); 

// console.log(some)
// console.log(every)

// const grades = {
//     portugues: 'Aprovado',
//     matematica: 'Reprovado',
//     ingles: 'Aprovado',
//   };
  
//   const verifyGrades = (i) => (
//     Object.values(i).every(element => element === 'Aprovado')
//   );
  
//   console.log(verifyGrades(grades));


const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = names.some(element => element === 'Ana');

// console.log(hasName)



// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//  const diMaioh = people.every(element => element.age >= 18);
  
//   console.log(diMaioh);


const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  

  people.sort((a, b) => a.age - b.age); // -> crescente

  people.sort((a, b) => b.age - a.age); // -> decrescente


  
  console.log(people);



const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const morningClass = (obj, turno, horario) => {
  obj.turno = horario;

}
morningClass(lesson2, 'turno', 'manhã');


// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro;

const listKeys = (obj) => {
  // console.log(Object.keys(obj));
}

listKeys(lesson3);

// 3 Crie uma função para mostrar o tamanho de um objeto.;

const objectLength = (obj) => {
  // console.log(Object.keys(obj).length);
}

objectLength(lesson3);

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.;

const objValues = (obj) => {
  // console.log(Object.values(obj));
}

objValues(lesson3);

// 5 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:;

const allLessons = {};

Object.assign(allLessons, { lesson1, lesson2, lesson3 });


// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.;

const sumOfStudents = (obj) => {
  let sum = 0;
  for (i in obj) {
    sum += obj[i].numeroEstudantes;
  }
  return sum;
}

sumOfStudents(allLessons)

// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:;

const findKeyIndex = (obj, index) => {
  const objectArray = Object.values(obj);
  return objectArray[index];
}

findKeyIndex(lesson1, 0);

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (obj, key, value) => {
  for (i in obj) {
    if (i === key) {
     if (obj[key] === value) {
       return true;
     } else {
       return false;
     }
  }
}
}
console.log(verifyPair(lesson1, 'turno', 'manhã'));

// const lesson1 = {
//   materia: 'Matemática',
//   numeroEstudantes: 20,
//   professor: 'Maria Clara',
//   turno: 'manhã',
// };


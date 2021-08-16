// let numberStore = [0, 1, 2];
// let newNumber = 12;
// numberStore = [...numberStore, newNumber];

// let numberStores = [numberStore, 1];

// const numbers = [1, 2, 3, 4, 5, 6];

// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// const [a, b, ...rest] = letters;

// const [fn, sc, ...resto] = numbers;

// const testing = [sc, ...rest, fn]



// console.log(testing)
// console.log(b)

const object1 = {
    name: 'Ivan',
    faveColor: 'blue',
    age: 25,
    address: {
        street: 'nope',
        city: 'ahahah'
    }
}

const object2 = {
    name: 'Mr. Cake',
    age: 666,
    address: {
        street: 'near the fire',
        city: 'hell'
    }
}


const {name: vulgo, age} = object2;

const {name, address: {street}} = object1;

const object3 = {
    name: 'Mr. Cake',
    age: 666,
}

const object4 = {
    address: {
        street: 'near the fire',
        city: 'hell'
    }
}

// const object5 = {...object4, ...object3};

// console.log(object5);

function printUser({name, age, faveColor = 'purple'}) {
    console.log(`Name: ${name}, age: ${age}, fave color: ${faveColor}`)
}

// printUser(object1);




const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

// let num1 = 1
// let num2 = 2

// console.log(Math.max(num1, num2))










// Faça uma lista com as suas frutas favoritas
const specialFruit = ['nanana', 'laranja', 'bacate'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'granola', 'calor'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));













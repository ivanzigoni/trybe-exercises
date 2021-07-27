const  assert  = require("assert");

const greetPeople = (people) => {
    let outputArray = [];

    for (const i in people) {
      outputArray.push(`Hello ${people[i]}`)
    }
    return outputArray;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  const expected = greetPeople(['Irina', 'Ashleigh', 'Elsa']);

  assert.deepStrictEqual(expected, result);

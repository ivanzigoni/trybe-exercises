// const asyncSum = (a, b, checkResult) => {
//    setTimeout(() => {
//     const result = a + b;
//     checkResult(result);
//   }, 500)
// };




// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (checkResult) => {
//     try {
//       expect(checkResult).toBe(15);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });


const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      // return reject('Não possui esse tipo de animal.');
      return reject(new Error('Não possui esse tipo de animal.'));
    }, 100);
  })
);

describe('Quando o tipo do animal existe', () => {
//    test('Retorne a lista de animais', () => (
//     findAnimalsByType('Dog').then((listDogs) => {
//       expect(listDogs[0].name).toEqual('Dorminhoco');
//       expect(listDogs[1].name).toEqual('Soneca');
//     })
//   ));

  test('Primeiro animal é dog', async () => {
    expect(await findAnimalsByType('Dog').then(list => list[0].type)).toBe('Dog')    
  })

  // test('Primeiro segundo é dog', async () => {
  //   //  expect(await findAnimalsByType('Dog').then(list => list[1].type)).toBe('Dog')
  //   const results = await findAnimalsByType('Dog').then(list => list);
  //   expect(results[1].type).toBe('Dog');
  //  })
 
   test('Mensagem de erro', async () => {
    await expect(findAnimalsByType('dawg')).rejects.toThrow('Não possui esse tipo de animal.');
   })

   test('Se retorna objeto', async () => {
    const animais = [
      { name: 'Dorminhoco', age: 1, type: 'Dog' },
      { name: 'Soneca', age: 2, type: 'Dog' },
    ];    
    // const results = await findAnimalsByType('Dog').then(list => list);
    // expect(results).toEqual(animais);
    await expect(findAnimalsByType('Dog')).resolves.toEqual(animais);
   })


});




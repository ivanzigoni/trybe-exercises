const {
  getRepos,
  getListAnimals,
  findAnimalsByType,
  getAnimal,
} = require('./exercise.js');



const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};


describe('If function to uppercase words is working properly', () => {

  it('should uppercase all letters', (done) => {
    try {
      uppercase('oi', checkResult => {
        expect(checkResult).toBe('OI');
        done();
      })
    } catch (e) {
      done(e);
    }

  })

// })

// const users = [
//   { id: 1, name: 'Mark' },
//   { id: 2, name: 'Paul' },
// ];

// const findUserById = (id) => new Promise((resolve, reject) => {
//   const result = users.find((user) => user.id === id);

//   if (result) {
//     return resolve(result);
//   }

//   return reject(new Error(`User with ${id} not found.`));
// });

// const getUserName = (userId) => findUserById(userId).then((user) => user.name);

// describe('Checking if findUsersByID is functiong correctly', () => {

//   // it('should return an object containing the user`s id and user`s name', async () => {
//   //   // const resultObject = await findUserById(2).then(obj => obj);
//   //   // expect(resultObject).toEqual({ id: 2, name: 'Paul' })
//   //  await expect(findUserById(2)).resolves.toEqual({ id: 2, name: 'Paul' });    
//   // });

//   // it('should return an error if id isn`t found', async () => {
//   //   const id = 4;
//   //   await expect(findUserById(id)).rejects.toThrow(new Error(`User with ${id} not found.`))
//   // })

//   it('should return as expected',  (done) => {
//     try {
//        expect(findUserById(2)).resolves.toEqual({ id: 2, name: 'Paul' });
//       done();
//     } catch(e) {
//       done(e);
//     }
//   })

// })



// console.log(getRepos('https://api.github.com/orgs/tryber/repos'))

// describe('Testes no getRepos', () => {
//   it('se existe repos todo-list e meme-generator', async () => {
//     const response = await getRepos('https://api.github.com/orgs/tryber/repos')
//     .then(e => {
//       const boo = e.filter(e => {
//          return e === 'sd-01-week4-5-project-meme-generator' 
//          ||     e === 'sd-01-week4-5-project-todo-list'
//       })
//       if (boo.length === 2) {
//         return true;
//       } else {
//         return false;
//       }
//   })

//     expect(response).toEqual(true);

//   })
// })

// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });


// describe('Testando promise - findAnimalByName', () => {
//   describe('Quando existe o animal com o nome procurado', () => {
//     test('Retorne o objeto do animal', () => {
//       expect.assertions(1);
//       return getAnimal('Dorminhoco').then(animal => {
//         expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
//       });
//     });
//   });

//   describe('Quando não existe o animal com o nome procurado', () => {
//     test('Retorna um erro', () => {
//       expect.assertions(1);
//       return getAnimal('Bob').catch(error =>
//         expect(error).toEqual('Nenhum animal com esse nome!')
//       );
//     });
//   });
// });
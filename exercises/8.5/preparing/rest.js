const teste = ['a', 'b', 'c', 'd', 'e'];

function myTestingFunc(...arg) {
    let sum = 0;
    arg.forEach(e => {
        sum += 1;
    })
    console.log(sum);
}

myTestingFunc(1, 2, 4, 5, 6, 7456, 654, 24, teste)


function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
//   console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
//   console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


  const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 5, 6, 76)); // 88
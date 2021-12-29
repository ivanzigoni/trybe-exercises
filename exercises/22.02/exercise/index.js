// =======================1=========================

const one = (param1, param2, param3) => (
  new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' 
      ||typeof param2 !== 'number'
      ||typeof param3 !== 'number') {
        reject("Informe apenas números");
      }
    
    ((param1 + param2) * param3) < 50
    ? reject("Valor muito baixo")
    : resolve(((param1 + param2) * param3));
  })
);

// =======================2=========================

const randomNumberGen = () => Math.floor(Math.random() * 100 + 1);

const num1 = randomNumberGen();
const num2 = randomNumberGen();
const num3 = randomNumberGen();

// one(num1, num2, num3)
//   .then(res => console.log(res))
//   .catch(err => console.error(err))

// =======================3=========================

const three = async (param1, param2, param3) => {
  try {
    const res = await one(param1, param2, param3);
    console.log(res);
  } catch(err) {
    console.error(err);
  }
}

// three(num1, num2, num3);

// =======================4=========================

// ================4.1================

const fs = require('fs').promises;

const four = () => {
  fs.readFile('./simpsons.json', (err, data) => {
    if (err) return console.log('error')
    else console.log(JSON.parse(data));
  })
}

// four()

const getSimpsons = async (filename) => {
  // fs.readFile('./simpsons.json', 'utf-8')
  //   .then(data => JSON.parse(data))
  //   .then(object => console.log(object))
  //   .catch(err => console.log(err))
  try {
    const data = await fs.readFile(filename)
    const array = JSON.parse(data);
    return array;
  } catch(err) {
    console.error(err)
  }
}

const fourPointOne = async () => {
  const array = await getSimpsons('./simpsons.json');

  array.forEach(({ id, name }) => console.log(`${id} - ${name}`))
}

// fourPointOne();

// ================4.2================

const fourPointTwo = (id) => (
  new Promise (async (resolve, reject) => {
    const array = await getSimpsons('./simpsons.json');
    
    const simpInfo = array.find(simp => Number(simp.id) === id);
    
    if (!simpInfo) reject("id não encontrado")
    else resolve(simpInfo)
  })
)

// fourPointTwo(5)
//   .then(res => console.log(res));

// ================4.3================

const fourPointThree = async () => {
  const array = await getSimpsons('./simpsons.json');
 
  const newArray = array.reduce((acc, person) => {
    const id = Number(person.id);
    if (id === 10 || id === 6) {
      return acc;
    };
    acc.push(person);
    return acc;
  }, []);


  fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

// fourPointThree();

// ================4.4================

const fourPointFour = async () => {
  const array = await getSimpsons('./simpsons.json');

  const newArray = array.reduce((acc, person) => {
    const id = Number(person.id);

    if (id >= 0 && id <= 4) {
      acc.push(person)
    }

    return acc;
  }, [])

  fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray), { flag: 'wx'} )
}

// fourPointFour();

// ================4.5================

const fourPointFive = async () => {
  const family = await getSimpsons('./simpsonFamily.json');
  const simpsons = await getSimpsons('./simpsons.json');

  const nelson = simpsons.find(({ name }) => name === 'Nelson Muntz');

  fs.writeFile('./simpsonFamily.json', JSON.stringify(
    [...family, nelson]
  ));  
}

// fourPointFive();

// ================4.6================

const fourPointSix = async () => {
  const cleanArray = await getSimpsons('./backup.json');
  const family = await getSimpsons('./simpsonFamily.json'); 
  const maggie = cleanArray.find(({ name }) => name === 'Maggie Simpson');

  const newArray = family.reduce((acc, person) => { 
    if (person.name === 'Nelson Muntz') {
      acc.push(maggie)
      return acc;
    }
    acc.push(person)
    return acc;
  }, [])

  fs.writeFile('./simpsonFamily.json', JSON.stringify(
    newArray
  ))
}

// fourPointSix();

// =======================5=========================

const stringsArray = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const five = async () => {
  const promisesArray = stringsArray.reduce((acc, string, i) => {
    acc.push(
      new Promise((resolve, reject) => {
        if (!string) reject('faltou uma string');

        fs.writeFile(`./file${i}.txt`, string, { flag: 'wx' })
        resolve(string)
      })
    )
    return acc;
  }, []);


  Promise.all(promisesArray)
    .then(res => fs.writeFile('./fileAll.txt', res.join(' '), { flag: 'wx' }))
  ;
}

// five();

// =======================6=========================

const readline = require('readline');

// const rl = readline.createInterface(process.stdin, process.stdout);

const six = () => {
  rl.question('Type the path to the file ', (filepath) => {
    fs.readFile(filepath, 'utf-8')
      .then(data => JSON.stringify(data))
      .then(object => console.log(object))
      .catch(err => console.error('No such file or directory'));
    rl.close()
  })
}

// six();

// =======================7=========================


const seven = async () => {

  const question = (string) => (
    new Promise ((resolve, reject) => {
      rl.question(string, (result) => {
        rl.pause();
        resolve(result);
      })
    })
  );

  const readContent = async (pathname) => {
    const content = await fs.readFile(pathname, 'utf-8');
    if (content) return content;
  }

  try {
    const pathname = await question('Type the path for the file you want to modify ');
    const content = await readContent(pathname);

    if (!content) {
      rl.close();
      return 'Erro';
    }

    console.log(`File content: ${content}`);

    const target = await question('Type the word you want to change ');
    const replacement = await question('Type the word for replacing the previous one ')

    const newContent = content.replace(target, replacement);
    const newFile = await question ('Type the name of the new file ')

    fs.writeFile(newFile, newContent, { flag: 'wx' });
  } catch(err) {
    console.log(err);
  }

}

// seven();

// =======================8=========================

const eight = (num) => (
  new Promise((resolve, reject) => {
    if (num <= 0 || num % 1 !== 0) reject('Número inválido')

    if (num % 3 === 0 && num % 5 === 0) resolve('FizzBuzz');

    if (num % 3 === 0) resolve('Fizz');

    if (num % 5 === 0) resolve('Buzz');

    resolve(num);
  })
)

// eight(5)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
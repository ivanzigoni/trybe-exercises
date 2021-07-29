// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

// numbers.forEach((i) => {
//     console.log(i + 1);
// })

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
// const names2 = [];

// names.forEach((element, i) => {
//     names[i] = names[i] + '123';
// })

// for (let i = 0; i < names.length; i += 1) {
//     names[i] = names[i] + '123';
// }


const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList)

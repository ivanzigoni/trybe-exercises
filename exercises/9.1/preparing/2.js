const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 1000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (cb) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(cb(user));
  }, delay());
};

// console.log(getUser(userFullName)); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo(
console.log(getUser(userNationality)); // deve imprimir "Ivan is Russian" depois de um certo tempo
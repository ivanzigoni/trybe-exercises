import './App.css';

const array = ['um', 'dois', 'tres', 'quatro', 'cinco'];

// const object = {
//   a: 'um',
//   b: 'dois',
//   c: 'três'
// }

const Task = (value, i) => {
  return (
    <li key={i}>{value}</li>
  );
}

// const forloop = (obj) => {
//     return Object.values(object).map(e => {
//       return Task(e);
//     })
// }

const teste = array.map((e, i) => {
  return Task(e, i);
});


function App() {
return (
  // forloop(object)
  [1, 2, <p key='none'>oi</p>, 3, 4, teste]
)
}



export default App;

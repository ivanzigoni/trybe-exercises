const object = [
    {
        id: 1,
        oi: 2
    },
    {
        id: 3,
        oi: 53
    },
    {
        id: 2,
        oi: 24
    }

]
var array = [
    {name: 4, age: 34},
    {name: 55, age: 54},
    {name: 14, age: 25}
  ];
  

function funcao () {
const testando = object.sort(function(a, b) {
    return a.id - b.id;
  }) 
  return testando;
}

  console.log(funcao())

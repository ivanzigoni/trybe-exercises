
const newEmployees = (card) => {
    const employees = {
      id1: card('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: card('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: card('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };


const employeCard = (nome, sobrenome) => {
    let sobrenomeLowered = sobrenome.toLowerCase();
    let nomeLowered = nome.toLowerCase();
    return {
        nomeCompleto: `${nome} ${sobrenome}`,
        email: `${nomeLowered}_${sobrenomeLowered}@trybe.com`
    }
}



console.log(newEmployees(employeCard))

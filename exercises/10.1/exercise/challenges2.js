// Desafio 10
function techList(array, name) {
  if (array.length === 0) return "Vazio!";
  const sortedArray = array.sort();  
  return sortedArray.reduce((ac, e) => {
    ac.push({
      'tech': e,
      'name': name
    })
    return ac;
  }, [])
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let checkingForRep = 0;
  let arrSaida = [];
  let arrString = "";
  if (array.length === 0) {
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0) {
      return "não é possível gerar um número de telefone com esses valores";
    } else if (array.length != 11 || array.length === 0) {
      return "Array com tamanho incorreto.";
    }
    for (let k = 0; k < array.length; k += 1) {
      if (array[i] === array[k]) {
        checkingForRep += 1;
      }
      if (checkingForRep >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    if (checkingForRep < 3) {
      checkingForRep = 0;
    }
  }
  if (checkingForRep < 3) {
    arrSaida[0] = "(";
    arrSaida[1] = array[0];
    arrSaida[2] = array[1];
    arrSaida[3] = ")";
    arrSaida[4] = " ";
    arrSaida[5] = array[2];
    arrSaida[6] = array[3];
    arrSaida[7] = array[4];
    arrSaida[8] = array[5];
    arrSaida[9] = array[6];
    arrSaida[10] = "-";
    arrSaida[11] = array[7];
    arrSaida[12] = array[8];
    arrSaida[13] = array[9];
    arrSaida[14] = array[10];
    arrJoined = arrSaida.join('');
    arrStringed = arrJoined.toString();
    return arrStringed;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineC + lineB && lineB < lineC + lineA && lineC < lineA + lineB) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let numbersFromString = string.replace(/\D/g, "");
  let cupsOfWater = 0; 

  for (let i = 0; i < numbersFromString.length; i += 1) {
    let integer = parseInt(numbersFromString[i]);
    cupsOfWater += integer;
  }

  if (cupsOfWater === 1) return `${cupsOfWater} copo de água`;
  if (cupsOfWater > 1) return `${cupsOfWater} copos de água`;
}




module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

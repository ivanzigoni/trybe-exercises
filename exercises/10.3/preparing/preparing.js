function randomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function sum(a, b) {
    return a + b;
  }



  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(10); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir, randomRgbColor, sum};
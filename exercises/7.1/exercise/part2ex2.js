const botao = document.querySelector('#btn');
const counter = document.querySelector('#counter');

function clickerCounter() {
  let clickCount = 0;

  botao.addEventListener('click', () => {

    clickCount += 1;
    console.log(clickCount);
    counter.innerText = clickCount;
  })

}

clickerCounter()






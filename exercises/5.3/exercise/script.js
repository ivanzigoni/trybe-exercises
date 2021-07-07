function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let listItem = document.createElement('li');
    let masterUl = document.querySelector('#days');

    listItem.classList.add('day');
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      listItem.classList.add('holiday');
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      listItem.classList.add('friday');
    }

    listItem.textContent = dezDaysList[i];
    masterUl.appendChild(listItem);
    
  }


function settingHolidays (string) {
  let newButton = document.createElement('button');
  let div = document.querySelector(".buttons-container");
  newButton.setAttribute("id", "btn-holiday");
  newButton.textContent = string
  div.appendChild(newButton)
}
settingHolidays('Feriados')


document.getElementById('btn-holiday').addEventListener("click", holidayBackgroundColor);

let onclick = false;

function holidayBackgroundColor() {
  
  if (onclick === false) {
    let highlightingDays = document.getElementsByClassName('holiday');
    for (let i = 0; i < highlightingDays.length; i += 1) {
      highlightingDays[i].style.backgroundColor = "green";
      onclick = true;
    }
  } else if (onclick === true) {
    let highlightingDays = document.getElementsByClassName('holiday');
    for (let i = 0; i < highlightingDays.length; i += 1) {
      highlightingDays[i].style.backgroundColor = "rgb(238,238,238)";
      onclick = false;
    }
  }
}

function settingFridays (string) {
  let newButton = document.createElement('button');
  let div = document.querySelector(".buttons-container");
  newButton.setAttribute("id", "btn-friday");
  newButton.textContent = string;
  div.appendChild(newButton);
}
settingFridays('Sexta-feira')


document.getElementById('btn-friday').addEventListener("click", fridayTextAltering);

let fridayClick = false;
function fridayTextAltering() {
  if (fridayClick === false) {
    let fridays = document.getElementsByClassName("friday");
    for (let i = 0; i < fridays.length; i += 1) {
      fridays[i].textContent = 'SEXTOUBB';
      fridayClick = true;
    }
  } else if (fridayClick === true) {
    let fridays = document.getElementsByClassName("friday");
    const fridaysDays = [4, 11, 18, 25];
    for (let i = 0; i < fridays.length; i += 1) {
      fridays[i].textContent = fridaysDays[i];
      fridayClick = false;
    }
  }
}

for (let i = 0; i < dezDaysList.length; i += 1) {
document.getElementsByClassName('day')[i].addEventListener("click", zoomingDays)
}
zoomingOn = false;
function zoomingDays(e) {
  if (zoomingOn === false) {
    e.target.style.fontSize = '35px';
    zoomingOn = true;
  } else if (zoomingOn === true) {
    e.target.style.fontSize = '20px';
    zoomingOn = false;
  }
}


document.querySelector("#btn-add").addEventListener("click", addToTasksList);

function addToTasksList () {
  const inputCompromissos = document.querySelector("#task-input").value;
  const divToAppend = document.querySelector(".my-tasks")
  let newTask = document.createElement('p');
  newTask.innerText = inputCompromissos;
  divToAppend.appendChild(newTask)
}

function coloringTasks (string) {
  let newDiv = document.createElement('div');
  let parentDiv = document.querySelector('.my-tasks');
  newDiv.style.backgroundColor = string;

  parentDiv.appendChild(newDiv);

}

coloringTasks('blue');
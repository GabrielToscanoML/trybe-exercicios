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

// exercicio 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criaDiasDoMes() {
  let daysList = document.getElementById('days');

  for(let index = 0; index < decemberDaysList.length; index += 1) {
    let dias = decemberDaysList[index];
    let dayslistItem = document.createElement('li');

    // condicoes para atribuir nome da classe
    if((decemberDaysList[index] === 24) || (decemberDaysList[index] === 31)) {
      dayslistItem.className = 'day holiday';
    } else if((decemberDaysList[index] === 25)){
      dayslistItem.className = 'day holiday friday';
    } else if ((decemberDaysList[index] === 4) || (decemberDaysList[index] === 11) || (decemberDaysList[index] === 18)) {
      dayslistItem.className = 'day friday';
    } else {
      dayslistItem.className = 'day';
    }
    // dias recebe o valor do array
    dayslistItem.innerHTML = dias;
  
    // coloco toda a lista 'li' como filha da 'ul'
    daysList.appendChild(dayslistItem);
  }
  // console.log(daysList.children); testando se as classes deram certo
}
criaDiasDoMes();

// exercicio 2
function criaBotao(string) {
  let botaoFeriados = document.createElement('button');
  botaoFeriados.id = 'btn-holiday';
  botaoFeriados.textContent = string;

  let botaoContainer = document.querySelector('.buttons-container');
  botaoContainer.appendChild(botaoFeriados);
 // console.log(botaoContainer);
}

// exercicio 3

let currentBackgroundColor = false;

function changeBackgroundColorHolidays() {

  let getHolidays = document.querySelectorAll('.holiday');

  for(let index = 0; index < getHolidays.length; index += 1) {
    getHolidays[index].style.backgroundColor = currentBackgroundColor ? 'rgb(238,238,238)' : 'aquamarine';
    // usando operador ternario "se for branco, altera para aquamarine e vice versa"
  }

  currentBackgroundColor = !currentBackgroundColor;
}

let botao = criaBotao('Feriados');
botao = addEventListener('click', changeBackgroundColorHolidays);





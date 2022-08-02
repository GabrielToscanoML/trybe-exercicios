const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
firstLi.addEventListener('click', addClassTech);

function addClassTech() {
  firstLi.className = 'tech';
  console.log(document.getElementsByTagName('li'));

}
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
let tech = document.querySelector('.tech');
input.addEventListener('change', alteraTexto);
function alteraTexto() {
  tech.textContent = input.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

let mySpotrybefy = document.getElementById('my-spotrybefy');
mySpotrybefy.addEventListener('dblclick', redireciona);
function redireciona() {
  window.open('https://gabrieltoscanoml.github.io/', '_blank'); // coloquei o "_blank" para poder abrir em uma aba nova
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
mySpotrybefy.addEventListener('mouseover', alteraCor);
function alteraCor() {
  mySpotrybefy.style.color = 'red';
}

mySpotrybefy.addEventListener('mouseout', voltaCor);
function voltaCor() {
  mySpotrybefy.style.color = 'white';
}
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
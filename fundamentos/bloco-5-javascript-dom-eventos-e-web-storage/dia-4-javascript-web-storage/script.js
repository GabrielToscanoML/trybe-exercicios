let getUserText = document.querySelectorAll('li');

for(let index = 0; index < getUserText.length; index += 1) {
  // cria as caixas de texto
  let criaInputText = document.createElement('input');
  criaInputText.setAttribute("type", "text");
  criaInputText.id = 'text' + [index];
  getUserText[index].appendChild(criaInputText);

  // cria os botoes
  let criaInputButton = document.createElement('input');
  criaInputButton.setAttribute("type", "button");
  criaInputButton.setAttribute("value", "Mudar!");
  criaInputButton.id = 'botao' + [index];
  getUserText[index].appendChild(criaInputButton);
}

// atribuindo eventos para cada botao
const backgroundColorBtn = document.getElementById("botao0");
backgroundColorBtn.addEventListener('click', changeBackGroundColor);

const textColorBtn = document.getElementById("botao1");
textColorBtn.addEventListener('click', changeTextColor);

const textFontSizeBtn = document.getElementById("botao2");
textFontSizeBtn.addEventListener('click', changeTextFontSize);

const lineSpacingBtn = document.getElementById("botao3");
lineSpacingBtn.addEventListener('click', changeLineSpacing);

const textFontTypeBtn = document.getElementById("botao4");
textFontTypeBtn.addEventListener('click', changeFontType);

// construindo as funcoes de cada botao
function changeBackGroundColor() {
  const bodyBackgroundColor = document.querySelector('body');
  bodyBackgroundColor.style.backgroundColor = document.getElementById("text0").value;
}

function changeTextColor() {
  const textColor = document.querySelector('section');
  textColor.style.color = document.getElementById("text1").value;
}

function changeTextFontSize() {
  const textFontSize = document.querySelector('section');
  textFontSize.style.fontSize = document.getElementById("text2").value+'px';
}

function changeLineSpacing() {
  const lineSpacing = document.querySelector('section');
  lineSpacing.style.lineHeight = document.getElementById("text3").value+'px';
}

function changeFontType() {
  const fontType = document.querySelector('section');
  fontType.style.fontFamily = document.getElementById("text4").value;
}

let user = {
  backgroundColorPreference: null,
  textColorPreference: null,
  textFontSizePreference: null,
  lineSpacingPreference: null,
  fontTypePreference: null,
};
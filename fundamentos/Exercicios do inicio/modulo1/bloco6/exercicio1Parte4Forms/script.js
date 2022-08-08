// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
INPUT_TEXT.addEventListener('keypress', preventDefaultText);

const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
INPUT_CHECKBOX.addEventListener('click', preventDefaultCheckbox);

const HREF_LINK = document.querySelector("#href");
HREF_LINK.addEventListener('click', preventDefaultHref);

function preventDefaultText(event) {
  if(event.key !== 'a'){
    event.preventDefault();
  }
}

function preventDefaultCheckbox(event) {
  event.preventDefault();
}

function preventDefaultHref(event) {
  event.preventDefault();
}

let string_word = "trybe";
let string_ending = "be";

function verifica_final(string_word, string_ending){
  let tamanho_ending = string_ending.length;
  let contador = 0;
  let index2 = 1;

  for(let index = 0; index < tamanho_ending; index++){
    if(string_word[string_word.length-index2] === string_ending[string_ending.length-index2]){
      contador++;
    }
    index2--;
  }
  if(contador === tamanho_ending){
    return true;
  } else {
    return false;
  }
}

console.log(verifica_final(string_word, string_ending));

const letras_romanas = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let string = 'I';

console.log(retorna_numeral(string, letras_romanas));

function retorna_numeral(array, obj){
  let splitArray = [];
  let resultado_somatorio = 0;

  splitArray = array.split(""); //transformei a string em um array de caractere

  resultado_somatorio += comparaLetra(splitArray[splitArray.length-1]); //recebe o valor correspondente a ultima posicao do array

  let index = splitArray.length-1; //index pegando a ultima posicao do array
  while(splitArray.length != 1){
    if (comparaLetra((splitArray[index-1])) >= comparaLetra(splitArray[index])){

      resultado_somatorio += comparaLetra(splitArray[index-1]);

      splitArray.splice(index, 1); //apago a ultima posicao

    } else {
      resultado_somatorio -= comparaLetra(splitArray[index-1]);
      splitArray.splice(index, 1); //apago a ultima posicao
    }
    index--;
  }
  return resultado_somatorio
}

function comparaLetra(caractere){
  for (let key in letras_romanas){
    if(caractere === key){
      return letras_romanas[key];
    }
  }
}
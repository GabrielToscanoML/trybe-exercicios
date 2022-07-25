let array = [2, 3, 6, 7, 10, 1];

function indice_maior_valor(array){
  let maior = array[0];

  for(let index = 1; index<array.length; index++){
    if(maior < array[index]){
      maior = index;
    }
  }
  return maior;
}
console.log(indice_maior_valor(array));
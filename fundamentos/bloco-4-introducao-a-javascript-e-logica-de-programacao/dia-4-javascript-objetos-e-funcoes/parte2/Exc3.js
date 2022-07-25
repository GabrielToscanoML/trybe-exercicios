let array = [2, 3, 6, 7, 10, 0, -3];

function indice_menor_valor(array){
  let menor = array[0];

  for(let index = 1; index<array.length; index++){
    if(menor > array[index]){
      menor = index;
    }
  }
  return menor;
}
console.log(indice_menor_valor(array));
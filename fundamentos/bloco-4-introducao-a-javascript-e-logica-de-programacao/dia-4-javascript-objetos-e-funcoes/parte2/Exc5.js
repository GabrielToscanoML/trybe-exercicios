let numeros = [2, 3, 2, 5, 8, 2, 3];

function mais_repete(array){
  let contador = 0;
  let contador2 = 0;
  let mais_repete;

  for(let index = 0; index < array.length; index++){
    for(let index2 = 1; index2 < array.length; index2++){
      if(array[index] === array[index2]){
        contador++;
      }
    }
    if(contador > contador2){
      contador2 = contador;
      mais_repete = array[index];
    }
    contador = 0;
  }
  return mais_repete;
}

console.log(mais_repete(numeros));

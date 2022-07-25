let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(arrayOfNumbers(vector));

function arrayOfNumbers(vector){

  let resultado = [];
  let index3 = 0;

  for(let index = 0; index < vector.length; index++){
    for (let index2 = 0; index2<vector[index].length; index2++){
      if(vector[index][index2] %2 === 0){
        resultado [index3] = vector[index][index2];
        index3++;
      }
    }
  }
  return resultado;
}

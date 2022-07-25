let num = 5;

function somatorio(num){
  let somatorio = 0;
  for(let index = 1; index <=num; index++){
    somatorio+= index;
  }
  return somatorio;
}
console.log(somatorio(num));

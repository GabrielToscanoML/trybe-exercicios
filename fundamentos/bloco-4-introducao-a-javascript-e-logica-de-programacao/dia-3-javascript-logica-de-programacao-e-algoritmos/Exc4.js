let maiorPrimo = 2;
let count = 0;

for(let index = 3; index < 50; index++){
  for(let secondIndex = 1; secondIndex <= index; secondIndex++){
    if(index%secondIndex === 0){
      count++;
    }
  }
  if((count === 2) && (index > maiorPrimo)){
    maiorPrimo = index;
  }
  count = 0;
}
console.log(maiorPrimo);

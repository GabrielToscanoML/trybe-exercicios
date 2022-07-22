let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = 0;

for(let index = 0; index < numbers.length; index++){
  if(numbers[index]%2 !== 0){
    count++;
  }
}

if(count === 0){
  console.log("nenhum valor ímpar");
} else { 
  console.log(count);
}
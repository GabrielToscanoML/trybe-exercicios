let num = 7;

for(let index = 1; index <= num; index ++){
  for(let secondIndex = 1; secondIndex <= num-index; secondIndex++){
    process.stdout.write(" ");
  }
  for(let thirdIndex = 1; thirdIndex <= index; thirdIndex++){
    process.stdout.write("*");
  }
  console.log("");
}
let num = 5;

for(let index = 1; index <= num; index++){
  for(let secondIndex = 1; secondIndex <= index; secondIndex++){
    process.stdout.write("*"); //comando para imprimir sem quebra de linha
  }
  console.log(""); //quebra de linha apos imprimir toda a linha
}
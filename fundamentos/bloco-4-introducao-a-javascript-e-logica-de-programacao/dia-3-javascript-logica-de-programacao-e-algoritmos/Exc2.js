let string = "banana";
let aux;

aux = string.split(""); //divido a string em um array de caracteres
string = aux.reverse(); //inverto as posicoes
aux = string.join(""); //junto os caracteres em uma palavra
console.log(aux);  //imprimo o resultado
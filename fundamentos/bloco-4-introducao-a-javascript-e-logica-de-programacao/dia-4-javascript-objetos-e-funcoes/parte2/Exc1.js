let string = "arara";
let string2 = "desenvolvimento";

function verificaPalindrome(string) {
  let meio;
  let splitString = [];
  let count = 0;

  meio = parseInt(string.length / 2); //pega o tamanho da metade da palavra
  splitString = string.split("");

  for (let index = 0; index < meio; index++) {
    if (splitString[index] === splitString[string.length - (index + 1)]) {
      count++;
    }
  }

  if (count === meio) {
    return true;
  } else {
    return false;
  }

}
console.log(verificaPalindrome(string));
console.log(verificaPalindrome(string2));

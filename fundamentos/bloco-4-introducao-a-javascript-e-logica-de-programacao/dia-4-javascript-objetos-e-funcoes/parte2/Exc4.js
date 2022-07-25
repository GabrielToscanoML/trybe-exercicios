let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maior_nome(array){
  let maior_nome = "";

  for(let index = 0; index<array.length; index++){
    if(maior_nome.length < array[index].length){
      maior_nome = array[index];
    }
  }
  return maior_nome;
}
console.log(maior_nome(nomes));

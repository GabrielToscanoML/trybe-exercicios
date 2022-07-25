//Nao sei se fiz esse exercicio da forma correta. Mas chegou no mesmo resultado.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};


console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + " e " + info2.nota);
if((info.recorrente === "Sim") && (info2.recorrente === "Sim")){
  console.log("Ambos recorrentes");
} else {
  console.log(info.recorrente + " e " + info2.recorrente);
}

let nome_peca = "RaInHa";

if((nome_peca.toLowerCase() === "rei") || (nome_peca.toUpperCase() === "REI")) {
  console.log("Move-se em todas as direcoes (horizontal, vertical e diagonal) somente uma casa de cada vez.");
} else if((nome_peca.toLowerCase() === "rainha") || (nome_peca.toUpperCase() === "RAINHA")) {
  console.log("Move-se ao longo da horizontal, vertical e diagonais mas nao pode pular outras pecas.");
} else if ((nome_peca.toLowerCase() === "bispo") || (nome_peca.toUpperCase() === "BISPO")) { 
  console.log("Move-se ao longo da diagonal. Nao pode pular outras pecas.");
} else if((nome_peca.toLowerCase() === "torre") || (nome_peca.toUpperCase() === "TORRE")) {
  console.log("Movimenta-se pela vertical ou horizontal, mas nao pode pular outras pecas.");
} else if((nome_peca.toLowerCase() === "peao") || (nome_peca.toUpperCase() === "PEAO")) {
  console.log("Movimenta-se apenas uma casa para frente e somente captura outras pecas na diagonal. Opcionalmente, cada peao pode avançar duas casas no seu primeiro movimento do jogo.");
} else if ((nome_peca.toLowerCase() === "cavalo") || (nome_peca.toUpperCase() === "CAVALO")) { 
  console.log("Eh a unica peça que pode pular as outras. O movimento do cavalo eh em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
} else {
  console.log("Peca invalida!!");
}
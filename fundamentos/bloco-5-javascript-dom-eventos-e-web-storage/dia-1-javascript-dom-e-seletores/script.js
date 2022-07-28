//alterando o título
document.getElementById("header-container").style.backgroundColor = "#0FA78F";

//alterando a cor de fundo do conteudo urgente
let emergencyTasks = document.getElementsByClassName("emergency-tasks");
emergencyTasks[0].style.backgroundColor = "#F39888";

//alterando a cor de fundo do conteudo nao urgente
let noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
noEmergencyTasks[0].style.backgroundColor = "#FFD45F";

//alterando a cor de fundo do titulo do conteudo urgente
let titulo_emergency = document.querySelectorAll(".emergency-tasks h3");
for(let index = 0; index < titulo_emergency.length; index++){
  titulo_emergency[index].style.backgroundColor = "#FC06F0";
}

//alterando a cor de fundo do titulo do conteudo nao urgente
let titulo_no_emergency = document.querySelectorAll(".no-emergency-tasks h3");
for(let index = 0; index < titulo_emergency.length; index++){
  titulo_no_emergency[index].style.backgroundColor = "#242725";
}

document.getElementById("footer-container").style.backgroundColor = "#042C35";
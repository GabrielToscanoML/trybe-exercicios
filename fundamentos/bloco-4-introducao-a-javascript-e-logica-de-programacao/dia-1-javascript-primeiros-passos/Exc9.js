const angulo_1 = 45;
const angulo_2 = 45;
const angulo_3 = 90;

if((angulo_1 + angulo_2 + angulo_3) === 180){
  //return true;
  console.log("true");
} else if (angulo_1 < 0 || angulo_2 < 0 || angulo_3 < 0) { 
  //return "Erro!";
  console.log("Erro!");
} else {
  console.log("false");
  //return false;
}
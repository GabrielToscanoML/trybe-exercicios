let salario_bruto = 3000;
let salario_base;
let aliquota_IR;
let resultado;

//atribuindo o salario base de acordo com INSS
if(salario_bruto <= 1556.94) { 
  salario_base = (salario_bruto - ((8/100)*salario_bruto));
} else if((salario_bruto >= 1556.95) && (salario_bruto <= 2594.92)) { 
  salario_base = (salario_bruto - ((9/100)*salario_bruto));
} else if((salario_bruto >= 2594.92) && (salario_bruto <= 5189.82)) { 
  salario_base = (salario_bruto - ((11/100)*salario_bruto));
} else {
  salario_base = (salario_bruto - 570.88);
}

//definindo o valor do imposto de renda
if(salario_base <= 1903.98){
  aliquota_IR = 0;
} else if ((salario_base >= 1903.99) && (salario_base <= 2826.65)){
  aliquota_IR = ((7.5/100)*salario_base) - 142.80;
} else if ((salario_base >= 2826.66) && (salario_base <= 3751.05)){
  aliquota_IR = ((15/100)*salario_base) - 354.80;
} else if ((salario_base >= 3751.06) && (salario_base <= 4664.68)){
  aliquota_IR = ((22.5/100)*salario_base) - 636.13;
} else {
  aliquota_IR = ((27.5/100)*salario_base) - 869.36;
}

resultado = (salario_base - aliquota_IR);

console.log(resultado);
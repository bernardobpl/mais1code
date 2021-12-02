// criar uma função pra cada operação básica de uma calculadora
// soma 1+1 
// subtracao 1-1
// multiplicacao 1*1
// divisao 1/1
// executem a função e mostra num console.log o resultado da operação

const numero1 = 6;
const numero2 = 3;

function soma(num1, num2){
  return num1+num2;
}

function subtracao(num1, num2){
  return num1-num2;
}

function multiplicacao(num1, num2){
  return num1*num2;
}

function divisao(num1, num2){
  return num1/num2;
}

// pode ser feito o console log com várias strings e variáveis separando por virgula
console.log( "soma: ", numero1, "+", numero2, "=", soma(numero1,numero2) )

// ou usando a crase como string pois ela permite passar variáveis dentro dela usando ${variável}
// o nome dessa crase usada como string/variável é template literal
console.log( `soma: ${numero1} + ${numero2} = ${soma(numero1,numero2)}` )
console.log( `subtracao: ${numero1} - ${numero2} = ${subtracao(numero1,numero2)}` )
console.log( `multiplicacao: ${numero1} * ${numero2} = ${multiplicacao(numero1,numero2)}` )
console.log( `divisao: ${numero1} / ${numero2} = ${divisao(numero1,numero2)}` )
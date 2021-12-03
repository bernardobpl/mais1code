const primeiroNome = "Bernardo ";
const nomeDoMeio = "Bruno ";
const sobrenome = "Pereira Lopes";

function GeraNomeCompleto(nome1, nome2, nome3){
  const nomeCompleto = nome1 + nome2 + nome3;
  return nomeCompleto;
}

var teste = GeraNomeCompleto(primeiroNome,nomeDoMeio, sobrenome)
console.log(teste);

console.log( GeraNomeCompleto(primeiroNome,nomeDoMeio, sobrenome) );


//desafio
// criar uma função pra cada operação básica de uma calculadora
// soma 1+1 
// subtracao 1-1
// multiplicacao 1*1
// divisao 1/1
// executem a função e mostra num console.log o resultado da operação


// quando a variável é um número, não coloca aspas
const numero1 = 15
const numero2 = 17

// nome de função ou variável não pode ter espaço
// operações de matemática não precisão ser criadas, elas já existem
function Soma(primeiroNumero, segundoNumero){
  // retornar o valor do resultado da sua função, nesse caso o resultado da soma
  return primeiroNumero + segundoNumero;
}

// você pode pegar o valor do retorno de uma função colocando ele em uma variável / igualando uma variável àquela função
var resultado = Soma(numero1, numero2);

// você pode usar o valor do retorno direto em algum lugar sem precisar de colocar em uma variável
console.log( Soma(numero1, numero2) )
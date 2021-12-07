// função de 2 grau
// Ax² + Bx + c = 0
// vcs vão pegar os valores A, B, C e resolver a equação do segundo grau
// exemplo https://matematicabasica.net/equacao-do-2-grau-segundo-grau/
// usar essa equação para testar: x²-5x+6=0
// dica: a=1 b=-5 c=6
// resultado 
// x1 = 3
// x2 = 2

// dar um console.log no x1 e no x2 que for cvalculado pela função de vcs

function SegundoGrau(a,b,c){
  const delta = Math.pow(b,2) - 4*a*c;

  const x1 = (-b + Math.sqrt(delta))/(2*a);
  const x2 = (-b - Math.sqrt(delta))/(2*a);

  console.log(x1);
  console.log(x2);
}

SegundoGrau(1,-5,6);
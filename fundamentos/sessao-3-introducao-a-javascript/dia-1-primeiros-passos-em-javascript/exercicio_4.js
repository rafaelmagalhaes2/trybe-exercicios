
/*  Exercício 4

    Utilize if...else para escrever um código que defina três variáveis com 
    os valores dos três ângulos internos de um triângulo. Retorne true se os 
    ângulos representarem os ângulos de um triângulo e false, caso contrário. 
    Se algum ângulo for inválido, você deve retornar uma mensagem de erro. 
*/

/* Obs: a soma dos ângulos internos do triângulo tem que ser igual 180 graus
   para formar um triângulo. 
*/

let angulo1 = 50;
let angulo2 = 50;
let angulo3 = 80;

if ( angulo1 + angulo2 + angulo3 === 180 ) {
    console.log(true)
}
else {
    console.log(false)
}


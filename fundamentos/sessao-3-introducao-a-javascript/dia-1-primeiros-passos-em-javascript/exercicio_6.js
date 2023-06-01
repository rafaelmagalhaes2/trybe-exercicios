
/*  Exercício 6

    Utilize if...else para escrever um código que defina três números em variáveis e 
    retorne true se pelo menos uma das três for par. Caso contrário, o código deve 
    retornar false. Faça esse exercício utilizando somente um if. 
*/

let num1 = 1;
let num2 = 2;
let num3 = 3;

if( ( num1 % 2 === 0  ) || ( num2 % 2 === 0 ) || ( num3 % 2 === 0) ) {
    console.log(true)
}
else {
    console.log(false)
}
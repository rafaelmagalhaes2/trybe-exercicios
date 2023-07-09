
/*  Exercício 3

    Utilize if/else para escrever um código que retorne o maior de três números. 
    Defina, no começo do seu código, três variáveis com os valores que serão comparados.
*/  

let num1 = 1;
let num2 = 2;
let num3 = 3;

if ( num1 > num2 && num1 > num3 ) {
    console.log('O maior número é ' + num1);
}
else if ( num2 > num1 && num2 > num3 ) {
    console.log('O maior número é ' + num2);
}
else {
    console.log('O maior número é ' + num3);    
}
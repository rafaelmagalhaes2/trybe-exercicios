/*  
    Calcule e imprima a média aritmética dos valores contidos no array. 
    A média aritmética é o resultado da soma de todos os elementos 
    dividido pelo número total de elementos.
*/

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let media;

for ( let i = 0; i < numbers.length; i ++ ) {
    soma += numbers[i];
}

media = soma / numbers.length;

console.log(media);
/* 
   Desafio dos asteriscos 2

   Faça o mesmo algoritmo que antes, mas de modo que imprima um 
   triângulo retângulo com 5 asteriscos de base. Por exemplo:
*/

let n = 5;
let linha = '';

if ( n > 1 ) {
    
    for(let i = 0; i < n; i++ ) {
        // Adiciona a linha
        linha += '*';
        console.log(linha)
    }    
}
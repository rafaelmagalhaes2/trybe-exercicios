/* 
    Desafio dos asteriscos

    Escreva um algoritmo que, dado um valor n, sendo n > 1, 
    imprima na tela um quadrado feito de asteriscos de 
    tamanho n. Por exemplo:

    n = 5

    *****

    *****

    *****

    *****

    *****
*/

let n = 5;
let linha = '';

if ( n > 1 ) {
    
    for(let i = 0; i < n; i++ ) {
        // Adiciona a linha
        linha = '';

        for ( let y = 0; y < n; y++ ) {
            // Adiciona o asterisco dentro da linha
            linha += '*';
        }
        // Imprime as linhas
        console.log('\n' + linha)
    } 
}
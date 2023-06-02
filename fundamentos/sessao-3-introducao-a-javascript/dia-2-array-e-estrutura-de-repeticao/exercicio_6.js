
/* 
    Descubra quantos valores ímpares existem no array e imprima o resultado. 
    Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado.
*/

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let totalNumerosImpares = 0;

for ( let i = 0; i < numbers.length; i++ ) {

    if ( numbers[i] % 2 !== 0 ) {
        totalNumerosImpares += 1;
    }
}

if ( totalNumerosImpares > 0) {
    console.log (totalNumerosImpares);
}

if ( totalNumerosImpares === 0 ) {
    console.log ('Nenhum valor ímpar encontrado');
}

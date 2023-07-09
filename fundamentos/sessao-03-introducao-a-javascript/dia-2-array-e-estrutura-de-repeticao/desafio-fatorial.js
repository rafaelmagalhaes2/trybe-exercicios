
/* 
    Desafio fatorial

    O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

    O fatorial é representado pelo sinal !
    Exemplo de 4 fatorial:
    4! = 4 x 3 x 2 x 1 = 24

    Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
 */

function fatorial ( n ) {
    let value = n;

    if ( value <= 1 ) {
        return 1;
    }
    if ( value > 1) {
        return value * fatorial( n - 1);
    }
}

console.log(fatorial(10));

/* Exercício 5

    Utilize switch/case para escrever um código que receba o nome de uma peça de 
    xadrez e retorne os movimentos que ela pode fazer.

    Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

    Desafio extra, escreva um código para funcionar tanto se receber o nome de uma 
    peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade 
    de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas 
    as letras minúsculas (lower case).

    Exemplo: Bispo -> Diagonais.
*/

let peca = 'Torre';

switch (peca.toLowerCase()) {
    
    case 'rei':
        console.log(
            ' Pode mover-se em qualquer direção, porém apenas uma casa por vez, ' +
            ' como indicam os pontos vermelhos na figura abaixo.'
        );
        break;

    case 'rainha':
        console.log(
            ' Assim como o Rei, pode mover-se em qualquer direção ' +
            ' (vertical, horizontal e diagonal), porém quantas casas ' +
            ' quiser, desde que estejam livres.'
        );
        break;

    case 'torre':
        console.log(' Move-se em linha reta, tanto na vertical quanto na horizontal, ' +
                    ' quantas casas quiser.');
        break;

    case 'bispo':
        console.log(
            ' Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a ' +
            ' partida em uma casa branca somente poderá transitar pelas brancas,' +
            ' enquanto o Bispo que inicia em uma casa preta somente poderá transitar ' +
            ' pelas casas pretas.'
        );
        break;

    case 'peão':
        console.log(
            ' Move-se sempre uma casa para frente, exceto no primeiro movimento, ' +
            ' quando pode mover-se duas casas. O peão é a única peça que não pode ' +
            ' retroceder, e também a única que efetua a captura com um movimento ' +
            ' diferente do utilizado para avançar no tabuleiro. O peão pode capturar ' +
            ' as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.'
        );
        break;

    default:
        console.log('Error')
        break;
}
# 🎯 Dia 1 - Primeiros passos em JavaScript 

## Exercícios 🚀


/*  Exercício 1

    Elabore alguns códigos e imprima o resultado no console usando o console.log, 
    um para cada operação aritmética básica. É necessário que seu código tenha duas 
    variáveis, num1 e num2, definidas no começo com os valores que serão operados. 
    Escreva códigos para:

    Adição (num1 + num2)
    Subtração (num1 - num2)
    Multiplicação (num1 * num2)
    Divisão (num1 / num2)
    Módulo (num1 % num2)
*/  

    let num1 = 10;
    let num2 = 5;

    let adicao = num1 + num2;
    console.log(adicao);

    let subtracao = num1 - num2;
    console.log(subtracao);

    let multiplicacao = num1 * num2;
    console.log(multiplicacao);

    let divisao = num1 / num2;
    console.log(divisao);

    let modulo = num1 % num2;
    console.log(modulo);

/*  Exercício 2

    Utilize if/else para escrever um código que retorne o maior de dois números. 
    Defina, no começo do seu código, duas variáveis com os valores que serão comparados.
*/  

    let num1 = 30;
    let num2 = 50;

    if ( num1 > num2 ) {
        console.log(num1 + ' é maior que ' + num2)
    }
    else{
        console.log(num2 + ' é maior que ' + num1)
    }

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

/*  Exercício 4

    Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro. 
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

/*  Exercício 5

    Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

    Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

    Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

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
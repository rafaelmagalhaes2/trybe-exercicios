
Considere o array para realiação dos exercícios:

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1. Percorra o array imprimindo todos os valores contidos nele com a função console.log().
    
    const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    for ( let i = 0; i < numbers.length; i++ ) {
        console.log(numbers[i]);
    }

2. Some todos os valores contidos no array e imprima o resultado.
    
    const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    let sum = 0;

    for ( let i = 0; i < numbers.length; i++ ) {
        sum += numbers[i];
    }

    console.log(sum);

3. Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

    const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    let soma = 0;
    let media;

    for ( let i = 0; i < numbers.length; i ++ ) {
        soma += numbers[i];
    }

    media = soma / numbers.length;

    console.log(media);

4. Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

    const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    let soma = 0;
    let media;
    let mensagem = '';

    for ( let i = 0; i < numbers.length; i++ ) {
        soma += numbers[i];
    }

    media = soma / numbers.length;

    console.log('Média: ' + media);

    if ( media > 20 ) {
        console.log('O valor da média aritmética é maior que 20');
    }
    else {
        console.log('O valor da média aritmética é menor ou igual a 20');
    }

5. Utilizando for, descubra o maior valor contido no array e imprima-o.

    const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    let maior = 0;

    for ( let i = 0; i < numbers.length; i++ ) {
        if ( numbers[i] > maior) {
            maior = numbers[i];
        }
    }

    console.log(maior)

6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

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

## Desafio fatorial

O fatorial é a multiplicação de um número natural pelos seus antecessores, 
exceto o zero. Por exemplo:

O fatorial é representado pelo sinal !
Exemplo de 4 fatorial:
4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

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

##  Desafio de inverter palavra

Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

    let palavra = 'Banana';

    console.log('Palavra: ' + palavra);

    // Converte a string em um Array de caracteres split()
    let arrayCaracteres = palavra.split('');

    // Inverte o Array de caracteres com o método reverse()
    let arrayInvertido = arrayCaracteres.reverse();

    // Junta os caracteres do array em uma palavra
    let palavraInvertida = arrayInvertido.join('');

    console.log('Invertida: ' + palavraInvertida);

    



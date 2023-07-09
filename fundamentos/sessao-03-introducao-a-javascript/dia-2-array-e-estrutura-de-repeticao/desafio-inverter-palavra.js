/* 
    ##  Desafio de inverter palavra

    Utilize a estrutura de repetição for para desenvolver um algoritmo 
    que seja capaz de inverter uma palavra, como a palavra “banana” para 
    “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por 
    outras para verificar se seu algoritmo está funcionando corretamente.
*/

let palavra = 'Banana';

console.log('Palavra: ' + palavra);

// Converte a string em um Array de caracteres split()
let arrayCaracteres = palavra.split('');

// Inverte o Array de caracteres com o método reverse()
let arrayInvertido = arrayCaracteres.reverse();

// Junta os caracteres do array em uma palavra
let palavraInvertida = arrayInvertido.join('');

console.log('Invertida: ' + palavraInvertida);

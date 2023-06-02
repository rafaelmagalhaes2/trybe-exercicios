/* 
    Desafio asteriscos 3
    
    Agora, inverta o lado do triângulo. Por exemplo:

    n = 5

        *
       **
      ***
     ****
    *****
*/

let n = 5;
let linha = '';
let espacoVazio = n - 1;

for ( let i = 0; i < n; i++ ) {

    for ( let j = 0; j < n; j++ ) {

        if ( j < espacoVazio ) {
            
            linha += ' ';
        
        } else {
            linha += '*';
        }

    }

    console.log(linha);
    linha = '';
    espacoVazio -= 1;
};
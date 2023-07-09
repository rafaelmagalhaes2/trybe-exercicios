/* 
    Desenvolva uma HOF que retorne o resultado de um sorteio. 
    Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo 
    como parâmetros o número apostado e uma função que checa se o 
    número apostado é igual ao número sorteado. O retorno da sua 
    HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).
*/

// Função Callback
const verificaResultado = (aposta, numSorteado) => aposta === numSorteado;  

// Função sorteio recebe o número apostado e a função callback para
// verificar se a aposta foi sorteada ou não
const sorteio = (aposta, callback) => {
    const numero = Math.floor((Math.random() * 5) + 1);

    return callback(aposta, numero) ? 'Tente novamente' : 'Parabéns, você ganhou!';
};

// A função é passada sem as chaves ()
console.log(sorteio(2, verificaResultado));

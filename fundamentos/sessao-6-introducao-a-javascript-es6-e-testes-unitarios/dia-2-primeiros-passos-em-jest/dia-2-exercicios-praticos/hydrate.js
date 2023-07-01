/* 
    A função hydrate recebe uma string no formato “número bebida” e retorna a sugestão de quantos copos de água 
    você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água, a fim de evitar ressaca.
*/
function hydrate(string) {
  const char = string.split('');
  let copoDagua = 0;

  for (let index = 0; index < string.length; index += 1) {
    const numero = parseInt(char[index]);

    if (numero) {
        copoDagua += numero;
    }
  }

  let copo = 'copo';

  if (copoDagua > 1) {
    copo = 'copos';
  }

  return `${copoDagua} ${copo} de água`;
}

module.exports = hydrate;
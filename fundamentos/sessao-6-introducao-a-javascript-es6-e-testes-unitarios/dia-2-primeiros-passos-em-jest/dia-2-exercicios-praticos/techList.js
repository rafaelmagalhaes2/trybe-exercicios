/*  
  A função techList recebe como parâmetros um array contendo uma lista 
  de tecnologias e uma string com um nome. Para cada tecnologia no array, 
  a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

  {
    tech: 'nomeTecnologia',
    name: name,
  } 

*/

function techList(array, string) {

    if (array.length === 0) {
        return 'Vazio!';
    }

    const arraySorted = array.sort();
    const newArray = [];

    for (let index = 0; index < array.length; index += 1) {
        newArray.push({
            tech: arraySorted[index],
            name: string,
        });
    }
    return newArray;
}

module.exports = techList;
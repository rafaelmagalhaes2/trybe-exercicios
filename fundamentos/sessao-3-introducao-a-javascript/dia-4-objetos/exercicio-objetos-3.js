
/*  Exercício 3

    Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] 
    e armazene na variável achievements a quantidade de títulos no seguinte 
    formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.
*/

const name = 'Marta';
const lastName = 'Silva';
const age = 34;
const medals = { golden: 2, silver: 3 };
const bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

const player = {
  name: name,
  lastName: lastName,
  age: age,
  medals: medals,
  bestInTheWorld: bestInTheWorld,
};

const achievements = `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes`;

console.log(achievements);
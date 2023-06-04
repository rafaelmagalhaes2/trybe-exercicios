
/*  Exercício 2

    Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave, 
    concatene as informações e armazene na variável message no seguinte formato: 
    “A jogadora Marta Silva tem 34 anos de idade”.
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

const message = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`

console.log(message);
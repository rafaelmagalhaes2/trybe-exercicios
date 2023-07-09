const database = require('./database.js');

/* 
   Crie uma função que retorne o dano do dragão.
   O dano será um número aleatório entre 15 (dano mínimo) 
   e o valor do atributo strength (dano máximo).
*/

const dragonDamage = () => {
    // Atribui o dano mínimo ao ataque do dragão  
    const minDmg = 15;
    // Atribui o dano máximo ao ataque
    const maxDmg = Math.floor(Math.random * dragon.strength);

    // Ativa poder máximo
    if (maxDmg > minDmg) {
        return maxDmg;
    } else {
        // Ativa poder minimo
        return minDmg;
    } 
};



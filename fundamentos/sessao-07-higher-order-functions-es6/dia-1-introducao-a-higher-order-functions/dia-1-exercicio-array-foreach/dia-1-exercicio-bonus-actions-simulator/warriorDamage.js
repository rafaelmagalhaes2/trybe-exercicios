const database = require('./database.js');

/* 
    Crie uma função que retorne o dano causado pelo warrior.

    O dano será um número aleatório entre o valor do atributo strength 
    (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
*/

const warriorDamage = () => {
    // Dano mínimo igual ao valor do atributo strength
    const minDmg = database.warrior.strength;
    // Cria um dano aleatório entre poder min e o valor do atributo weaponDmg
    const maxDmg = Math.floor(Math.random * (minDmg * database.warrior.weaponDmg));
    // Verica se o dano aleatório é máximo ou mínimo
    const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;

    return warriorDamage;
}
const database = require('./database.js');

/* 
    Crie uma função que retorne um objeto com duas chaves e dois valores 
    contendo o dano e a mana gasta pelo mago em um turno.

    O dano será um número aleatório entre o valor do atributo intelligence 
    (dano mínimo) e o valor de intelligence * 2 (dano máximo).

    A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: 
    caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem 
    (Ex: “Não possui mana suficiente”), e a mana gasta é 0.
 */

const mageDamage = () => {
    const mageMana = database.mage.mana;
    const minDmg = database.mage.intelligence;
    const maxDmg = minDmg * 2;
    
    const turnStats = {
        manaSpent: 0,
        damageDealt: 'Not enough mana...',
    };

    if (mageMana > 15) {
        const mageDamage = minDmg < maxDmg ? maxDmg : minDmg;
        turnStats.manaSpent = 15;
        turnStats.damageDealt = mageDamage;
        return turnStats;
    }
    return turnStats;
};
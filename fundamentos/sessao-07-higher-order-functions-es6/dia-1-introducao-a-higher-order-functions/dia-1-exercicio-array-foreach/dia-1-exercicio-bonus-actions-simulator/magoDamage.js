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
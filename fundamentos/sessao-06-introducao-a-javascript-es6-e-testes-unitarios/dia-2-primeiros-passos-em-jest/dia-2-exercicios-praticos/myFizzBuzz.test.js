const myFizzBuzz = require('./myFizzBuzz.js');

describe('Requisito 2', () => {
    it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(1)).toBe(1);
        expect(myFizzBuzz('5')).toBeFalsy();
    });
});

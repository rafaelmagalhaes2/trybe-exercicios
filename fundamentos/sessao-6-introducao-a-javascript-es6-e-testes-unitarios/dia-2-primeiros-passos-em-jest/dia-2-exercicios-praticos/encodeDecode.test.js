//
// encodeDecode.test.js
//
// Para as funções encode e decode, crie os seguintes testes em Jest:
//
const { encode, decode } = require('./encodeDecode.js');

describe('Requisito 3', () => {
    it('Testa se encode e decode é função', () => {
        expect(typeof encode).toEqual('function');
        expect(typeof decode).toEqual('function')
    });
    it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
        expect(encode('a')).toEqual('1');
    });
    it('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
        expect(decode('1, 5')).toEqual('a, u');
    });
    it('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
        expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
    });
    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(encode('char').length).toEqual(4);
        expect(decode('string').length).toEqual(6);
    });
});

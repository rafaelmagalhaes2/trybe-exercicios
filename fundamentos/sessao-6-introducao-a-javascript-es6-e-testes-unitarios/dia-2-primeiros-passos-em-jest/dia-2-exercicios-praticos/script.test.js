const removeItem = require('./script.js');

describe('Requisito 1', () => {
    it('Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado. ', () => {
        expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

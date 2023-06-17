const add = require('../support/add')


describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1, 5)).toEqual(6);
    });

    it('should check if arguments are numbers', () => {
        expect(typeof add(1, 2)).toBe('number');
    });

});





const add = require('../add');
const assert = require('assert');

// test('Check if add function is defined', () => {
//     expect(add).toBeDefined();
// });

// test('Adds 1 + 3 to equal 4', () => {
//     expect(add(1, 3)).toBe(4);
// });

// const result = add(1, 3);

// const expected = 4;

// assert.equal(result, expected, 'Add function does not work properly.');

describe('The add function', () => {
    it('should add 1 + 3 to equal 4', () => {
        const actual = add(1, 3);
        const expected = 4;
        expect(actual).toBe(expected);
    });
});
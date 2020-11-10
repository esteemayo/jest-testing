const user = require('../userObj');

const checkUser = () => console.log('Checking User...');

test('Check if user object exists', () => {
    expect(user).toBeDefined();
});

describe('Checking Users', () => {
    beforeEach(() => checkUser());

    test('Check if "firstName" is "John"', () => {
        expect(user.firstName).toBe('John');
    });

    test('Check if "lastName" is "Doe"', () => {
        expect(user.lastName).toBe('Doe');
    });

    test('Check if "age" is "30"', () => {
        expect(user.age).toBe(30);
    });

    test('Check if "job" is "Developer"', () => {
        expect(user.job).toBe('Developer');
    });

    test('Check firstName is truthy', () => {
        expect(user.firstName).toBeTruthy();
    });

    test('Check work to be undefined', () => {
        expect(user.work).toBeFalsy();
    });
});
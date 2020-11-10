const { findUserById, findUserByEmail, findUserByUsername } = require('../users');

describe('The findUserById function', () => {
    it('Check if findUserById function exists', () => {
        expect(findUserById).toBeDefined();
    });

    it('should find a user by id', done => {
        findUserById(1)
            .then(response => {
                expect(response.status).toEqual('success');
            });

        done();
    });

    it('should find a user by id(Using the return promise method)', () => {
        return findUserById(2)
            .then(response => {
                expect(response.status).toEqual('success');
            });
    });

    it('should find a user by id(Using async/await)', async () => {
        const response = await findUserById(3);
        expect(response.status).toEqual('success');
    });

    it('should reject with error if user with id was not found', () => {
        const actual = findUserById(90);

        expect(actual).rejects.toEqual(new Error('User with id: 90 was not found!'));
    });
});

describe('The findUserByEmail function', () => {
    it('Check if findUserByEmail function exists', () => {
        expect(findUserByEmail).toBeDefined();
    });

    it('find a user by email', done => {
        findUserByEmail('jdoe@example.com')
            .then(response => {
                expect(response.status).toEqual('success');

                done();
            });
    });

    it('find a user by email(Using the return promise method)', () => {
        return findUserByEmail('mdoe@example.com')
            .then(response => {
                expect(response.status).toEqual('success');
            });
    });

    it('find a user by email(Using async/await)', async () => {
        const response = await findUserByEmail('alicedoe@example.com');
        expect(response.status).toEqual('success');
    });

    it('rejects with error if user with email was not found', () => {
        const actual = findUserByEmail('user@example.com');

        expect(actual).rejects.toEqual(new Error('User with email: user@example.com was not found!'));
    });
});

describe('The findUserByUsername function', () => {
    it('should check if findUserByUsername function exists', () => {
        expect(findUserByUsername).toBeDefined();
    });

    it('should find a user by username', done => {
        findUserByUsername('jdoe')
            .then(response => {
                expect(response.status).toEqual('success');
            });

        done();
    });

    it('should find a user by username(Using the return promise method)', () => {
        return findUserByUsername('mdoe')
            .then(response => {
                expect(response.status).toEqual('success');
            });
    });

    it('should find a user by username(Using async/await)', async () => {
        const response = await findUserByUsername('alicia');
        expect(response.status).toEqual('success');
    });

    it('should reject with error if user with username was not found', () => {
        const actual = findUserByUsername('someone');
        expect(actual).rejects.toEqual('User with username: someone was not found!');
    });
});
const users = require('./db/users');

const findUserById = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === id);

            if (!user) {
                return reject(new Error(`User with id: ${id} was not found!`));
            }

            return resolve({
                status: 'success',
                message: 'User found successfully!',
                user
            });
        }, 1000);
    });
};

const findUserByEmail = email => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.email === email);

            if (!user) {
                return reject(new Error(`User with email: ${email} was not found!`));
            }

            return resolve({
                status: 'success',
                message: 'User found successfully!',
                user
            });
        }, 1000);
    });
};

const findUserByUsername = username => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.username === username);

            if (!user) {
                return reject(new Error(`User with username: ${username} was not found!`));
            }

            return resolve({
                status: 'success',
                message: 'User found successfully!',
                user
            });
        }, 1000);
    });
};

module.exports = {
    findUserById,
    findUserByEmail,
    findUserByUsername
};
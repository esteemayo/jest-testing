const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    job: 'Developer'
};

user['fullName'] = `${user.firstName} ${user.lastName}`;

module.exports = user;
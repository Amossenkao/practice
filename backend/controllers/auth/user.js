const user = require('express').Router();

user.get('/', (req, res) => {
	res.send('hello there, user!');
});

user.post('/', () => {});

user.put('/', () => {});

user.delete('/', () => {});

module.exports = user;

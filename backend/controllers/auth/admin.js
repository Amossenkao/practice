const admin = require('express').Router();

admin.get('/', (_, res) => {
	res.send('Hello there, admin!');
});

module.exports = admin;

const admin = require('./admin');
const user = require('./user');
const auth = require('express').Router();

auth.use('/user', user).use('/admin', admin);

module.exports = auth;

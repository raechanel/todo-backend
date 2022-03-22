'use strict';


const express = require('express');
const cors = require('cors');
const Data = require('./data');
const { response } = require('express');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const mongoose = require('mongoose');

// // mongoose connection
// mongoose.connect(process.env.DB_URL)
// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function () {
//   console.log('Mongoose is connected')
// });

// routes
app.get('/items', Data.getAllItems);
app.get('/items/:id', Data.getOneItem);
app.post('/items', Data.addAnItem);
app.delete('/items/:id', Data.deleteAnItem);

app.use('*', (request, response) => {
  response.status(404).send('These are not the droids you are looking for.');
});

app.use((error, request, response, next) => {
  response.status(500).send(`My Bad ... ${error.message}`);
});


app.get('/', (request, response) => {
  response.send('This is the server!');
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Listening on ${PORT}`));


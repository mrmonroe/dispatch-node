const mongoose = require('mongoose');
const { createIndexes } = require('./schemas/requests');

console.log.bind(console, process.env);

mongoose.connect(
  `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log(
    `DB Connection on ${process.env.DB_PORT} to ${process.env.DB_DATABASE} Successful!`
  );
});

module.exports = db;

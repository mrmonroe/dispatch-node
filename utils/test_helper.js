// test/test_helper.js
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(
  `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection
  .once('open', () => console.log('Connected!'))
  .on('error', (error) => {
    console.warn('Error : ', error);
  });

beforeEach((done) => {
  mongoose.connection.collections.requests.drop(() => {
    done();
  });
});

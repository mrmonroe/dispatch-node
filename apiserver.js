const client = require('./utils/dispatchDB');
const express = require('express');
const requests = require('./api/handlers/requests');

const app = express();
app.use(express.json());

app.get('/api/v1/requests', (req, res) => {
  console.log(req.query);
  requests.handleGet(req.query).then((result) => {
    res.json(result);
  });
});

app.post('/api/v1/requests', (req, res) => {
  requests.handlePost(req.body).then((result) => {
    res.json(result);
  });
});

app.listen(5000, console.log('App Running On Port 5000!'));

module.exports = app;

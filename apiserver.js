const client = require('./utils/dispatchDB');
const express = require('express');
const requests = require('./api/handlers/requests');

const app = express();
app.use(express.json());

app.get('/api/v1/requests', (req, res) => {
  requests
    .handleGet(req.query)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post('/api/v1/requests', (req, res) => {
  requests
    .handlePost(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.put('/api/v1/requests/:id', (req, res) => {
  requests
    .handlePut(req.body, req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete('/api/v1/requests/:id', (req, res) => {
  requests
    .handleDelete(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(5000, console.log('App Running On Port 5000!'));

module.exports = app;

// server.js - Mockup API server
const express = require('express');
const path = require('path');

const app = express();
const port = 9165;

const apiPath = '/v1/predictions';
const filePath = path.join(__dirname, '../example.json');
const corsHeader = {
  'Access-Control-Allow-Origin': 'http://localhost:3000',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Headers': 'X-Requested-With'
};

app.options(apiPath, (_, res) =>
  res.status(200).set({...corsHeader}).end()
);

app.post(apiPath, (_, res) => (
  res.sendFile(filePath, { headers: {...corsHeader}})
));

app.listen(port, () => {
  console.log(`Mockup API server serving locally at http://localhost:${port}`);
})

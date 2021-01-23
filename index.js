const express = require('express');
const app = express();

const { config } = require('./config');
const moviesAPI = require('./routes/movies.js');

moviesAPI(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});

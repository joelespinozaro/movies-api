const express = require('express');
const app = express();

const { config } = require('./config');
const moviesAPI = require('./routes/movies.js');

//body parser middleware
app.use(express.json());

moviesAPI(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});

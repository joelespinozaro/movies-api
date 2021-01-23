const express = require('express');
const app = express();

const { config } = require('./config');
const moviesAPI = require('./routes/movies.js');

const {
  logErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers.js');

//body parser middleware
app.use(express.json());

moviesAPI(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});

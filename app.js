const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRouter = require('./routes/taskRouter');

const app = express();
app.set('port', process.env.PORT || 3000)

app.use(cors());
app.use(bodyParser.json());
app.use('/', taskRouter);

module.exports = app;

const express = require('express');

const cors = require('cors');

const app = express();

const routes = require('./app/routes/routes');


app.use( cors() );

app.use( express.json() );


routes.init(app);


module.exports = app;

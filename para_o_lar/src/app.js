const express = require('express');
const cors = require('cors');
const appRotas = require('./routers/loja');
const app = express();

app.use(express.json())
app.use(cors())
app.use("/loja", appRotas);


module.exports = app;
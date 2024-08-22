require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

const apiRoutes = require('./routes/api');

app.use('/api',apiRoutes);

app.listen(port, () => {

    console.log(`Server Running at http:localhost:${port}`); 

});

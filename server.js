const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { stateData } = require('./sequelize');

app.use(bodyParser.json());


// API ENDPOINTS
app.get('/api/getregions:id', (req, res) => {
    stateData.findById(req.params.id)
        .then(states => res.json(states));
});

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});
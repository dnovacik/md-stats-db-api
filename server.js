const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { skCity } = require('./sequelize');

app.use(bodyParser.json());


// API ENDPOINTS
app.get('/api/getcity:id', (req, res) => {
    let result = {
        valid: false,
        error: '',
        data: null
    };

    skCity.findByPk(req.params.id)
        .then(city => {
            result.data = city;
            result.valid = true;
            res.send(result);
        })
        .catch(err => {
            result.error = err.name;
            res.send(result);
        });
});

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});
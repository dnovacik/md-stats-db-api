const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { skCity } = require('./sequelize');

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");

    res.on('finish', () => {
        console.info(`${new Date().toString()} - ${req.method} ${res.statusCode}: ${req.originalUrl} - ${res.statusMessage} - ${res.get('Content-Length') || 0}B sent`);
    });

    next();
});

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

// app.get('/api/region:id', (req, res) => {
//     let result = {
//         valid: false,
//         error: '',
//         data: null
//     };
// });

app.get('/api/regionsgj:stateId', (req, res) => {
    let result = {
        valid: true,
        error: '',
        data: null
    };

    if (req.params.stateId) {
        let json;
        try {
            let path = getRegionFileNameById(parseInt(req.params.stateId));
            json = require(path);
        } catch(e) {
            result.error = e.message;
            json = '';
            result.valid = false;
        }

        result.data = json;
        res.send(result);
    } else {
        result.error = 'The ID parameter must not be blank'
        res.send(result);
    }
});

app.get('*', (req, res) => {
    let result = {
        valid: false,
        error: 'route not existing',
        data: null
    };

    res.send(result);
});

function getRegionFileNameById(id) {
    if (id === 35) {
        return './geojson/sk_regions.geo.json';
    }
}

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});
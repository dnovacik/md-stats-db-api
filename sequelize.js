require('dotenv').config()
const Sequelize = require('sequelize');
const skCityModel = require('./models/sk_obce');

const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

//sequelize-auto -h DB_HOST -d DB_SCHEMA -u DB_USER -x DB_PASS -p 5432 -e postgres -o ./models

const skCity = skCityModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('DB Synced');
    });

module.exports = {
    skCity
}
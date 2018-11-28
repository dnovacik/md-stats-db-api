const Sequelize = require('sequelize');

const sequelize = new Sequelize('geokekec', 'root', 'pass', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

const StateData = sequelize.define('stateData', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING
});

sequelize.sync({ force: true })
    .then(() => {
        console.log('DB Synced');
    });

module.exports = {
    StateData
}
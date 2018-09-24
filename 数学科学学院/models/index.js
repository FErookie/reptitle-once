let fs = require('fs');
let path = require('path');
let Sequelize = require('sequelize');
let configs = require('../config/config.js');
let sequelize = new Sequelize(configs.db.toString(), {
    logging: function () {
    }
});

//  auto load
fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js' && file !== 'create.js');
    })
    .forEach(function (file) {
        sequelize.import(path.join(__dirname, file));
    });

let models = sequelize.models;
Object.keys(sequelize.models).forEach(function (modelName) {
    if (models[modelName].options.hasOwnProperty('associate')) {
        models[modelName].options.associate(models);
    }
});

module.exports = sequelize;

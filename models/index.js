const Sequelize = require('sequelize')
const path = require('path')
const fs = require('fs')
const db = require('../db')

const models = {}
const basename = path.basename(__filename)

fs.readdirSync(__dirname)
.filter(file => (file.indexOf('.' !== 0) && file !== basename && file.slice(-3) === '.js'))
.forEach(file => {
    const model = db.import(path.join(__dirname, file))
    models[model.name] = models
})

module.exports = {
    db,
    Sequelize,
    models
}
const Sequelize = require('sequelize')

const DB_USER = process.env.DB_USER || 'homestead'
const DB_PASS = process.env.DB_PASS || 'secret'
const DB_HOST = process.env.DB_HOST || '192.168.10.10'
const DB_NAME = process.env.DB_NAME || 'ejemplo_api'
const DB_PORT = process.env.DB_PORT || 3306
const DB_DIALECT = process.env.DB_DIALECT || 'mysql'

const sequelize = new Sequelize(DB_NAME,
    DB_USER,
    DB_PASS,
    {
        host: DB_HOST,
        dialect: DB_DIALECT,
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        }
    }
)


module.exports = sequelize
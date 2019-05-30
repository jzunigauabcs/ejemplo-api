const express = require('express')
const { db, Sequelize, models } = require('./models')

const app = express()

app.get('/', (req, res) => {
    models.Edificio.create({
        name: 'Salón Python'
    })    
})

db.sync({force: true})
.then(() => {
    app.listen(3000, () => {
        console.log('Success')
       
    })
})

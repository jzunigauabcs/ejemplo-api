const express = require('express')
const { db, Sequelize, models } = require('./models')

const app = express()

app.get('/', (req, res) => {
    db.authenticate()
    .then(() => {
        res.status(200).send('Success connection')
    })
    .catch(err => {
        res.status(500).send('Error to connect')
    })
    
})

app.listen(3000, () => {
    console.log('Success')
   
})
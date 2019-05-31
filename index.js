const express = require('express')
const { db, Sequelize, models } = require('./models')
const uuid = require('uuid/v4')

const app = express()

app.get('/', (req, res) => {
    models.Edificio.create({
        id: uuid(),
        name: 'Macrocentro'
    })
    .then((edificio) => {
        models.Salon.bulkCreate([
            {
                id: uuid(),
                name: 'Lab A',
                EdificioId: edificio.id
            },
            {
                id: uuid(),
                name: 'Lab B',
                EdificioId: edificio.id
            },
            {
                id: uuid(),
                name: 'Lab C',
                EdificioId: edificio.id
            }
        ])
        .then(() => {
            models.Edificio.findAll({ include: [models.Salon] })
            .then((edificios) => {
                res.send(edificios)
            })
        })
    })
})

db.sync({force: true})
.then(() => {
    app.listen(3000, () => {
        console.log('Success')
       
    })
})

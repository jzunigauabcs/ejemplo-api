const express = require('express')
const uuid = require('uuid/v4')
const bodyParser = require('body-parser')
const { db, Sequelize, models } = require('./models')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const API = '/api/v1/'

app.get(`${API}edificios/:name`, (req, res) => {
    models.Edificio.findOne({ where: { name: req.params.name}})
        .then((edificio) => {
            res.send(edificio)
        })
})
//http://localhost:3000/api/v1/edificios
app.get(`${API}edificios`, (req, res) => {
    models.Edificio.findAll()
    .then((edificios) => {
        res.send(edificios)
    })
})

app.get(`${API}edificios/:name/salones`, (req, res) => {
    models.Edificio.findOne({where: {name: req.params.name}})
    .then((edificio) => {
        models.Salon.findAll({ where: { EdificioId: edificio.id } })
        .then((salones) => {
            res.send(response(salones))
        })
    })
    .catch((err) => {
        res.send({
            code: 500,
            msg: 'Error al intentar obtener los edificios'
        })
    })
})

function response (obj) {
    return {
        result: obj
    }
}

//http://localhost:3000/api/v1/edificios
app.post(`${API}edificios`, (req, res) => {
    const edificio = {
        id: uuid(),
        name:req.body.name
    }
    models.Edificio.create(edificio)
    .then(() => {
        res.send({
            code: 200,
            msg: 'Edificio creado corréctamente'
        })
    })
    .catch((err) => {
        res.send({
            code: 500,
            msg: 'Error al intentar crear el recurso'
        })
    })
})


db.sync()
.then(() => {
    app.listen(3000, () => {
        console.log('Success')
       
    })
})

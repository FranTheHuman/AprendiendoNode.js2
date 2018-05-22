const express = require('express')
const router = express.Router()

const model = require('../models/tasks')() // devuelve una funcion por lo que debo inicializarlo, razon por la que hay () al lado del requir

    router.get('/', (req, res) => {
        
        model.find({}, (err, tasks) => {
            if (err) throw err;
    
            res.render('index', {
                title: 'C.R.U.D',
                tasks
            }) 
        }) 
    })

    router.post('/add', (req, res) => {
        let body = req.body
        body.status = false // para que el estado de la tarea comienze como false
        model.create(body, (err, task) => {
            if (err) throw err;
    
            res.redirect('/') 
        })

    })

    router.get('/turn/:id', (req, res) => {
        let id = req.params.id // recibimos el id del enlace
        model.findById(id, (err, task) => { // una vez recibido se lo pasamos a una funcion para que lo busque
            if (err) throw err;

            task.status = !task.status
            task.save()
                .then(() => res.redirect('/')) 
        })
    })

    router.get('/delete/:id', (req, res) => {
        let id = req.params.id 

        model.remove({_id: id}, (err, task) => {
            if (err) throw err;
            res.redirect('/') 
        })
    })

module.exports = router
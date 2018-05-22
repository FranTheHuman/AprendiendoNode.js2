const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// settings

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// middlewares 

app.use(morgan('dev'))
app.use(bodyParser.urlencoded( {extended: false}))

// routes

const routes = require('./routes/routes')
app.use(routes)

// server

app.listen(app.get('port'), () => {
    console.log('Escuchando en el puerto ', app.get('port'))
})
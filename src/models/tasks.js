module.exports = function () {

    var db = require('../libs/db-connection')
    const DB = db()
    var Schema = require('mongoose').Schema

    var Task = Schema({
        title: String,
        description: String,
        status: Boolean
    })

    return DB.model('task', Task)
}

 
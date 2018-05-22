module.exports = function() {
    var mongoose = require('mongoose')
    var Schema = mongoose.Schema;

    let db;

    if (!db) {
        db = mongoose.connect('mongodb://localhost/crud-example')
    }

    var Task = new Schema({
        title: String,
        description: String,
        status: Boolean
    });
    
    return mongoose.model('task', Task)
}﻿
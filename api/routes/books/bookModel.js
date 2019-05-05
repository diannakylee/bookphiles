'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = exports.schema = new Schema({
    title: String,
    author: String,
    year: String,
    image: String,
});

exports.model = mongoose.model('Books', bookSchema);
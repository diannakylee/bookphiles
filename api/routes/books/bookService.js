'use strict';

const { model: Book } = require('./bookModel');

exports.listBooks = async () => {
    try {
        return await Book.find({});
    } catch (e) {
        throw e;
    }
};

exports.addBook = async(bookData) => {
    try {
        const book = new Book(bookData);
        return await cohort.save();
    } catch (e) {
        throw e;
    }
};
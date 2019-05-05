'use strict';

const express = require('express');
const router = express.Router();

const requiresAuth = require('../../middleware/auth');
const { logRequest } = require('../../utils');

// Get book
router.route('/')
  .get( 
    async (req, res, next) => {
      try{
        const books = await bookService.listBooks();
        res.json({ data: books });
        logRequest(req, res);
      } catch (e) {
        next(e);
      }
    })
  // Post Book
  .post(async (req, res, next) => {
    try {

    } catch(e) {
      next(e)
    }
  });


// Setting Up Params
// router.route('/:bookId')
//   .get((req, res, next) => {
//     const { params } = req;
//     const { bookId } = params;
//     const book = book[bookId];
//     res.json({ data: [book] });
//   });

  exports.router = router;

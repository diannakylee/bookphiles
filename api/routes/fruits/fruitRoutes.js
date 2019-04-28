'use strict';

const express = require('express');
const router = express.Router();

const fruits = [
  { id: 0, name: 'apple' },
  { id: 1, name: 'strawberry' },
  { id: 2, name: 'rasberry' },
  { id: 3, name: 'grape' },
  { id: 4, name: 'pear' },
];

router.route('/')
  .get((req, res, next) => {
    res.json({ data: fruits });
  });

router.route('/:fruitId')
  .get((req, res, next) => {
    const { params } = req;
    const { fruitId } = params;
    const fruit = fruits[fruitId];
    res.json({ data: [fruit] });
  });

  exports.router = router;

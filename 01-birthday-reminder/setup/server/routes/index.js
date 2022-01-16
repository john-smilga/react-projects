const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Authors = require('../models/Authors');

// GET route to get all the authors

router.get('/authors', (req, res, next) => {
  Authors.find()
    .then((allAuthors) => res.json(allAuthors))
    .catch((err) => res.json(err));
});

module.exports = router;

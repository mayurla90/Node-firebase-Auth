const express = require('express');
const { addCities
      } = require('../controllers/cityController');

const router = express.Router();

router.post('/cities', addCities)



module.exports = {
    routes: router
}
const express = require('express')
const router = express.Router()
const Dog = require('../models/Dog')

router.get('/', (req, res) => {
    Dog.find({})
        .then(dogs => res.json(dogs))
})

module.exports = router
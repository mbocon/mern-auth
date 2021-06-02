const mongoose = require('mongoose')

const dogSchema = mongoose.Schema({
    name: String,
    age: Number,
    frequency: String,
    imageUrl: String
})

const Dog = mongoose.model('Dog', dogSchema)

module.exports = { Dog }
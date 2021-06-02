const express = require('express')
const cors = require('cors')

const dogController = require('./controllers/dogs.js')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/dogs', dogController)

app.listen(3001, () => console.log('Listening on port 3001 :)'))

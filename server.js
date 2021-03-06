const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 6565

const db = require('./models')
const app = express()

app.use(logger('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://user:password@ds141168.mlab.com:41168/heroku_fgg6k2jt', {
  useNewUrlParser: true
})

require('./routes/html-routes')(app)
require('./routes/api-routes')(app)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})

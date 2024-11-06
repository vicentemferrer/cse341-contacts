const express = require('express')

const routes = require('./src/routes/')

const { HOST, PORT, MONGODB_URI } = process.env

const app = express()

app.use('/', routes)

app.listen(PORT || 3000, () => {
    console.log(`App listening on http://${HOST}:${PORT}`)
})
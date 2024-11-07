const { Router } = require('express')

const contactsRoute = require('./contacts.route.js')

const router = new Router()

router.get('/', (req, res) => res.send('Hello World!'))

router.use('/contacts', contactsRoute)

module.exports = router
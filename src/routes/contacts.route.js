const { Router } = require('express')

const { getContacts, getContact } = require('../controllers/contacts.controller.js')

const router = new Router()

router.get('/', getContacts)
router.get('/:id', getContact)

module.exports = router
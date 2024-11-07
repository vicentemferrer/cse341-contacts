const { getOne, getAll } = require('../models/contacts.model.js')

async function getContacts(req, res) {
    const result = await getAll()

    res.setHeader('Content-Type', 'application/json')
    return res.json(result)
}

async function getContact(req, res) {
    const [result] = await getOne(req.params.id)

    res.setHeader('Content-Type', 'application/json')
    return res.json(result)
}

module.exports = {
    getContacts,
    getContact
}
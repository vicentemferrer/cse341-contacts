const { ObjectId } = require('mongodb')
const Database = require('../db/mongodb.manager.js')


async function getAll() {
    try {
        const db = await Database.get()

        return await db.collection('contacts').find().toArray()
    } catch (err) {
        console.log(`Fail on query: ${err.message}`)
    }
}

async function getOne(id) {
    const contactId = ObjectId.createFromHexString(id)

    try {
        const db = await Database.get()

        return await db.collection('contacts').find({ _id: contactId }).toArray()
    } catch (err) {
        console.log(`Fail on query: ${err.message}`)
    }
}

module.exports = {
    getAll,
    getOne
}
const { MongoClient } = require('mongodb')

class Database {
    static client

    static async init(callback, uri) {
        if (Database.client) {
            console.log('Database is already initialized!')
            return callback(null)
        }

        await MongoClient.connect(uri)
            .then(client => {
                Database.client = client
                return callback(null)
            })
            .catch(err => callback(err))
    }

    static async get() {
        if (!Database.client) throw Error('Database not initialized')

        try {
            return await Database.client.db()
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = Database
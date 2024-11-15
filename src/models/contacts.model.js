const { ObjectId } = require('mongodb');
const Database = require('../db/mongodb.manager.js');

async function getAll() {
  try {
    const db = await Database.get();

    return await db.collection('contacts').find().toArray();
  } catch (err) {
    console.error(`Fail on getAll: ${err.message}`);
    throw new Error(err.message || 'Some error occurred getting contacts data');
  }
}

async function getOne(id) {
  const contactId = ObjectId.createFromHexString(id);

  try {
    const db = await Database.get();

    return await db.collection('contacts').findOne({ _id: contactId });
  } catch (err) {
    console.error(`Fail on getOne: ${err.message}`);
    throw new Error(err.message || 'Some error occurred getting contact data');
  }
}

async function createOne(contact) {
  try {
    const db = await Database.get();

    return await db.collection('contacts').insertOne(contact);
  } catch (err) {
    console.error(`Fail on createOne: ${err.message}`);
    throw new Error(err.message || 'Some error occurred while inserting contact');
  }
}

async function updateOne(id, contact) {
  const contactId = ObjectId.createFromHexString(id);

  try {
    const db = await Database.get();

    return await db.collection('contacts').replaceOne({ _id: contactId }, contact);
  } catch (err) {
    console.error(`Fail on updateOne: ${err.message}`);
    throw new Error(err.message || 'Some error occurred while updating contact');
  }
}

async function deleteOne(id) {
  const contactId = ObjectId.createFromHexString(id);

  try {
    const db = await Database.get();

    return await db.collection('contacts').deleteOne({ _id: contactId });
  } catch (err) {
    console.error(`Fail on deleteOne: ${err.message}`);
    throw new Error(err.message || 'Some error occurred while deleting contact');
  }
}

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
};

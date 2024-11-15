const { getOne, getAll, createOne, updateOne, deleteOne } = require('../models/contacts.model.js');
const { AppError } = require('../utils/error.util.js');

const { Contact } = require('../utils/contact.class.js');

async function getContacts(req, res) {
  try {
    const result = await getAll();

    if (result.length === 0) throw new AppError(404, 'Resources not found');

    return res.status(200).setHeader('Content-Type', 'application/json').json(result);
  } catch (err) {
    throw new AppError(err.status || 500, err.message);
  }
}

async function getContact(req, res) {
  try {
    const result = await getOne(req.params.id);

    if (!result) throw new AppError(404, 'Resource not found');

    return res.status(200).setHeader('Content-Type', 'application/json').json(result);
  } catch (err) {
    throw new AppError(err.status || 500, err.message);
  }
}

async function createContact(req, res) {
  const contact = new Contact(req.body);

  try {
    const result = await createOne(contact);

    if (!result.acknowledge) throw new Error(result.error || 'Not created contact');

    return res
      .status(201)
      .setHeader('Content-Type', 'application/json')
      .json({ contactID: result.insertedId });
  } catch (err) {
    throw new AppError(err.status || 500, err.message);
  }
}

async function updateContact(req, res) {
  const {
    body,
    params: { id }
  } = req;

  const contact = new Contact(body);

  try {
    const result = await updateOne(id, contact);

    if (result.modifiedCount <= 0) throw new Error(result.error || 'Not modified contact');

    return res.status(202).setHeader('Content-Type', 'application/json').json({ status: 202 });
  } catch (err) {
    throw new AppError(err.status || 500, err.message);
  }
}

async function deleteContact(req, res) {
  try {
    const result = await deleteOne(req.params.id);

    if (result.modifiedCount <= 0) throw new Error(result.error || 'Not deleted contact');

    return res.status(202).setHeader('Content-Type', 'application/json').json({ status: 202 });
  } catch (err) {
    throw new AppError(err.status || 500, err.message);
  }
}

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
};

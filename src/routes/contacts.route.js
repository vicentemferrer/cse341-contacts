const { Router } = require('express');
const { handleErrors } = require('../utils/error.util.js');

const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contacts.controller.js');

const router = new Router();

router.get('/', handleErrors(getContacts));
router.post('/', handleErrors(createContact));

router.get('/:id', handleErrors(getContact));
router.put('/:id', handleErrors(updateContact));
router.delete('/:id', handleErrors(deleteContact));

module.exports = router;

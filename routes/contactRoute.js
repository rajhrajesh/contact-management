const express = require('express');
const authenticateToken = require('../middleware/authToken'); 
const { getContacts, getContact, updateContact, createContact, deleteContact } = require('../controllers/contactController');

const router = express.Router();

router.get('/', authenticateToken, getContacts);
router.get('/:id', authenticateToken, getContact);
router.post('/', authenticateToken, createContact);
router.put('/:id', authenticateToken, updateContact);
router.delete('/:id', authenticateToken, deleteContact);

module.exports = router;

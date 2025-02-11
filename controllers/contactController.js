const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

const getContacts = asyncHandler(async (req, res) => {
    if (!req.user) {
        res.status(401);
        throw new Error('Unauthorized, user not found');
    }

    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone, address } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are mandatory');
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        address,
        user_id: req.user.id,
    });

    res.status(201).json({
        message: 'Contact added successfully',
        contact,
    });
});

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error(`Contact ${req.params.id} not found`);
    }

    res.status(200).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error(`Contact ${req.params.id} not found`);
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error(`User does not have permission to update contact ${req.params.id}`);
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json({
        message: 'Contact updated successfully',
        updatedContact,
    });
});

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error(`Contact ${req.params.id} not found`);
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error(`User does not have permission to delete contact ${req.params.id}`);
    }

    await Contact.deleteOne({ _id: req.params.id });

    res.status(200).json({
        message: 'Contact deleted successfully',
        contact,
    });
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };

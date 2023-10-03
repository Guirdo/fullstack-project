const contact = require('../models/Contact')

const getAllContacts = async (req, res) => {
  const contacts = await contact.getAll()
  res.status(201).send({contacts})
}

const insertContact = async (req, res) => {
  const { name, description, phone, done } = req.body

  await contact.insertContact({ name, description, phone, done })
    .then((response) => {
      res.status(201).send({message: 'Contacto agregada'})
    })
    .catch((error) => {
      res.status(401).send({message: 'Error, datos invalidos'})
    })
}

const updateContact = async (req,res) => {
  const { id } = req.params
  const { name, description, phone, done } = req.body

  await contact.updateContact(id, { name, description, phone, done })
  .then((response) => {
    res.status(201).send({message: 'Contacto actualizada'})
  })
  .catch((error) => {
    res.status(401).send({message: 'Error, datos invalidos'})
  })
}

const removeContact = async (req,res) => {
  const { id } = req.params

  await contact.removeContact(id)
  .then((response) => {
    res.status(201).send({message: 'Contacto Eliminada'})
  })
  .catch((error) => {
    res.status(401).send({message: 'Error, contacto no encontrada'})
  })
}

const getOneContact = async (req,res) => {
  const { id } = req.params

  const result = await contact.getContact(id)
  res.status(201).send({contact: result})
}

module.exports = {
  getAllContacts,
  insertContact,
  updateContact,
  removeContact,
  getOneContact
}


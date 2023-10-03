const mongoose = require('mongoose')

const contactSchema = {
  name: {
    type: String,
    required: true,
  },
  description: String,
  phone: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false
  }
}

const Contact = mongoose.model('Contact', contactSchema)

const getAll = async () => {
  const result = await Contact.find()
  return result
}

const insertContact = async (contact) => {
  return await Contact.create(contact)
}

const updateContact = async (id, newContact) => {
  const oldContact = await Contact.findById(id)

  oldContact.name = newContact.name;
  oldContact.description = newContact.description
  oldContact.phone = newContact.phone
  oldContact.done = newContact.done

  return await oldContact.save()
}

const removeContact = async (id) => {
  return await Contact.deleteOne({_id: id})
}

const getContact = async (id) => {
  return await Contact.findById(id)
}

module.exports = {
  getAll,
  insertContact,
  updateContact,
  removeContact,
  getContact
}

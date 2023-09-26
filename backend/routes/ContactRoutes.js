const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController')

// Obtener todas las contactos
router.get('/', ContactController.getAllContacts)

// Agregar una nueva contacto
router.post('/', ContactController.insertContact)

// Actualizar una contacto
router.patch('/:id', ContactController.updateContact)

// Eliminar una contacto
router.delete('/:id', ContactController.removeContact)

// Obtener una contacto
router.get('/:id', ContactController.getOneContact)


module.exports = router
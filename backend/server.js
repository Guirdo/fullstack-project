const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userModel = require('./models/User')
const ContactRoutes = require('./routes/ContactRoutes')
const PORT = 3000

const SECRET_KEY = 'desde septiembre se siente que viene diciembre'

const server = express()

server.use(express.json())

//localhost:3000/auth
server.use('/api/v1/auth', (req, res) => {
  const { email, password } = req.body

  const validatedUser = userModel.validateUser(email, password)

  if (validatedUser) {
    const token = jwt.sign({ validatedUser }, SECRET_KEY, { expiresIn: '5m' })
    res.status(201).send({ token })
  } else {
    res.status(401).send({ message: 'Correo o contraseña incorrectos' })
  }

})

const validateToken = (req, res, next) => {
  const authHeader = req.get('authorization')

  if (authHeader) {
    // Bearer <token>
    const accessToken = authHeader.split(' ')[1]

    jwt.verify(accessToken, SECRET_KEY, (error, decode) => {
      if (error) {
        res.status(401).send({ message: 'Token no valido' })
      } else {
        next()
      }
    })
  } else {
    res.status(404).send({message: 'Petición incorrecta'})
  }
}

server.use('/api/v1/contacts', validateToken, ContactRoutes)

const mongooseConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://mali:K0J16H2xFEbnUcpm@cluster0.tsrujhv.mongodb.net/Contacts?retryWrites=true&w=majority')
    console.log('Conexión exitosa')
  } catch (error) {
    console.error(error)
  }
}

mongooseConnect()

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`)
})
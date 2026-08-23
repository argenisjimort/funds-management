require(`dotenv`).config()

const MONGODB_URI = process.env.NODE_ENV === `test` ?
    process.env.MONGODB_TEST_URI :
    process.env.MONGODB_URI


const PORT = process.env.PORT || 3001


const DEFAULT_USER_CATEGORIES = ['salud', 'ocio', 'casa', 'café', 'educación', 'regalos', 'alimentación', 'familia', 'rutina', 'transporte', 'otros', 'vehiculo', 'compras']

module.exports = { MONGODB_URI, PORT, DEFAULT_USER_CATEGORIES }
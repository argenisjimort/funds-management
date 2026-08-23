const mongoose = require(`mongoose`)


const userSchema = mongoose.Schema({
    username: {type: String, minLength: 3, requied: true, unique: true},
    name: {type: String, minlength: 3, required: true},
    passwordHash: {type: String, required: true},
    defaultCurrency: {type: String, default: 'USD', required: true}
})


userSchema.set(`toJSON`, {
    transform: (object, returnedObject) => {
        returnedObject.id = returnedObject._id

        delete returnedObject._id
        delete returnedObject.passwordHash
        delete returnedObject.__v
    }
})


module.exports = mongoose.model(`User`, userSchema)
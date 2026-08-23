const mongoose = require(`mongoose`)

const categorySchema = mongoose.Schema({
    name: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: `User`, required: true}
})


categorySchema.set(`toJSON`, {
    transform: (object, returnedObject) => {

        returnedObject.id = returnedObject._id

        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model(`Category`, categorySchema)
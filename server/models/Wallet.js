const mongoose = require(`mongoose`)

const walletSchema = mongoose.Schema({
    name: {type: String, required: true},
    currency: {type: String, default: `COP`},
    initialAmount: {type: Number, default: 0},
    user: {type: mongoose.Schema.Types.ObjectId, ref: `User`, required: true},
    willShowOnBalance: {type: Boolean, default: true}
}, {timestamps: true})


walletSchema.set(`toJSON`, {
    transform: (object, returnedObject) => {

        returnedObject.id = returnedObject._id

        delete returnedObject._id
        delete returnedObject.__v
    }
})



module.exports = mongoose.model('Wallet', walletSchema)
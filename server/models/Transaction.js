const mongoose = require(`mongoose`)


const transanctionSchema = mongoose.Schema({
    amount: {type: Number, required: true},
    currency: {type: String, default: `COP`},
    type: { type: String, enum: [`income`, `expense`, `transfer`], required: true },
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
    description: {type: String},
    date: {type: Date, default: Date.now, required: true},
    wallet: {type: mongoose.Schema.Types.ObjectId, ref: `Wallet`, required: true},

    user: {type: mongoose.Schema.Types.ObjectId, ref: `User`, required: true},

    //optional, should be used only when the transaction is a transfer
    toWallet: {type: mongoose.Schema.Types.ObjectId, ref: `Wallet`}
})


transanctionSchema.set(`toJSON`, {
    transform: (object, returnedObject) => {

        returnedObject.id = returnedObject._id

        delete returnedObject._id
        delete returnedObject.__v
    }
})



module.exports = mongoose.model(`Transaction`, transanctionSchema)

// // models/transaction.model.js
// const transactionSchema = new mongoose.Schema({
//     amount: { type: Number, required: true },       // positive number
//     type: { type: String, enum: ['income', 'expense', 'transfer'], required: true },
//     description: { type: String },
//     date: { type: Date, default: Date.now },
//     account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
//     category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     // only used when type === 'transfer' (moving money between your own accounts)
//     toAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
//   }, { timestamps: true })
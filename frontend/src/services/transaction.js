import axios from "axios";
import { getRequestAuthHeader } from "../utils/requestAuthHeader";
import { transactionsApiURl } from "../utils/config";


export const createTransaction = async (amount, currency, category, wallet, description='', type, toWallet='NA' ) => {
    // amount: { type: Number, required: true },
    // currency: { type: String, default: `COP` },
    // category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    // wallet: { type: mongoose.Schema.Types.ObjectId, ref: `Wallet`, required: true },
    // description: { type: String },
    // type: { type: String, enum: [`income`, `expense`, `transfer`], required: true },
    
    
    // date: { type: Date, default: Date.now, required: true },

    // user: { type: mongoose.Schema.Types.ObjectId, ref: `User`, required: true },

    // //optional, should be used only when the transaction is a transfer
    // toWallet: { type: mongoose.Schema.Types.ObjectId, ref: `Wallet` }

    const response = await axios.post(transactionsApiURl, {amount, currency, category, wallet, description, type, toWallet}, getRequestAuthHeader())

}
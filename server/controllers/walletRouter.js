const walletRouter = require(`express`).Router()
const {userExtractor} = require(`../utils/middleware`)

const logger = require(`../utils/logger`)
/** @type {import('mongoose').Model} */
const Wallet = require(`../models/Wallet`)
/** @type {import('mongoose').Model} */
const User = require(`../models/User`)
/** @type {import('mongoose').Model} */
const Transaction = require(`../models/Transaction`)


walletRouter.get(`/`, async (request, response, next) => {
    const res = await Wallet.find({})
    console.log(res.data)
    response.json(res)
})

walletRouter.get(`/:id`, async (request, response, next) => {
    const res = await Wallet.findById(request.params.id)
    if(!res) return response.status(400).json({error: "NOT FOUND"}) //return needed just so it doesnt exceute anything else
    const res2 = await Transaction.find({wallet: request.params.id})
    // logger.info(res2)
    const walletWithTransactions = {...res.toJSON(), transactions: res2}
    // console.log( allResponse )
    
    response.json(walletWithTransactions)
})

//  name: {type: String, required: true},
//     currency: {type: String, default: `COP`},
//     initialAmount: {type: Number, default: 0},
//     user: {type: mongoose.Schema.Types.ObjectId, ref: `User`},
//     willShowOnBalance: {type: Boolean, default: true}


walletRouter.post(`/`, userExtractor,  async (request, response, next) => {
    const {name, initialAmount, ...restOfInfo} = request.body
    // logger.info(`after comming back to the post '/'`)
    // logger.info(name, restOfInfo)
    console.log(initialAmount)

    const initialAmountInCents = Math.floor(initialAmount * 100)

    console.log(initialAmountInCents)
    if(name.length < 3) return response.status(400).send({error: `Wallet name too short`})
    
    // const OwnerUser = await User.findById(request.user) //request.user comes from the middleware 'userExtractor'
    // if(!OwnerUser) return response.status(400).send({error: `user not found`})
    
    if(!request.user) return response.status(400).send({error: `user not found`})
    //request.user comes from the middleware.userExtractor

    // logger.info(`after all the user checks b4 creating wallet`)

    const res = await Wallet.create({
        name,
        user: request.user.id,
        initialAmountInCents,
        ...restOfInfo,

    }) // if this fails it throwns an error
    // and the response.status below is not executed
    // as long as you use await, if not even if it fails it sends 201

    // logger.info(`after creating the waller`)
    response.status(201).send(res)
    //if you forget to put this response.status the request hangs, even tho it was completed
    //so dont forget the response.send() (again) :)
})



module.exports = walletRouter
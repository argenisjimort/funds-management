const logger = require(`../utils/logger`)

const transanctionRouter = require(`express`).Router()
/** @type {import('mongoose').Model} */
const Transaction = require(`../models/Transaction`)
const { userExtractor } = require('../utils/middleware')

transanctionRouter.get(`/`, async (request, response, next) => {
    const transanctions = await Transaction.find({})
    response.json(transanctions)
})

transanctionRouter.post(`/`, userExtractor, async (request, response, next) => {
    // logger.info(request.user)
    // logger.info(request.body)

    //amount, currency, category, wallet, description, type, toWallet
    const {amount, type, wallet, toWallet, ...resOfInfo} = request.body
    const amountInCents = Math.floor(amount * 100)
    
    const res = await Transaction.create({amountInCents, type, wallet, ...resOfInfo, "user": request.user.id})
    if (type == `TRANSFER_OUT`) {
        const res2 = await Transaction.create({amountInCents, type: `TRANSFER_IN`, wallet: toWallet, ...resOfInfo, "user": request.user.id})
        return response.status(201).send({ transactions: [res, res2] })
    }



    response.status(201).send({ transactions: [res] })
})


transanctionRouter.get(`/:id`, async (request, response, next) => {
    const transanction = await Transaction.findById(request.params.id)
    response.json(transanction)
})



module.exports = transanctionRouter
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

    const {amount, ...resOfInfo} = request.body
    const amountInCents = Math.floor(amount * 100)
    
    const res = await Transaction.create({amountInCents, ...resOfInfo, "user": request.user.id})
    response.json(res)
})


transanctionRouter.get(`/:id`, async (request, response, next) => {
    const transanction = await Transaction.findById(request.params.id)
    response.json(transanction)
})



module.exports = transanctionRouter
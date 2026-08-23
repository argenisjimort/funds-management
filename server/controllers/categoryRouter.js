const categoryRouter = require(`express`).Router()

const { response } = require('../app')
/** @type {import('mongoose').Model} */
const Category = require(`../models/Category`)
const { userExtractor } = require('../utils/middleware')


categoryRouter.get(`/`, async (request, response, next) => {
    const res = await Category.find({})
    response.json(res)
})


// name: {type: String, required: true},
// user: {type: mongoose.Schema.Types.ObjectId, ref: `User`, required: true}

categoryRouter.post(`/`, userExtractor, async (request, response, next) => {
    const res = await Category.create({...request.body, user: request.user.id })
    response.json(res)
})


module.exports = categoryRouter
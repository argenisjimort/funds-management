const userRouter = require(`express`).Router()

const logger = require(`../utils/logger`)
const bcrypt = require(`bcrypt`)
const { userExtractor }= require(`../utils/middleware`)


/** @type {import('mongoose').Model} */
const User = require(`../models/User`)
/** @type {import('mongoose').Model} */
const Category = require(`../models/Category`)
/** @type {import('mongoose').Model} */
const Wallet = require(`../models/Wallet`)

const { DEFAULT_USER_CATEGORIES } = require('../utils/config')







userRouter.get(`/`, async (request, response, next) => {
    const users =  await User.find({})
    response.json(users)
})






userRouter.get(`/:id`, async (request, response, next) => {
    const user =  await User.findById(request.params.id)
    if(!user) return response.status(400).json({error: "NOT FOUND"}) //return needed just so it doesnt exceute anything else
    response.json(user)
})



userRouter.get(`/me/categories`, userExtractor, async (request, response, next) => {
    // logger.info( request.user )
    // logger.info(request.user.id)
    // logger.info(request.params.id)
    // if( String(request.user.id)) response.status(400).send({ error: `THis user doesnt have access to these categories`})
    

    const res = await Category.find({user: request.user.id})
    // logger.info( res )


    response.json(res)
})


userRouter.get(`/me/wallets`, userExtractor, async (request, response, next) => {
    const res = await Wallet.find({user: request.user.id})
    // logger.info(res)
    response.json(res)
})


userRouter.post(`/`, async (request, response, next) => {
    //de-structure arguments
    const {password, username, name} = request.body

    if(password.length < 5) //if password is too short, return error 400
        return response.status(400).send({error: "password needs to be at least 5 characters long"})


    //create user, saving only the hashed password, and not the password itself
    const res = await User.create({
        username,
        name,
        passwordHash: await bcrypt.hash(password, 10)
    })

    DEFAULT_USER_CATEGORIES.map( category => Category.create({name: category, user: res._id}) )




    // logger.info(res)
    response.json(res)
})








module.exports = userRouter
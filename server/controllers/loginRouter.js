const loginRouter = require(`express`).Router()

const bcrypt = require(`bcrypt`)
const jsonWebToken = require(`jsonwebtoken`)

/** @type {import('mongoose').Model} */
const User = require(`../models/User`)
const { default: logger } = require('../../frontend/src/utils/logger')
const { userExtractor } = require('../utils/middleware')


loginRouter.post(`/`, async (request, response, next) => {
    // logger.info(`at the login route`)
    const {username, password} = request.body

    const foundUser = await User.findOne({username})
    if(!foundUser) return response.status(404).send({error: `user Not found`})

    
    //bcrypt returns true or false if verified, and we gotta await fot it
    if( !await bcrypt.compare( password, foundUser.passwordHash ) ) return response.status(401).send({error: `could not verify user`})

    const loginToken = jsonWebToken.sign({
        username: foundUser.username,
        id: foundUser._id,
        // defaultCurrency: foundUser.defaultCurrency
    }, process.env.CRYPT_SECRET)


    return response.status(200).send({loginToken, username, defaultCurrency: foundUser.defaultCurrency} )

})


loginRouter.get( `/check`, userExtractor, async (request, response, next) => {
    return response.json({ ...request.user })
} )

module.exports = loginRouter
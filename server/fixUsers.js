
const config = require(`./utils/config`)
const mongoose = require(`mongoose`)

/** @type {import('mongoose').Model} */
const User = require(`./models/User`)


mongoose.connect( config.MONGODB_URI, {family: 4} )
    .then( () => User.updateMany(
        {defaultCurrency: {$exists: false}},
        { $set: {defaultCurrency: 'USD'} }
    ))
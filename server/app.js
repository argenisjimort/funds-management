const config = require(`./utils/config`)
const logger = require(`./utils/logger`)

const { loginTokenExtractor, errorHandler } = require("./utils/middleware")

const transanctionRouter = require(`./controllers/transactionRouter`)
const userRouter = require(`./controllers/userRouter`)
const walletRouter = require(`./controllers/walletRouter`)
const loginRouter = require(`./controllers/loginRouter`)
const categoryRouter = require(`./controllers/categoryRouter`)

const mongoose = require(`mongoose`)
const express = require(`express`)








//app init
const app = express()
app.use(express.json())





//middleware
app.use(loginTokenExtractor)




//routes
app.use(`/api/transactions`, transanctionRouter)
app.use(`/api/users`, userRouter)
app.use(`/api/wallets`, walletRouter)
app.use(`/api/categories`, categoryRouter)

app.use(`/api/login`, loginRouter)








mongoose.connect( config.MONGODB_URI, {family: 4} )
    .then( () => logger.info(`Connected to mongoDB`))
    .catch( (error) => logger.error(error) )



app.use(errorHandler)


module.exports = app
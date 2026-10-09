import axios from "axios"
import { usersApiUrl } from "../utils/config"
import logger from "../utils/logger"
import { getRequestAuthHeader } from "../utils/requestAuthHeader"

// const user = JSON.parse(getPersistentUser())



const getLoggedUserCategories = async () => {
    const res = await axios.get(`${usersApiUrl}/me/categories`, getRequestAuthHeader())
    return res
}


const getLoggedUserWallets = async () => {


    const res = await axios.get(`${usersApiUrl}/me/wallets`, getRequestAuthHeader())
    // logger.info(res)
    return res
}


export default { getLoggedUserCategories, getLoggedUserWallets }
import axios from "axios";
import { walletsApiUrl } from "../utils/config";
import { getRequestAuthHeader } from "../utils/requestAuthHeader";
import logger from "../utils/logger";
import { useLoggedUserStore } from "../store/loggedUserStore";

export const createWallet = async (name, initialAmount=0, currency,  willShowOnBalance=true) => {
    // const request = {name, currency, initialAmount, willShowOnBalance}
    // logger.info(request)
    // logger.info(getRequestAuthHeader())
    const res = await axios.post(walletsApiUrl, {name, currency, initialAmount, willShowOnBalance}, getRequestAuthHeader() )
    // logger.info(res)
}
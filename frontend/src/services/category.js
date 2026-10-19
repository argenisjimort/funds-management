import axios from "axios"
import { categoriesApiUrl } from "../utils/config"
import { getRequestAuthHeader } from "../utils/requestAuthHeader"

export const createCategory = async (name) => {
    const response = await axios.post( categoriesApiUrl, {name}, getRequestAuthHeader() )
    return response
}
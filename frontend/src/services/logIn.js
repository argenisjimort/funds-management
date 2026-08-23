import { loginApiUrl } from "../utils/config"
import axios from 'axios'

export const login = async (username, password) => {
    const response = await axios.post(loginApiUrl, {username, password})
    //if the axios.post response status is >= 400, it will throw an error
    //and then this last line would not be executed
    return response //response.data is axios equivalent to response.body
}


export default { login }
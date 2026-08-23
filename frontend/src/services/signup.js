import axios from "axios";
import { signupApiUrl } from "../utils/config";

export const signup = async (username, name, password) => {
    const response = await axios.post(signupApiUrl, {username, name, password})
    return response
}

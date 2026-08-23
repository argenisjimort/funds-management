import { getPersistentUser } from "../services/persistentUser"

export const getRequestAuthHeader = () => {
    return {
        headers: {
            Authorization: `Bearer ${JSON.parse(getPersistentUser()).loginToken}`
        }
    }
}
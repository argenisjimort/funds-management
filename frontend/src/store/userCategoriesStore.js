import { create } from 'zustand'
import  loggedUserService  from "../services/loggedUser"
import logger from '../utils/logger'




export const useUserCategoriesStore = create( (set, get)=> ({
    categories: [],
    getUserCategories: async () => {
        const response = await loggedUserService.getLoggedUserCategories()
        // logger.info(response.data)
        set({ categories: response.data })
    },
    clearUserCategories: () => {
        set({ categories: [] })
    }
}))
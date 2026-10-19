import { create } from 'zustand'
import  loggedUserService  from "../services/loggedUser"
import logger from '../utils/logger'
import { createCategory } from '../services/category'




export const useUserCategoriesStore = create( (set, get)=> ({
    categories: [],
    getUserCategories: async () => {
        const response = await loggedUserService.getLoggedUserCategories()
        // logger.info(response.data)
        set({ categories: response.data })
    },
    clearUserCategories: () => {
        set({ categories: [] })
    },
    createUserCategory: async (name) => {
        const res = await createCategory(name)
        console.log( res.status )
        if( res.status === 201 ) set({ categories: get().categories.concat( res.data ) })
    }
}))
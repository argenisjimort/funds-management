import { create } from 'zustand'

import { getPersistentUser, setPersistentUser, removePersistentUser } from '../services/persistentUser'
import logInService from '../services/logIn'
import logger from '../utils/logger'

export const useLoggedUserStore = create( (set, get) => ({ //return:
    isLoggedIn: false,
    hasCheckedAuth: false,
    loggedUser: {},
    checkForLogin: () => {
        const userFromLocalStorage = JSON.parse(getPersistentUser())
        // logger.info(userFromLocalStorage)
        set( {hasCheckedAuth: true, loggedUser: userFromLocalStorage, isLoggedIn: userFromLocalStorage ? true : false} )
        // logger.info(userFromLocalStorage ? true : false)
        //hascheckedAuth always has to go true here,
        //userFromLocalStorage will the the response (the object or null)
        //if the object exists, is logged in will be true, if its null it will be false
        //hopefully its not to obscure, i dont wanna create if-else statements

        // logger.info( get().isLoggedIn )
        // logger.info( get().loggedUser )
    },
    logIn: async (username, password) => {
        const response = await logInService.login(username, password)
        // logger.info(response)
        // logger.info(response.data)
        if(response.status == 200) {
            setPersistentUser(response.data)
            set({ isLoggedIn: true, loggedUser: response, hasCheckedAuth: true })
        }
    },
    logOut: async () => {
        removePersistentUser()
        set({isLoggedIn: false, loggedUser: {}} )
    }

}) )
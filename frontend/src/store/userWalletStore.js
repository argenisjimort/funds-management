import { create } from "zustand";
import loggedUserService from "../services/loggedUser";


export const useUserWalletStore = create((set, get) => ({
    wallets: [],
    getUserWallets: async () => {
        const res = await loggedUserService.getLoggedUserWallets()
        set({ wallets: res.data })
    }
}))
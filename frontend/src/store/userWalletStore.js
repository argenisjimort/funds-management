import { create } from "zustand";
import loggedUserService from "../services/loggedUser";
import { createTransaction } from "../services/transaction"


export const useUserWalletStore = create((set, get) => ({
    wallets: [],
    getUserWallets: async () => {
        const res = await loggedUserService.getLoggedUserWallets()
        set({ wallets: res.data })
    },
    postTransaction: async (amount, currency, category, wallet, description="NA", type, toWallet = null) => {
        const res = await createTransaction(amount, currency, category, wallet, description, type, toWallet)
        const data = res.data
        console.log(data)
        // console.log(res.data)
        console.log(res.status)
        console.log(get().wallets)
        const correctectWallets = get().wallets.map( wallet => wallet.id == data.wallet ? { ...wallet, transactions: wallet.transactions.concat(data) }  : wallet )
        console.log(correctectWallets)
        set({wallets: correctectWallets})
    }
}))
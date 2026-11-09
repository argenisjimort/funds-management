import { create } from "zustand";
import loggedUserService from "../services/loggedUser";
import { createTransaction } from "../services/transaction"
import { calculateCurrentAmountInWallet } from "../utils/wallet"

export const useUserWalletStore = create((set, get) => ({
    wallets: [],
    getUserWallets: async () => {
        const res = await loggedUserService.getLoggedUserWallets()
        set({ wallets: res.data })
    },
    postTransaction: async (amount, currency, category, wallet, description = "NA", type, toWallet = null) => {



        const res = await createTransaction(amount, currency, category, wallet, description, type, toWallet)
        // const data = res.data
        const { transactions } = res.data
        // console.log(data)
        // console.log(res.data)
        // console.log(res.status)
        // console.log(get().wallets)


        //get every wallet and compare...
        const correctedWallets = get().wallets.map( wallet => {
            //with filter, create an array of the transactions that match the wallet id
            const transactionsToAdd = transactions.filter( transaction => transaction.wallet == wallet.id )
            // console.log( transactionsToAdd )

            //return the de-structured wallet, change the "transactions" parameter
            //and append the prev array along with the already existing transactions
            return { ...wallet, transactions: [...(wallet.transactions ?? []), ...transactionsToAdd] }

        } )

        set({ wallets: correctedWallets })

    },


    getGeneralBalance: () => get().wallets.reduce((totalAccumulator, wallet) => { //you add the value of each wallet's return to the totalAcc
        //now just get each expense from the wallet, put it on an accumulator, and subtract it from the original amount
        const currentAmountInWallet = calculateCurrentAmountInWallet(wallet)// then we add the total in the wallet to the total accumulator
        return totalAccumulator + currentAmountInWallet
    }, 0) || null
}))
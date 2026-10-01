import { useUserWalletStore } from "../store/userWalletStore"
import CentsFormater from "./CentsFormater"
import SingleWalletBoard from "./SingleWalletBoard"
import SingleWalletBoardCents from "./SingleWalletBoardCents"

const BalanceBoard = () => {
    const wallets = useUserWalletStore(state => state.wallets)

    const generalBalance = wallets.reduce((totalAccumulator, wallet) => { //you add the value of each wallet's return to the totalAcc

        //now just get each expense from the wallet, put it on an accumulator, and subtract it from the original amount
        const currentAmountInWallet = wallet.initialAmountInCents - wallet.transactions.reduce((accumulator, currentTransaction) => {
            //if its an income, we whould actually substract from the accumulator
            if (currentTransaction.type === "INCOME") return accumulator - currentTransaction.amountInCents
            return accumulator + currentTransaction.amountInCents // if not an income, it adds the transaction to the accumulator
        }, 0)

        return totalAccumulator + currentAmountInWallet // then we add the total in the wallet to the total accumulator

    }, 0) || null // this 0 is the starting value for the totalAccumulator

    return (
        <div>
            <h2>Total Balance: <CentsFormater amountInCents={generalBalance} /></h2>
            {wallets.map(wallet => <SingleWalletBoardCents key={wallet.id} wallet={wallet} />)}

        </div>


    )
}

export default BalanceBoard
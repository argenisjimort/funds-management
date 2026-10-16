import { useUserWalletStore } from "../store/userWalletStore"
import SingleWalletTransactionHistory from "./SingleWalletTransactionHistory"

const TransactionHistoryBoard = () => {


    const wallets = useUserWalletStore(state => state.wallets)
    return <div>
        <h2> Trasanction History Board </h2>
        { wallets.map( (wallet) => <SingleWalletTransactionHistory key={wallet.id} wallet={wallet} /> ) }
    </div> 
}

export default TransactionHistoryBoard
import { useUserCategoriesStore } from "../store/userCategoriesStore"

const SingleWalletTransactionHistory = ({ wallet }) => {

    const getCategoryNameFromId = useUserCategoriesStore(state => state.getCategoryNameFromId)

    // console.log(wallet)
    return <div>
        <h4> {wallet.name} </h4>
        <ul>
            {wallet.transactions.map(transaction =>
                <li key={transaction.id} >
                    <div>  Amount: {transaction.amount}  </div>
                    <div> Category: {getCategoryNameFromId(transaction.category)} </div>
                    <div> Date: {transaction.date} </div>
                </li>
            )}
        </ul>
    </div>
}


export default SingleWalletTransactionHistory
import { useUserCategoriesStore } from "../store/userCategoriesStore"
import { formatIsoDate } from "../utils/date"
import { centsFormater } from "../utils/amount"
import { getCategoryNameFromId } from "../utils/category"

const SingleWalletTransactionHistory = ({ wallet }) => {

    // const getCategoryNameFromId = useUserCategoriesStore(state => state.getCategoryNameFromId) 

    // console.log(wallet)
    return <div>
        <h4> {wallet.name} </h4>
        <ul>
            {wallet.transactions.map(transaction => {
                const categoryName = getCategoryNameFromId(transaction.category)
                // console.log(categoryName)
                return (

                    <li key={transaction.id} >
                        <div>  Amount: {centsFormater(transaction.amountInCents)}  </div>
                        <div> Category: {categoryName} </div>
                        <div> Date: {formatIsoDate(transaction.date)} </div>
                    </li>
                )
            }
            )}
        </ul>
    </div>
}


export default SingleWalletTransactionHistory
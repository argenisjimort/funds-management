import { useEffect, useState } from "react"
import { useField } from "../hooks/useField"
import { useUserCategoriesStore } from "../store/userCategoriesStore"
import { useUserWalletStore } from "../store/userWalletStore"
import logger from "../utils/logger"
import { createTransaction } from "../services/transaction"

const NewTransactionForm = () => {
    const amount = useField('number')

    const userCategories = useUserCategoriesStore(state => state.categories)
    const getUserCategories = useUserCategoriesStore(state => state.getUserCategories)
    const userWallets = useUserWalletStore(state => state.wallets)
    const getUserWallets = useUserWalletStore(state => state.getUserWallets)


    const [transactionType, setTransactionType] = useState('Expense')
    const [selectedWallet, setSelectedWallet] = useState('')


    const selectedWalletObject = userWallets.find(wallet => wallet.id === selectedWallet)



    useEffect(() => {
        getUserCategories()//this is a function from the store
        getUserWallets()
        // logger.info(userWallets)
        // logger.info(selectedWalletObject)
    }, [])



    const handleTransactionTypeChange = (e) => {
        setTransactionType(e.target.value)
        // logger.info(transactionType)
    }


    const handleWalletChange = (e) => {
        // logger.info(e.target.value)
        setSelectedWallet(e.target.value)
        // logger.info(selectedWallet)
    }


    const handleTransactionCreation = (e) => {
        e.preventDefault()
        createTransaction()
    }


    useEffect(() => {
        // logger.info(selectedWallet)
    }, [selectedWallet])


    return (

        <div>
            <h3>Create new Transanction</h3>
            <form onSubmit={handleTransactionCreation}>


                <div>
                    <label> Amount: <input {...amount} /> </label>
                    {selectedWalletObject && <span>{selectedWalletObject.currency}</span>}
                </div>


                <div>
                    <label> Category: <select name="" id="">
                        <option value="">none...</option>
                        {userCategories.map(category =>
                            <option key={category.id} > {category.name} </option>
                        )}
                    </select>
                    </label>
                </div>


                <div>

                    <label > Accounts:  <select onChange={(e) => handleWalletChange(e)} >
                        <option value="">none...</option>
                        {userWallets.map(wallet => (
                            <option key={wallet.id} value={wallet.id} > {wallet.name} </option>
                        ))}

                    </select>
                    </label>
                </div>


                <div>
                    <label > Transaction type
                        <select onChange={(e) => handleTransactionTypeChange(e)}>
                            <option value="Expense">Expense</option>
                            <option value="Earning">Earning</option>
                            <option value="Transfer">Transfer</option>
                        </select>
                    </label>
                </div>


                {transactionType === "Transfer" &&
                    <div>
                        <label> transfer to:..
                            <select >
                                {userWallets.map(wallet => (
                                    <option key={wallet.id} value={wallet.id} >{wallet.name}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                }


                <button type="submit" className="button"> Submit Trasanction </button>
            </form>
        </div>
    )
}


export default NewTransactionForm
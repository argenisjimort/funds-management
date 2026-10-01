import { useEffect, useState } from "react"
import { useField } from "../hooks/useField"
import { useUserCategoriesStore } from "../store/userCategoriesStore"
import { useUserWalletStore } from "../store/userWalletStore"
import logger from "../utils/logger"
import { createTransaction } from "../services/transaction"

const NewTransactionForm = () => {
    
    const getUserCategories = useUserCategoriesStore(state => state.getUserCategories)
    const getUserWallets = useUserWalletStore(state => state.getUserWallets)
    
    const userCategories = useUserCategoriesStore(state => state.categories)
    const userWallets = useUserWalletStore(state => state.wallets)
    const postTransaction = useUserWalletStore(state => state.postTransaction)
    
    
    const amount = useField('number')
    const [selectedWallet, setSelectedWallet] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [transactionType, setTransactionType] = useState('EXPENSE')


    const selectedWalletObject = userWallets.find(wallet => wallet.id === selectedWallet)



    useEffect(() => {
        //this store functions are now called by the parent component (HomePage)
        // getUserCategories()//this is a function from the store
        // getUserWallets()
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

    const handleCategoryChange = (e) => {
        // console.log(e)
        // console.log(e.target.value)
        setSelectedCategory(e.target.value)
    }


    const handleTransactionCreation = (e) => {
        e.preventDefault()
        // console.log(amount.value)
        // console.log(selectedCategory)
        // createTransaction(amount.value, selectedWalletObject.currency, selectedCategory, selectedWallet, "NA", transactionType)
        postTransaction(amount.value, selectedWallet.currency, selectedCategory, selectedWallet, "NA", transactionType)
    }


    useEffect(() => {
        // logger.info(selectedWallet)
    }, [selectedWallet])


    return (

        <div>
            <h3>Create new Transanction</h3>
            <form onSubmit={ handleTransactionCreation }>


                <div>
                    <label> Amount: <input {...amount} /> </label>
                    {selectedWalletObject && <span>{selectedWalletObject.currency}</span>}
                </div>


                <div>
                    <label> Category: <select name="" id="" onChange={ (e) => handleCategoryChange(e) }>
                        <option value="">none...</option>
                        {userCategories.map(category =>
                            <option key={category.id} value={category.id}> {category.name} </option>
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
                            <option value="EXPENSE">Expense</option>
                            <option value="INCOME">Income</option>
                            <option value="TRANSFER">Transfer</option>
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
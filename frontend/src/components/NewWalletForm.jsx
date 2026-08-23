import { useField } from "../hooks/useField"
import { createWallet } from "../services/wallet"
import { useUserWalletStore } from "../store/userWalletStore"
import { useLoggedUserStore } from "../store/loggedUserStore"
import { CURRENCIES } from "../utils/config"
import { useEffect, useState } from "react"
import logger from "../utils/logger"

const NewWalletForm = () => {
    const name = useField('name', '', 'name')

    const initialAmount = useField('Initial amount', 'number', 'Initial amount')

    const  getUserWallets = useUserWalletStore(state => state.getUserWallets)
    const loggedUser = useLoggedUserStore(state => state.loggedUser)


    const [selectedCurrency, setSelectedCurrency] = useState('')



    const handleWalletCreation = async (e) => {
        e.preventDefault()
        await createWallet( name.value, initialAmount.value )
        getUserWallets()
    }





        const handleCurrrencyChange = (e) => {
            setSelectedCurrency(e.target.value)
        }


        useEffect( () => {
            logger.info(loggedUser)
            if( loggedUser?.defaultCurrency ) {
                setSelectedCurrency(loggedUser.defaultCurrency)
                // logger.info(loggedUser)
            }
        }, [loggedUser] )


        return (

            <div>
                <h3> Create new Wallet </h3>
                <form onSubmit={handleWalletCreation}>
                    <input {...name} />
                    <input {...initialAmount} />

                    <select name="currency" value={selectedCurrency} onChange={ (e) => handleCurrrencyChange(e) } >
                        {/* <option value="" disabled hidden>Currency</option> */}
                        {CURRENCIES.map( currency =>
                            <option key={currency.code} value={currency.code}> {currency.name} </option>
                        )}
                    </select>


                <button> Create Wallet </button>
            </form>
        </div>
    )
}


export default NewWalletForm
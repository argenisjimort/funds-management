import { useEffect } from "react"
import NewTransactionForm from "../components/NewTransactionForm"
import NewWalletForm from "../components/NewWalletForm"
import { useLoggedUserStore } from "../store/loggedUserStore"
import { useUserWalletStore } from "../store/userWalletStore"
import { useUserCategoriesStore } from "../store/userCategoriesStore"
import logger from "../utils/logger"
import BalanceBoard from "../components/BalanceBoard"
import NewCategoryForm from "../components/NewCategoryForm"
import TransactionHistoryBoard from "../components/TransactionHistoryBoard"

const HomePage = () => {


    const logout = useLoggedUserStore(state => state.logOut)
    const loggedUser = useLoggedUserStore(state => state.loggedUser)

    const wallets = useUserWalletStore(state => state.wallets)

    // logger.info(wallets)

    const getUserCategories = useUserCategoriesStore(state => state.getUserCategories)
    const getUserWallets = useUserWalletStore(state => state.getUserWallets)

    useEffect( () => {
        getUserCategories()
        getUserWallets()
    }, [] )

    return (
        <>
        <h1>This is the home page</h1>
        <p> loggedUSer:  <b> {loggedUser.username} </b>  </p>
        < NewTransactionForm />
        < NewWalletForm />
        < NewCategoryForm />

        < BalanceBoard />
        <TransactionHistoryBoard />

        {/* < SingleWalletBoard wallet={wallets[0]} />
        < SingleWalletBoard wallet={wallets[1]} /> */}
        <button onClick={logout} >Log Out</button>
        </>
    )
}



export default HomePage
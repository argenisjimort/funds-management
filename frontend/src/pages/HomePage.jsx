import NewTransactionForm from "../components/NewTransactionForm"
import NewWalletForm from "../components/NewWalletForm"
import { useLoggedUserStore } from "../store/loggedUserStore"

const HomePage = () => {


    const logout = useLoggedUserStore(state => state.logOut)
    const loggedUser = useLoggedUserStore(state => state.loggedUser)

    return (
        <>
        <h1>This is the home page</h1>
        <p> loggedUSer:  <b> {loggedUser.username} </b>  </p>
        < NewTransactionForm />
        < NewWalletForm />
        <button onClick={logout} >Log Out</button>
        </>
    )
}



export default HomePage
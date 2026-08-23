import { Outlet, useLocation, Navigate, replace } from "react-router-dom"
import { useLoggedUserStore  } from "../store/loggedUserStore"

const RequireAuth = () => {
    const location = useLocation()
    const isLoggedIn = useLoggedUserStore(state => state.isLoggedIn)
    const hasCheckedAuth = useLoggedUserStore(state => state.hasCheckedAuth)

    if( !hasCheckedAuth ) return null
    if( !isLoggedIn ) return <Navigate to={`/login`} state={{from: location}} replace />


    return <Outlet />
}


export default RequireAuth
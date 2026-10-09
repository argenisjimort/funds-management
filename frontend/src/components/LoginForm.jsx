import { useField } from "../hooks/useField"
import { useLoggedUserStore } from "../store/loggedUserStore"
import { useLocation, useNavigate } from 'react-router-dom'
import logger from "../utils/logger"

const LoginForm = () => {
    const username = useField('username', 'text', 'username')
    const password = useField('password', 'password', 'password')

    const logIn = useLoggedUserStore(state => state.logIn)

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await logIn(username.value, password.value)
            navigate(from, { replace: true })
        } catch (error) {
            logger.error('error loggin in')
        }

    }


    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
                <input {...username} />
                <input {...password} />
                {/* <input name="username" placeholder="username" />
            <input name="passsowrd" type="password" placeholder="password" /> */}
                <button type="submit" >Log-In</button>
            </form>
        </div>
    )
}


export default LoginForm
import { useField } from "../hooks/useField"
import {useNavigate} from 'react-router-dom'
import { signup } from "../services/signup"
import logger from "../utils/logger"

const SignupForm = () => {
    const username = useField('username', 'text', 'create an username')
    const name = useField('name', 'text', 'name')
    const password = useField('password', 'text', 'password')
    const confirmPassword = useField('confirmPassword', 'text', 'Confirm Password')

    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()
        const res = await signup(username.value, name.value, password.value)
        // logger.info(res)
        if(res.status == 200) {
            navigate('/login')
        }
    }

    return (
        <>
        <form onSubmit={handleSignup}>
            <input {...username} />
            <input {...name} />
            <input {...password} />
            <input {...confirmPassword} />
            <button type="submit" >create New User</button>
        </form>
        </>
    )
}


export default SignupForm
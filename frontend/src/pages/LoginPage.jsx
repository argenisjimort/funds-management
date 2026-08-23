import LoginForm from "../components/LoginForm"
import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <>
        <h1>This is the login page</h1>
        <LoginForm />
        <Link to={`/signup`} >dont have an user? -- create new user</Link>
        </>
    )
}


export default LoginPage
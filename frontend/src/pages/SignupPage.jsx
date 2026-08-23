import SignupForm from "../components/SignupForm"
import { Link } from "react-router-dom"

const SignupPage = () => {
    return(
        <>
        <SignupForm />
        <Link to={'/login'}>Go to Login</Link>
        </>
    )
}


export default SignupPage
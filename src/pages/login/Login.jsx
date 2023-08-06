import { useContext, useState } from "react"
import "./Login.css"
import {AuthContext} from '../../context/AuthContext'
import {apiRequests} from "../../utils/requestMethods"
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [credentials,setCredentials] = useState({
        email:undefined,
        password:undefined
    })

    const {loading,error,dispatch} = useContext(AuthContext)
    const navigate = useNavigate()


    //fuction to handle input changes
    const handleChange = (e) => {
       setCredentials((prev) => ({...prev,[e.target.id]:e.target.value}))
    }

    //code to handle onClick or sending data to database
    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await apiRequests.post("auth/login",credentials)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
            navigate("/")
        }catch(err){
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
        }
    }



  return (
    <div className="login">
        <form className="loginContainer">
        <h5>Welcome to the self help desk please enter your credentials to continue</h5>
            <input type="email" placeholder="enter email" id="email" required onChange={handleChange}
             className="loginInput" />
             <input type="password" placeholder="enter password" id="password" required onChange={handleChange}
             className="loginInput" />
             <button className="loginButton" disabled={loading} onClick={handleClick}  type="submit">Login</button>
             {error && <span className="error">{error.message}</span>}
        </form>
    </div>
  )
}

export default Login
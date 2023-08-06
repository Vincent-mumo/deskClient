import { useContext } from "react"
import {useNavigate} from "react-router-dom"
import "./Navbar.css"
import {AuthContext} from "../../context/AuthContext"

const Navbar = () => {
  const {user,dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  //code to facilitate logout
  const handleLogOut = (e) => {
    e.preventDefault()
    dispatch({type:"LOGOUT"})
    navigate("/login")
  }


  return (
    <div className="navbar">
      <div className="left">
        <h2>Self Help Desk</h2>
      </div>
      <div className="right">
        <img src={user?.img ? user?.img : "https://img.freepik.com/free-icon/user_318-174260.jpg"} alt="" className="navImage"/>
        <span className="navbarName">{user?.username}</span>
        <button className="navbarButton" onClick={handleLogOut}>Log Out</button>
        
      </div>
    </div>
  )
}

export default Navbar
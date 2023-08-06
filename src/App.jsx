import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import "./App.css"
import { AuthContext } from "./context/AuthContext"

function App() {
  const {user} = useContext(AuthContext)

  return (
   <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user?<Home/> : <Login/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App

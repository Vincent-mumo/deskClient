import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import "./App.css"

function App() {

  return (
   <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App

import "./Home.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import RaiseTicket from "../../components/raiseTicket/RaiseTicket"
import RaisedTicket from "../../components/raisedTickets/RaisedTickets"
import { useState } from "react"

const Home = () => {
  const [raiseOpen,setRaiseOpen] = useState(false)
  const [viewOpen,setViewOpen] = useState(false)

  const closed = () => {
    setRaiseOpen(!raiseOpen)
   }

   const close = () => {
    setViewOpen(!viewOpen)
   }


  return (
    <div className="home">
      <Navbar/>
      <div className="container">
        <button onClick={()=>setRaiseOpen(!raiseOpen)}>Raise Ticket</button>
        <button onClick={()=>setViewOpen(!viewOpen)}>View Raised Tickets</button>
      </div>
      <Footer/>
      {raiseOpen && <RaiseTicket closed={closed}/>}
      {viewOpen && <RaisedTicket close={close}/>}
    </div>
  )
}

export default Home
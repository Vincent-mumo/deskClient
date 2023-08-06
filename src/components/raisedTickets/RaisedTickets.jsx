import { useContext, useEffect, useState } from "react"
import "./RaisedTickets.css"
import {AuthContext} from "../../context/AuthContext"
import {apiRequests} from "../../utils/requestMethods"

const RaisedTickets = ({close}) => {
 const [tickets,setTickets] = useState([])
 const {user} = useContext(AuthContext)


 //fetch tickets from db
 useEffect(() => {
  const fetchTickets = async () => {
    const res = await apiRequests.get(`tickets/${user?._id}`)
    setTickets(res.data)
  }
  fetchTickets()
 },[user._id,tickets])



 const Button = ({type}) => {
  return <button className={"Raised " + type}>{type}</button>
 }




  return (
    <div className="raisedTickets">
      <div className="ticketsContainer">
      <div className="closeButton" onClick={close}>close</div>
        {tickets.map((ticket) => (
          <div className="ticket">
          <div className="ticketData">
            <h3 className="dataTitle">ticketId</h3>
            <span className="dataDesc">{ticket?._id}</span>
          </div>
          <div className="ticketData">
            <h3 className="dataTitle">Date Raised</h3>
            <span className="dataDesc">{new Date(ticket?.createdAt).toDateString()}</span>
          </div>
          <div className="ticketData">
            <h3 className="dataTitle">Status</h3>
            <span className="dataDesc"><Button type={ticket?.status} /></span>
          </div>
          <div className="ticketData">
            <h3 className="dataTitle">Subject</h3>
            <span className="dataDesc">{ticket?.subject}</span>
          </div>
          <div className="ticketData">
            <h3 className="dataTitle">Department</h3>
            <span className="dataDesc">{ticket?.department}</span>
          </div>
          <div className="ticketData">
            <h3 className="dataTitle">Ticket type</h3>
            <span className="dataDesc">{ticket?.type}</span>
          </div>
          <div className="ticketData">
            <h3 className="dataTitle">Admin Comments</h3>
            <span className="dataDescAdmin">{ticket?.adminComments ? ticket?.adminComments : "Admin is yet to comment,if the does that the comments will appear here"}</span>
          </div>
        </div>
        ))}
          
      </div>
    </div>
  )
}

export default RaisedTickets
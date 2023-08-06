import { useContext, useState } from "react"
import "./RaiseTicket.css"
import {AuthContext} from "../../context/AuthContext"
import {apiRequests} from "../../utils/requestMethods"

const RaiseTicket = ({closed}) => {
  const {user} = useContext(AuthContext)
  const [inputs,setInputs] = useState({})

  //handling changes in the inputs
  const handleChange = (e) => {
    e.preventDefault()
    const {name,value} = e.target
    setInputs((prev) => {
      return {...prev,[name]:value}
    })
  }

  //click function to submit ticket
  const handleClick = async (e) => {
    e.preventDefault()
    const ticket = {...inputs,userId:user._id}
    try{
      const res = await apiRequests.post("tickets",ticket)
      closed()

    }catch(err){
      console.log(err)
    }
  }


 



  return (
    <div className="raiseTicket">
      <form action="" className="ticketForm">
        <input type="text" placeholder="enter department" name="department" className="ticketInput" required  onChange={handleChange}/>
        <input type="text" placeholder="enter subject" className="ticketInput" name="subject" required  onChange={handleChange}/>
        <input type="text" placeholder="Responsibility/Needs support from." name="responsible" className="ticketInput" required  onChange={handleChange}/>
        <textarea name="desc" rows="4" placeholder="enter tickets description here"  cols="35" className="ticketTextArea" required onChange={handleChange}/>
        <div className="data">
          <label>Ticket Type</label>
          <select name="type" id="" onChange={handleChange}>
            <option value="new">New</option>
            <option value="complain">Complain</option>
            <option value="rectification">Rectification</option>
          </select>
        </div>
        <div className="buttons">
        <button className="submitButton" onClick={handleClick}>Submit</button>
        <button className="submitButton">Close</button>
        </div>
      </form>
    </div>
  )
}

export default RaiseTicket
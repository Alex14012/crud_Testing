import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

function Create() {

  const [values, setValue] = useState({cardImage: "", cardName: "", cardType: "", cardText: ""})
  const navigate= useNavigate();

  function handleSubmit(event){
    event.preventDefault()

    axios.post("http://localhost:3000/Cards", values)
    .then (res => navigate("/"))
    .catch(err => console.log(err))
  }


  return (
    <>
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center bg-white">
        <div className="flex flex-col items-center mb-5 ml-3 mr-3">
          <label htmlFor="cardImage">card image:</label>
          <input type="text" name="cardImage" onChange={e=>setValue({...values, cardImage: e.target.value})} className="border-1"/>
        </div>

        <div className="flex flex-col items-center mb-5 ml-3 mr-3">
          <label htmlFor="cardName">cardName</label>
          <input type="text" name="cardName" onChange={e=>setValue({...values, cardName: e.target.value})} className="border-1"/>
        </div>

        <div className="flex flex-col items-center mb-5 ml-3 mr-3">
          <label htmlFor="cardType">cardType</label>
          <input type="text" name="cardType" onChange={e=>setValue({...values, cardType: e.target.value})} className="border-1"/>
        </div>

        <div className="flex flex-col items-center mb-5 ml-3 mr-3">
          <label htmlFor="cardText">cardText</label>
          <input type="text" name="cardText" onChange={e=>setValue({...values, cardText: e.target.value})} className="border-1"/>
        </div>

        <button className="bg-green-400 w-30 mb-5 rounded-md">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Create
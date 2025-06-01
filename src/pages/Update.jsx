import { useEffect, useState } from "react";
import {useParams } from "react-router"
import axios from "axios";
import { useNavigate } from "react-router";


function Update() {
  const navigate = useNavigate()
  const {id} = useParams();
  const [dataCards, setDataCard] = useState([])

   useEffect(() => {
    axios.get("http://localhost:3000/Cards/" +id)
    .then (res => setDataCard(res.data))
    .catch(err => console.log(err))
  }, []
  )
  
  function handleSubmit(event){
    event.preventDefault()

    axios.put("http://localhost:3000/Cards/"+id, dataCards)
    .then (res => navigate("/"))
    .catch(err => console.log(err))
  }

  return (
    <>
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center bg-white">
        <div className="flex flex-col items-center mb-5 ml-3 mr-3">
          <label htmlFor="cardImage">card image:</label>
          <input type="text" name="cardImage" 
          value={dataCards.cardImage}
          onChange={e=>setDataCard({...dataCards, cardImage: e.target.value})} 
          className="border-1"/>
        </div>

        <div className="flex flex-col items-center mb-5 ml-3 mr-3">
          <label htmlFor="cardName">cardName</label>
          <input type="text" name="cardName" 
          value={dataCards.cardName}
          onChange={e=>setDataCard({...dataCards, cardName: e.target.value})} 
          className="border-1"/>
        </div>

        <div className="flex flex-col items-center mb-5 ml-3 mr-3">
          <label htmlFor="cardType">cardType</label>
          <input type="text" name="cardType" 
          value={dataCards.cardType}
          onChange={e=>setDataCard({...dataCards, cardType: e.target.value})} 
          className="border-1"/>
        </div>

        <div className="flex flex-col items-center mb-5 ml-3 mr-3">
          <label htmlFor="cardText">cardText</label>
          <input type="text" name="cardText" 
          value={dataCards.cardText}
          onChange={e=>setDataCard({...dataCards, cardText: e.target.value})} 
          className="border-1"/>
        </div>

        <button className="bg-green-400 w-30 mb-5 rounded-md">Update</button>
      </form>
    </div>
    </>
  )
}

export default Update
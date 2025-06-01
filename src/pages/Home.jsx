import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "../Components/cards"
import { Link, useNavigate } from "react-router"

function Home() {
  const [datas, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3000/Cards")
    .then (res => setData(res.data))
    .catch(err => console.log(err))
  }, []
  )

  function handleSubmit(id){
    const decision = window.confirm("do you want to delete this card?")

    if (decision) {
        axios.delete("http://localhost:3000/Cards/"+id)
        .then(res => {
          alert("card already deleted");
          navigate("/")
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <>
    <div className="flex justify-center bg-gray-700">
      <h1 className="text-5xl text-blue-500">Card Database</h1>
    </div>
    <div className="flex justify-around">
    <Link to="/create" className="flex justify-around mt-5 mb-5 py-4 h-16 w-30 rounded-2xl text-white bg-teal-500 shadow-md hover:shadow-lg">
    New
    </Link>
    </div>
      <div className="grid grid-cols-3 gap-4">
      {datas.map((dataCard) => (
        <div className="flex flex-col bg-white rounded-2xl px-6 py-8 shadow-md hover:shadow-lg">
            <Cards
            key={dataCard.id}
            cardImage={dataCard.cardImage}
            cardName={dataCard.cardName}
            cardType={dataCard.cardType}
            cardText={dataCard.cardText}
            />
            <div className="flex justify-center gap-1 mt-1">
            <Link to={`/Update/${dataCard.id}`} className="border-2 rounded-md">
            Update
            </Link>           
            <button onClick={e=> handleSubmit(dataCard.id)} className="border-2 rounded-md">
            Delete
            </button>
            </div>
        </div>
      ))}
      </div>
    </>
  )
}

export default Home
import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "../Components/cards"
import { Link } from "react-router"

function Home() {
  const [datas, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/Cards")
    .then (res => setData(res.data))
    .catch(err => console.log(err))
  }, []
  )

  return (
    <>
    <div className="flex justify-center">
      <h1 className="text-5xl text-blue-500">Card Database</h1>
    </div>
    <div className="flex justify-around">
    <Link to="/create" className="flex justify-around mt-5 mb-5 py-4 h-16 w-30 rounded-2xl text-white bg-gray-800 shadow-md hover:shadow-lg">
    New
    </Link>
    </div>
      <div className="grid grid-cols-3 gap-4">
      {datas.map((dataCard) => (

            <Cards
            key={dataCard.id}
            cardImage={dataCard.cardImage}
            cardName={dataCard.cardName}
            typeCard={dataCard.typeCard}
            cardText={dataCard.cardText}
            />
      ))}
      </div>
    </>
  )
}

export default Home
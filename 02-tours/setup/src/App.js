import React, { useState, useEffect } from "react"
import Loading from "./Loading"
import Tours from "./Tours"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project"
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

const removeTour = (id) =>{
  // if the tour id doesnt match place it to newtour array
  const newTours = tours.filter((tour)=> tour.id !== id);
  setTours(newTours)
}



  const fetchTours = async () => {
    //  V--extra procaution even tho ^ already has setLoading as true
    setLoading(true)

    try {
      const response = await fetch(url)
      //  running json to convert it from string to parse (javascript object)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
      // in both cases wether we succeed or fail we should see array of 5 items
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])

  // using condition for multiple returns one for when its loading and one for when its not so basically when the data is back.
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length===0){
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        {/* no argument needed for the button to refresh */}
        <button className='btn' onClick={fetchTours}>Refresh</button>
      </div>
    </main>
  }
  return (
    <main>
      {/* passing newTours thru a prop  */}
      <Tours tours={tours} removeTour= {removeTour}/>
    </main>
  )
}

export default App

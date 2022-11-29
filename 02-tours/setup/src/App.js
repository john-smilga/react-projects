import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isloading, setIsloading] = useState(true)
  const [tours, setTours] = useState([])

const removeTour=(id)=>{
  const deleteTour = tours.filter((tour)=> tour.id !== id)
  setTours(deleteTour)
}
  const fetchdata = async()=>{
    // I tried using the try catch function to 
    //understand how it works for returning a value and catching an error
    setIsloading(true)
    try {
      const response = await fetch(url)
      const data = await response.json();
      setTours(data)
      setIsloading(false)
      console.log(data)
    } catch (error) {
      setIsloading(false)
      console.log(error)
    }
  }

  useEffect(()=>{
      fetchdata()
  },[])
  if(isloading){
    return(
      <main>
  <Loading/>
      </main>
  
    );
      
  }
  
  if(tours.length===0){
    return(
      <main>
        <h1>No tours left</h1>
      </main>
    );
  }
  return (
    <main>
       <Tours tours={tours} removeTour={removeTour}/>
    </main>
   
  );


}

export default App

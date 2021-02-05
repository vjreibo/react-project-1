import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])

  const removeSomething = (id)=>{
    const newTours = tours.filter(tour=>tour.id !== id);
    setTours(newTours);
  }
  
  const fetchTours = async ()=>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    }catch(err){
      setLoading(false);
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchTours();
  }, [])

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    );
  }
  else{
    if(tours.length!==0){
      return(
        <main>
          <Tours tours={tours} removeSomething={removeSomething}/>
        </main>
      );
    }
    else{
      return (
        <main>
          <h1>No tours left</h1>
          <button className='btn' onClick={fetchTours}>Fetch Tours</button>
        </main>
      );
    }
  }

  }
  

export default App

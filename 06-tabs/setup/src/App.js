import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';



function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);


  const getJobs = async () => {
    try {

      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false);

    } catch (error) {
      console.log('error :>> ', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getJobs();
  }, []);

  if (loading) {
    return <section className="section loading"><h1>Loading ...</h1></section>;
  }

  return (
    <main>
      jobs
    </main>
  );
}

export default App

import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Companies from './Companies';
import Job from './Job';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';



function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);


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

  const companies = [...new Set(jobs.map((job) => job.company))];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <Companies companies={companies} handleSetValue={setValue} value={value} />
        <Job job={jobs[value]} />
      </div>
    </section>
  );
}

export default App

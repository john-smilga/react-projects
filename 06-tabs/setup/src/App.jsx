import { nanoid } from 'nanoid'
import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setJobs(data)
      setLoading(false)
    })
    .catch(err => alert(`TRY RELOADING PAGE, ${err}`))
  }, [])
    
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  
  const {title, company, dates, duties} = jobs[index]

  const allCompanies = jobs.map((job, index) => (
    <button 
      key={job.id}
      className={`job-btn ${job.company === company ? 'active-btn' : ''}`}
      onClick={ () => setIndex(index) }
    >
      {job.company}
    </button>
  ))

  function displayDuties(data) {
    return data.map(duty => (
      <div className="job-desc" key={nanoid()}>
        <FaAngleDoubleRight className="job-icon" />
        <p>{duty}</p>
      </div>
    )) 
  }

  return(
    <section className="section">

      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">

        <div className="btn-container">
            {allCompanies}
        </div>

        <div className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          { displayDuties(duties) }
        </div>

      </div>

      <button className="btn">More Info</button>
    </section>
  ) 
}

export default App

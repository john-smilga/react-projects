import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'


function App() {
const [isloading, setIsloading] = useState(true)
const [value, setValue] = useState(0)
const [jobs, setjobs] = useState([])


const fetchJobs= async() => {
  const job = await fetch(url);
  const response =  await job.json();
  console.log(response);
  setjobs(response)
  setIsloading(false)
}

useEffect(()=>{
  fetchJobs()
},[])
  if (isloading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
const {company, dates, duties, title } =jobs[value]
return(
 <article className='section'>
  <div className='title'>
    <h2>Experience</h2>
    <div className='underline'></div>
  </div>
  <div className='btn-container'>
      {
        jobs.map((job,index)=>{
          return(
            <button key={job.id} className={`job-btn ${index=== value && `active-btn`}`} onClick={()=> setValue(index)}>{job.company}</button>
          );
        })
      }
    </div>
  <article className='job-info'>
    <h2>{title}</h2>
    <h4>{company}</h4>
    <p>{dates}</p>
    {/* button info */}
  <div className='job-center'>
 
    {/* job info */}
    {
      duties.map((duty,index)=>{
        return(
      
          <div key={index} className='job-desc'> <FaAngleDoubleRight/> {duty}</div>
        );
      })
    }
  </div>
  </article>
 </article>
);
}

export default App

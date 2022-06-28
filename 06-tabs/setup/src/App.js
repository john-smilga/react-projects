import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  //fetch API data start:
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  //fetch API data end.

  //if loading, then render loading component
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading....</h1>
      </section>
    );
  }
  //else, render jobs component
  //in this case, need to destruce jobs after loading component
  //That's because before succefully fetch data back, jobs state is empty array
  const { title, dates, duties, company } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline" />
      </div>

      <div className="job-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            const { id, company } = job;
            return (
              <button
                className={`job-btn ${index === value && "active-btn"}`}
                key={id}
                onClick={() => setValue(index)}
              >
                {company}
              </button>
            );
          })}
        </div>
        {/* job infor section */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;

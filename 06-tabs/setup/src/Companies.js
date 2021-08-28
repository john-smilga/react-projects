import React from 'react'

export default function Companies({ companies, handleSetValue, value }) {
  return (

    <div className="btn-container">
      {
        companies.map((company, index) => {
          return (
            <button
              key={index}
              className={`job-btn ${index === value && 'active-btn'}`}
              onClick={() => handleSetValue(index)}
            >
              {company}
            </button>
          )
        })
      }
    </div>

  )
}

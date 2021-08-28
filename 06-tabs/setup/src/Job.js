import React from 'react'

export default function Job({ id, order, title, dates, duties, company }) {
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
    </article>
  )
}


import React, { useState } from "react"
import people from "./data"
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaUserSecret,
} from "react-icons/fa"

const Review = () => {
  const [index, setIndex] = useState(0)
  // using peopleArray set as index so its not hardcoded
  const { name, job, image, text } = people[index]



// ^ trying to debug this forever!!!!




  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  // as a param we are accessing the current state value so whtever is put here will be the new state value
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  // to showcase random users, one way to do it is Math.random with the length of array and round it down cause between 0-1 you will never get a even 1. so by using math.floor you can round it down to get that random index.
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random * people.length)
    console.log(randomNumber)
    // one of the issues is that random number that is produced can repeat back to back so to avoid that you can add a function and +1 or -1, what a nice solution!!!
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>

        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <button className="random-btn" onClick={randomPerson}>
        Suprise Me
      </button>
    </article>
  )
}

export default Review

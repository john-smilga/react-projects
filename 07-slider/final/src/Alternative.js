import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

function App() {
  // State to store the array of people from data.js
  const [people, setPeople] = useState(data)
  // State to track the current slide index
  const [index, setIndex] = React.useState(0)

  // Function to handle moving to the next slide
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      // Reset to the first slide if the index exceeds the last one
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }

  // Function to handle moving to the previous slide
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      // Move to the last slide if the index becomes negative
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  // Auto-slider functionality
  useEffect(() => {
    // Automatically change slides every 5 seconds
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        // Reset to the first slide if the index exceeds the last one
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    // Cleanup function to clear the interval on component unmount or re-render
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className='section'>
      {/* Title section */}
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      {/* Slider section */}
      <div className='section-center'>
        {/* Map through each person to display their data */}
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          // Determine the position of the slide (active, last, or next)
          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              {/* Display person information */}
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}

        {/* Previous button */}
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>

        {/* Next button */}
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App

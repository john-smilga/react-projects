import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  console.log(people);

  const checkNumber = (number) => {
    // it's nicer to separate this out and run it as a callback to the other functions instead of repeating ourselves to write it in every other use case
    if(number > people.length - 1) {
      return 0
    } else if (number < 0) {
      return people.length - 1
    } else {
      return number
    }
  }

  const nextPerson = () => {
    setIndex((index)=> {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }
  const randomPerson = () => {
    
    // Math.random will return 0 <= n < 1, and multiplying that by our array length, we round down to get any of the indicies of the array
    let randomNumber = Math.floor(Math.random() * people.length);
    // prevention of having a duplicate random number for the same index, so we don't run into a non-changing screen
    if (randomNumber === index){
      randomNumber = index + 1;
    }

    // using checkNumber to prevent looking at an index beyond the length of the array
    setIndex(checkNumber(randomNumber));
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me!
      </button>
    </article>
  );
};

export default Review;

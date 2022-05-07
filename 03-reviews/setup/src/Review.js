import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, id, text, job } = people[index];

  function checkIndex(num) {
    if (num < 0) {
      return people.length - 1;
    } else if (num === people.length) {
      return 0;
    } else {
      return num;
    }
  }

  function prevButton() {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  }
  function nextButton() {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  }

  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * people.length);

    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    console.log(randomIndex);
    setIndex(checkIndex(randomIndex));
  };

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
        <button className="prev-btn" onClick={prevButton}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextButton}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        suprise me
      </button>
    </article>
  );
};

export default Review;

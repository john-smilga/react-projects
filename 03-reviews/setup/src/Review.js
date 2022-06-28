import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

// 3 Points for this practice
//In this component, we want to find prev and next people data,
// And set the data into Review component,
// Also has Random button which can trigger random people data.

const Review = () => {
  const [index, SetIndex] = useState(0); //set index state first
  const { id, name, job, image, text } = reviews[index]; //use index to find reviews(array) data
  //create find index function to set index num
  //findIndex just for index control, if index > array.length return 0; if index < 0 return array.length
  const findIndex = (i) => {
    if (i > reviews.length - 1) {
      return 0; //in this case, only findNext function trigger index increase, when index > 3 in this case, reset index to 0
    }
    if (i < 0) {
      return reviews.length - 1; //in this case, only findPrev function trigger index decrease, when index < 0, then reset index to 3
    }
    return i; //otherwise, just simply return i
  };
  // create 3 button function
  const findPrev = () => {
    SetIndex((PrevState) => {
      //just like counter project, we can use SetState + function form(use previous state to be parameter)
      //In this case, prevState is index
      const newIndex = PrevState - 1;
      return findIndex(newIndex);
    });
  };
  const findNext = () => {
    SetIndex((PrevState) => {
      // if (PrevState === reviews.length - 1) {
      //   const newIndex = 0;
      //   return findIndex(newIndex);
      // } //no need to put this if statement in here,as I have already used findIndex function
      const newIndex = PrevState + 1;
      return findIndex(newIndex);
    });
  };
  const findRandom = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length); // give me random num between 0 to reviews.length - 1
    // SetIndex(randomIndex); //in this case randomIndex is 0,1,2,3,but it might repeat same index several times
    //in case we repeat same index, we can say:
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    SetIndex(findIndex(randomIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={id} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={findPrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={findNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={findRandom}>
        Random
      </button>
    </article>
  );
};

export default Review;

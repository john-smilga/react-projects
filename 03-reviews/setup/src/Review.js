import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // In this case the useState is set in an index form where you can copy
  // start the array of the data from the first option you were given.
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index];

  const checkNumber = (number)=>{
    if(number > people.length - 1){
      return 0;
    }

    if(number < 0){
      return people.length - 1;
    }

    return number;
  }
  const setprev=()=>{
    setIndex((index)=>{
      const nextImg = index + 1
   return checkNumber(nextImg);
    })
   
  }

  const setnext=()=>{
    setIndex((index)=>{
      const nextImg = index + 1
      return checkNumber(nextImg);
    })
   
   }

   const randomperson=()=>{
     let randomNumber = Math.floor(Math.random() * people.length) 
     if(randomNumber===index){
      randomNumber= index +1
     }
     console.log(randomNumber)
     setIndex (checkNumber(randomNumber));
   }
  return (
    <article className='review'>
      <div className='img-container'> 
      <img src={image} alt={name} className='person-img'/>
      <span className='quote-icon'><FaQuoteRight/></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <span className='info'>{text}</span>
      <div className='button-container'>
        <button className='prev-btn' onClick={()=>setprev()}><FaChevronLeft/></button>
        <button className='prev-btn' onClick={setnext}><FaChevronRight/></button>
      </div>
      <button className='prev-btn' onClick={()=> randomperson()}>Suprise me</button>
    </article>
  );
};

export default Review;

import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const checkIndex = (index) => {
    if (index == people.length) return 0;
    if (index < 0) return people.length - 1;
    return index;
  }

  const handleNextClicked = () => {
    let newIndex = checkIndex(index + 1);
    setIndex(newIndex);
  }

  const handlePrevClicked = () => {
    let newIndex = checkIndex(index - 1);
    setIndex(newIndex);
  }

  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span> Reviews</h2>
      </div>
      <div className="section-center">
        {
          people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = 'nextSlide'
            return (
              <article key={id} className={position}> {/*className={personIndex === index ? 'activeSlide' : ''}*/}
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            )
          })
        }
        <button className="prev" onClick={handlePrevClicked}><FiChevronLeft /></button>
        <button className="next" onClick={handleNextClicked}><FiChevronRight /></button>
      </div>
    </section >
  );
}

export default App;

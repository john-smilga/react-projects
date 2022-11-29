import React from 'react';

const Categories = ({allCategory, filter}) => {
  return (
    <div className='btn-container'>
         {allCategory.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={()=> filter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;


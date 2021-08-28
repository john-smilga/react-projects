import React from 'react';

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => <button key={index} className="filter-btn" onClick={() => filterItems(category)}>{category}</button>)}
    </div>
  );
};

export default Categories;

import React from 'react';

// {/* <button className="filter-btn" onClick={()=> filteredItems('all')}>all</button>
// <button className="filter-btn" onClick={()=> filteredItems('breakfast')}>breakfast</button>
// <button className="filter-btn" onClick={()=> filteredItems('lunch')}>lunch</button>
// <button className="filter-btn" onClick={()=> filteredItems('dinner')}>dinner</button> 
// manual entry isn't DRY; so, this isn't our best approach, especially for future menu categories
// */}

const Categories = ({categories, filterItems}) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button type="button" className="filter-btn" key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories;

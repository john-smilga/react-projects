import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {/* <button
        className="filter-btn"
        onClick={(e) => filterItems(`${e.target.innerHTML}`)}
      >
        all
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button> */}
      {/* no need use above manually type in each button */}
      {categories.map((category, index) => (
        <button
          key={index}
          type="button"
          className="filter-btn"
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;

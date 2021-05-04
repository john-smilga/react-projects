import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
// in our filter, we get unique values by using Set instead of having repeated identical entries for our categories
// then, we use the spread operator after also including "All" at the beginning of the array to include a non-filtered category
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);    
  };

  return (
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>

      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  )
}

export default App;

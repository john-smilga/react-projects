import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [filteriedItems, setFilteriedItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setFilteriedItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setFilteriedItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2> Our Menu </h2>
          <div className="underline"></div>
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={filteriedItems} />
        </div>
      </section>
    </main>
  );
}

export default App;

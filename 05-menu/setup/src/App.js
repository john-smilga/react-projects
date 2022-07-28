import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const Allcategories = ['all', ...new Set (items.map((item)=> item.category))];
console.log(Allcategories);
function App() {
  
  const [fooditem, setFoodItem] = useState(items)
  const [categories, setCategories] = useState(Allcategories);


    //But with this method it won't be easy to identify if a new 
    //array has been added so the best approach will be to use an automatic call
  const filterBtn =(category) => {
    if( category=== 'all'){
        setFoodItem(items)
        return;
    }
    let newdisplay = fooditem.filter((item)=> item.category === category)
    setFoodItem(newdisplay);
  }

  //This is the function for the automatic call and what new set does is that 
  // it makes it possible for you to be able to provide unique names of each data
  // without all the data logging out themselves.


  return <main>
    <section className='menu-section'>
      <div className='title'>
       <h2>Menu</h2>
       <div className='underline'></div>
      </div>
      <Categories allCategory={categories} filter={filterBtn}/>
      <Menu items={fooditem} />

    </section>
  </main>;
}

export default App;

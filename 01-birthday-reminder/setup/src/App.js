// importing both React abd useState
import React, { useState } from 'react';
// importing a list of friends
import data from './data';
// importing list component
import List from './List';
function App() {
  // using useState and setting state of friends to data array
  const [friends, setFriends] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{friends.length} Birthdays Today</h3>
        {/* using List component here */}
        <List friends={friends}/>
        {/* clearing the state by passing in an empty array here */}
        <button onClick={()=>setFriends([])}>
          Clear All Listed
        </button>
      </section>
    </main>
  )
}

export default App;

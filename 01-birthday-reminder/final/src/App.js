import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)

  function removeSinglePerson(id) {
    setPeople(current => 
      current.filter(p => {
        return p.id != id
      })
    )
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} removeSinglePerson={removeSinglePerson} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App

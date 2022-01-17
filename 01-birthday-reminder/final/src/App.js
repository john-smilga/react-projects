import React, { useState } from 'react';
import data from './data';
import List from './List';
import axios from 'axios';

//const MY_KEY = process.env.REACT_APP_API_KEY;

const options = {
  method: 'POST',
  url: 'https://books17.p.rapidapi.com/authors/name',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'books17.p.rapidapi.com',
    'x-rapidapi-key': '7f82c2ffd3msh388debc36cc5507p190321jsnd0d8d68a9431'
  },
  data: { cursor: 1, birth_date: 'Rowling', alternative_names: false }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;

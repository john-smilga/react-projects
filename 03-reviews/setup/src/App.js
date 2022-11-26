import React from 'react';
import Review from './Review';


function App() {
  return <h2>
  <section className="container">
    <div className="title">
      <h2>our reviews</h2>
      <div className="underline"></div>
    </div>
    <Review/>
  </section>
  </h2>;
}

export default App;

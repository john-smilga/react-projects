import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    url = `${mainUrl}${clientID}`;
    try {
      const response = await fetch(url);
      const data = response.json();
      setPhotos(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
  };
  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input type='text' className='form-input' placeholder='search' />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        {/* <div className='photos-center'>
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div> */}
      </section>
    </main>
  );
}

export default App;

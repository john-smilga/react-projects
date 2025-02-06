import React from 'react'

const Photo = ({
  urls: { regular },           // Destructuring the 'regular' URL from 'urls' for the image source
  alt_description,             // Destructuring the 'alt_description' for the alt text of the image
  likes,                       // Destructuring the number of 'likes' for the photo
  user: {
    name,                      // Destructuring the 'name' of the user who uploaded the photo
    portfolio_url,             // Destructuring the user's 'portfolio_url' for the link to their profile
    profile_image: { medium }, // Destructuring the 'medium' profile image URL of the user
  },
}) => {
  return (
    <article className='photo'> 
      {/* The photo article containing the image and the user info */}
      <img src={regular} alt={alt_description} /> 
      {/* Display the image using the 'regular' URL with the 'alt_description' as alt text */}
      
      <div className='photo-info'>
        {/* Div containing photo information */}
        <div>
          <h4>{name}</h4> 
          {/* Display the user's name */}
          <p>{likes} likes</p>
          {/* Display the number of likes */}
        </div>
        
        <a href={portfolio_url}>
          {/* Link to the user's portfolio */}
          <img src={medium} alt='' className='user-img' />
          {/* Display the user's profile image */}
        </a>
      </div>
    </article>
  )
}

export default Photo

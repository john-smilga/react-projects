import React, { useState } from "react"


                                             // (PROP DRILLING)
const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p>
          {/* if readmore is true then display full info else run info with substring method showing 200 characters, since the value is false we see the short version of the info by default */}
          {readMore?info: `${info.substring(0, 200)}...`}

          {/* (!readmore)<--this basically means whatever the value, ill pass the opposite, so if false, it will be true and vice versa */}
          <button onClick={()=> setReadMore(!readMore)}>
            {/* checking state value and if true "show less" else read more, form of toggle */}
            {readMore? 'show less': 'read more'}
          </button>
          </p>
        <button className="delete-btn" onClick={()=>
        // indicates removal using id
        removeTour(id)}>not interested</button>
      </footer>
    </article>
  )
}

export default Tour
